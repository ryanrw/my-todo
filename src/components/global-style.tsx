import React from 'react'
import { Global, css } from '@emotion/core'

const globalCSS = css`
  html,
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    background: #fc5c7d;
    background: linear-gradient(to right, #6a82fb, #fc5c7d);
  }

  :root {
    --calendar-header: #c54e4d;
    --calendar-background: #efefef;
    --todo-font-color: #343434;
    --task-background: #f1f1f1;
  }
`

export function GlobalStyle() {
  return <Global styles={globalCSS} />
}
