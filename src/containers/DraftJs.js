// import React from 'react'
// import { Editor, EditorState } from 'draft-js'
// import 'assets/styles/css/components/Draft.css'

// import PrismDecorator from 'draft-js-prism'
// import Prism from 'prismjs'

// export default class DraftJs extends React.Component {

//   constructor(props) {
//     super(props)
//     var decorator = new PrismDecorator({
//       prism: Prism,
//       defaultSyntax: 'javascript',
//     })
//     this.state = {
//       editorState: EditorState.createEmpty(decorator)
//     }
//     this.onChange = (editorState) => this.setState({
//       editorState: EditorState.set(editorState, { decorator })
//     })
//     this.getEditorText = () => alert(this.state.editorState.getCurrentContent().getPlainText())
//   }

//   render() {
//     return (
//       <div>
//         <Editor
//           editorState={ this.state.editorState }
//           onChange={ this.onChange }
//           placeholder="Enter some text..."
//         />
//         <input
//           onClick={ this.getEditorText }
//           type="button"
//           value="Get editor text"
//         />
//       </div>
//     )
//   }
// }