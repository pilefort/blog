# ライブラリ編
## Partytown
　Partytownはリソースを大量消費するスクリプトをWeb Worker (Service Workerなど) に移すことでメインスレッドのブロッキングを防ぐ遅延ロードライブラリです[^partytown]。

　Partytownは以下の目標を掲げています[^partytown_goal]。つまり、サードパーティーライブラリを従来通りのやり方で使ったり管理したりつつ、Web Workerに安全に移行できるものを目指してるようです (解釈違いがあったらすみません)。

- Free up main thread resources to be used only for the primary web app execution
- Sandbox third-party scripts and allow or deny their access main thread APIs
- Isolate long-running tasks within the web worker thread
- Reduce layout thrashing coming from third-party scripts
- Throttle third-party scripts' access to the main thread
- Allow third-party scripts to run exactly how they're coded and without any alterations
- Read and write main thread DOM operations *synchronously* from within a web worker, allowing scripts running from the web worker to execute as expected
- No build-steps or bundling required, but rather update scripts the same way as traditional third-party scripts are updated

　Next.jsで利用する場合は次のようになります。`<Partytown />`を読み込んだ後に、Web Workerに移行したいライブラリのtypeを`text/partytown`と指定して使います[^partytown_usage]。Partytownはまだ安定板になってないため、利用する場合はGetting Startedやissueをよく確認してください。

```tsx
import Head from "next/head";
import { Partytown } from "@builder.io/partytown/react";

const Home = () => {
  return (
    <>
      <Head>
        <title>My App</title>
        <Partytown />
        <script src="https://example.com/analytics.js" type="text/partytown"></script>
      </Head>
      <main>...</main>
    </>
  );
};

export default Home;
```

[^partytown]: [https://github.com/BuilderIO/partytown](https://github.com/BuilderIO/partytown)
[^partytown_goal]: [https://github.com/BuilderIO/partytown/wiki#goals](https://github.com/BuilderIO/partytown/wiki#goals)
[^partytown_usage]: [https://github.com/BuilderIO/partytown/wiki/Getting-Started#React](https://github.com/BuilderIO/partytown/wiki/Getting-Started#React)
