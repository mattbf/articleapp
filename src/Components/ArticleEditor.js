import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import {draftToHtml} from 'draftjs-to-html';
import {htmlToDraft} from 'html-to-draftjs';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


function ArticleEditor(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     editorState: EditorState.createEmpty(),
  //   };
  // }

  // onEditorStateChange: Function = (editorState) => {
  //   this.setState({
  //     editorState,
  //   });
  // }
    const { editorState } = props.editorState
    const { onChange } = props.onChange
    console.log(editorState)
    return (
      <Editor
        editorState={props.editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={props.onChange}
        readOnly={props.readOnly}
        toolbarHidden={props.readOnly}
      />
    )
}

export default ArticleEditor


// <Editor
//   editorState={editorState}
//   wrapperClassName="demo-wrapper"
//   editorClassName="demo-editor"
//   onEditorStateChange={this.onEditorStateChange}
//   readOnly={props.readOnly}
//   toolbarHidden={props.readOnly}
// />
