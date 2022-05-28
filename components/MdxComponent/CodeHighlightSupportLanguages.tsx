import Prism from 'prismjs'
import 'prismjs/components/prism-docker.min'
import 'prismjs/components/prism-rust.min'
import 'prismjs/components/prism-dart.min'

// NOTE: prism-react-rendererでサポートしている言語
// cf. https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js

export const CodeHighlightSupportLanguages = Prism?.languages
