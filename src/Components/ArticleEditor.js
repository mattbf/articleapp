// import React, { Component } from 'react';
// import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import { draftToHtml } from 'draftjs-to-html';
// import { htmlToDraft } from 'html-to-draftjs';
 import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//
// const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
// function ArticleEditor(props) {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     editorState: EditorState.createEmpty(),
//   //   };
//   // }
//
//   // onEditorStateChange: Function = (editorState) => {
//   //   this.setState({
//   //     editorState,
//   //   });
//   // }
//     return (
//       <div>
//       <Editor
//         editorState={props.editorState}
//         wrapperClassName="demo-wrapper"
//         editorClassName="demo-editor"
//         onEditorStateChange={props.onChange}
//         readOnly={props.readOnly}
//         toolbarHidden={props.readOnly}
//       />
//       <textarea
//           disabled
//           value={JSON.stringify(content, null, 4)}
//         />
//       </div>
//     )
// }
//
// export default ArticleEditor


import React, { Component } from 'react';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class ArticleEditor extends Component {
  constructor(props) {
    super(props);
    const contentState = convertFromRaw(content);
    this.state = {
      contentState,
    }
  }

  onContentStateChange: Function = (contentState) => {
    this.setState({
      contentState,
    });
  };

  render() {
    const { contentState } = this.state;
    return (
      <div>
      <Editor
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onContentStateChange={this.onContentStateChange}
      />
      <textarea
          disabled
          value={JSON.stringify(contentState, null, 4)}
        />
      </div>
    );
  }
}

export default ArticleEditor
