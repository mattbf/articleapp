import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils, getDefaultKeyBinding} from 'draft-js';
import {
  Pane,
  IconButton,
  Text,
  Heading,
  Avatar,
  TextInput
} from 'evergreen-ui'

import "draft-js/dist/Draft.css"
import "draftail/dist/draftail.css"
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE, ENTITY_TYPE } from "draftail"


const formatButton= {
  backgroundColor: '#FFFFFF',
  focus: 'none',
  border: '0'
}

function ArticleEditor() {
  const editor = (
  <DraftailEditor
    //rawContentState={initial || null}
    //onSave={onSave}
    blockTypes={[
      { type: BLOCK_TYPE.HEADER_THREE},
      { type: BLOCK_TYPE.HEADER_TWO},
      { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
    ]}
    inlineStyles={[{ type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }]}

    entityTypes={[
      {type: ENTITY_TYPE.LINK},
      {type: ENTITY_TYPE.DOCUMENT},
    ]}
    blockTypes={[
      {type: BLOCK_TYPE.HEADER_TWO},
      {type: BLOCK_TYPE.HEADER_THREE},
      {type: BLOCK_TYPE.UNORDERED_LIST_ITEM},
      {type: BLOCK_TYPE.ORDERED_LIST_ITEM},
    ]}
    inlineStyles={[{type: INLINE_STYLE.BOLD}, {type: INLINE_STYLE.ITALIC}]}
  />
)

return(
  editor
)

}

export default ArticleEditor

// <div>
//   <Editor
//     editorState={editorState}
//     onChange={setEditorState}
//   />
//   <IconButton
//       marginBottom={16}
//       appearance={buttonSelected ? null : 'minimal'}
//       height={24}
//       icon="cross"
//   />
// </div>
