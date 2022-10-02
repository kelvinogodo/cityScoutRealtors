import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import {BsParagraph} from 'react-icons/bs'
import {FaBold} from 'react-icons/fa'
import {BiItalic} from 'react-icons/bi'
import {
  FaHeading,FaLink,FaUnderline
} from 'react-icons/fa'
import {BiHeading} from 'react-icons/bi'
import {ImRedo} from 'react-icons/im'
import {ImUndo} from 'react-icons/im'
import { useCallback } from 'react'
import {TbBlockquote} from 'react-icons/tb'
import {ImPageBreak} from 'react-icons/im'
import {VscHorizontalRule} from 'react-icons/vsc'
import {GoListUnordered} from 'react-icons/go'
import {GoListOrdered} from 'react-icons/go'
import {ImStrikethrough} from 'react-icons/im'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
const MenuBar = ({ editor }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url,target : '_blank' })
      .run()
  }, [editor])

  if (!editor) {
    return null
  }

  return (
    <div className='task-bar'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <BiItalic/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <ImStrikethrough/>
      </button>
      
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
       <BsParagraph />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
       <FaHeading/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        <BiHeading/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <GoListUnordered/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <GoListOrdered/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <TbBlockquote/>
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <VscHorizontalRule/>
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        <ImPageBreak/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        <FaUnderline />
      </button>
      <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
        <FaLink />
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>
        <ImUndo/>
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <ImRedo/>
      </button>
    </div>
  )
}

const TipTap = ({setPostBody,body}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Underline,
    ],
    content: `${body}`,
    onUpdate : ({editor}) =>{
        const html = editor.getHTML()
        setPostBody(html)
    }
  })

  return (
    <div >
      <MenuBar editor={editor}/>
      <EditorContent editor={editor} className='tiptap-body'/>
    </div>
  )
}
export default TipTap