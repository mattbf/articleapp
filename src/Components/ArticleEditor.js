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
import { convertToRaw, convertFromRaw } from "draft-js"
import { convertFromHTML, convertToHTML } from "draft-convert"


const formatButton= {
  backgroundColor: '#FFFFFF',
  focus: 'none',
  border: '0'
}

//converting editor content
const exporterConfig = {
  blockToHTML: (block) => {
    if (block.type === BLOCK_TYPE.BLOCKQUOTE) {
      return <blockquote />
    }

    // Discard atomic blocks, as they get converted based on their entity.
    if (block.type === BLOCK_TYPE.ATOMIC) {
      return {
        start: "",
        end: "",
      }
    }

    return null
  },

  entityToHTML: (entity, originalText) => {
    if (entity.type === ENTITY_TYPE.LINK) {
      return <a href={entity.data.url}>{originalText}</a>
    }

    if (entity.type === ENTITY_TYPE.IMAGE) {
      return <img src={entity.data.src} alt={entity.data.alt} />
    }

    if (entity.type === ENTITY_TYPE.HORIZONTAL_RULE) {
      return <hr />
    }

    return originalText
  },
}

const toHTML = (raw) =>
  raw ? convertToHTML(exporterConfig)(convertFromRaw(raw)) : ""

function ArticleEditor(props) {
  const editor = (
  <DraftailEditor
    //rawContentState={initial || null}
    //onSave={onSave}
    // onSave={(raw) => {
    //   console.log(toHTML(raw))
    // }}
    onSave={(raw) => props.onEdit(toHTML(raw))}
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
