import React, { useEffect, useRef, useState } from 'react'

import mdxLiveEditor from '@mdx-live/editor'
import styled from 'styled-components'
import 'rbx/index.css'
import '@axe312/easymde/dist/easymde.min.css'

import { Button, Card, Container } from 'rbx'
import Grid from './mdx/Grid'
import defaultMarkdownValue from './default.md'

import {rbxComponents, rbxKeys} from './mdx/Rbx'

const Textarea = styled.textarea`
  min-width: 100vw;
  min-height: 100vh;
`

// const rbxlist = () => <Container>{rbxKeys}</Container>
// console.log(rbxComponents)

const components = [
  {
    tagname: 'Grid',
    component: Grid,
    title: 'Grid',
    description: 'Display content next to each other',
    icon: 'th-large',
    demo: `<Grid>
  <img src="https://source.unsplash.com/weekly?water" alt="" />
  <img src="https://source.unsplash.com/weekly?nature" alt="" />
  <img src="https://source.unsplash.com/weekly?air" alt="" />
</Grid>`
  },
  { tagname: 'Card', component: Card },
  { tagname: 'Button', component: Button },
  ...rbxComponents

]

const replacements = {
  h1: ({ children, ...props }) => (
    <h1 style={{ color: 'tomato' }} {...props}>
      {children}
    </h1>
  )
}

export default function App() {
  const editorRef = useRef(null)
  const [editor, setEditor] = useState(null)

  useEffect(() => {
    if (!editor) {
      setEditor(
        mdxLiveEditor({
          components,
          replacements,
          easymde: { element: editorRef.current }
        })
      )
    }
  })

  return (
    <Textarea ref={editorRef} id="editor" defaultValue={defaultMarkdownValue} />
  )
}
