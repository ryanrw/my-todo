import React from 'react'

import { Todo } from './components/todo'
import { GlobalStyle } from './components/global-style'

export function App() {
  const info = {
    date: {
      at: 17,
      day: 'Tuesday',
      month: 'Dec',
      year: 2019,
    },
    event: {
      name: 'Go to shopping',
      from: '5 PM',
      to: '7 PM',
    },
  }

  return (
    <div>
      <Todo info={info} />
      <GlobalStyle />
    </div>
  )
}
