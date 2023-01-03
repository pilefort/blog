import '../styles/globals.css'
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => {
    // next/imageとCustomImageでpropsが異なるため、以下で処理を分けている
    // TODO: next/imageをラップしたコンポーネントを利用することで、この辺りを統一したい
    return <OriginalNextImage
        {...props}
        src={props.src.src ? props.src.src.replace('static/media/public', '') : props.src.replace('static/media/public', '')}
        unoptimized
    />
  },
});
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
