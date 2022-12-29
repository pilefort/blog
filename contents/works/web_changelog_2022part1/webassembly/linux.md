## ブラウザでLinuxを動かせるサイト登場
WebAssemblyを使い、ブラウザ上でDebianバイナリを実行できる仮想Linux環境が開発・公開されました[^webvm]。ShellコマンドやLua, Node.js, Python3, Rubyを実行できます。また、Cのコードをブラウザ上でコンパイルし、動かすこともできるそうです (エラーが発生し動作確認できなかったので、スクショは載せてません)。

<figure>
  <img src='/images/web_changelog_2022part1/webassembly/webvm_shell_ruby_example.png' alt='shellコマンドやrubyが動くことを確認' width='450' height="450" />
  <figcaption>shellコマンドやrubyが動くことを確認</figcaption>
</figure>

コア技術として、x86バイナリをWebAssemblyにJITコンパイルできるCheerpXというものを使っているそうです[^Cheerpx]。ちなみに、このCheerpXはブラウザサポートが切れたAdobe Flashを動かすために使われるもので、主要ブラウザで利用可能です[^cheerpx_browser_support]。

### ブラウザで動く Ruby, PHP, SQLite
ブラウザで動くようになったものは他にもあり、例えば、Ruby 3.2.0のPreview1からWebAssemblyのサポート[^ruby320preview1]が入り、ブラウザ上でRubyが動くようになりました[^rubyplayground]。

他にもブラウザ上でWordPress (PHP + SQLite) を動かした例[^wordpress_in_browser]やブラウザ上でPostgreSQLを動かしながら学べるサイト[^postgres_in_browser]も登場しました。ブラウザを開発環境として使うWebContainer (詳細はうぇぶちぇんじろぐ2021に記載) も昨年登場し、今後このようなものが増えていきそうです。

[^webvm]: [https://webvm.io/](https://webvm.io/)
[^Cheerpx]: [https://medium.com/leaningtech/webvm-client-side-x86-virtual-machines-in-the-browser-40a60170b361](https://medium.com/leaningtech/webvm-client-side-x86-virtual-machines-in-the-browser-40a60170b361)
[^cheerpx_browser_support]: [https://medium.com/leaningtech/cheerpx-for-flash-now-generally-available-a20bc2a5eea6](https://medium.com/leaningtech/cheerpx-for-flash-now-generally-available-a20bc2a5eea6)
[^ruby320preview1]: [https://www.ruby-lang.org/en/news/2022/04/03/ruby-3-2-0-preview1-released/](https://www.ruby-lang.org/en/news/2022/04/03/ruby-3-2-0-preview1-released/)
[^rubyplayground]: [https://try.ruby-lang.org/playground/](https://try.ruby-lang.org/playground/)
[^wordpress_in_browser]: [https://wasmlabs.dev/articles/wordpress-in-the-browser/](https://wasmlabs.dev/articles/wordpress-in-the-browser/)
[^postgres_in_browser]: [https://www.crunchydata.com/developers/tutorials](https://www.crunchydata.com/developers/tutorials)
