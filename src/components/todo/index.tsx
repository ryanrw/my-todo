import React from 'react'

import { TodoBoxContainer } from './styling/todo'
import { Date } from './date'
import { Task } from './task'

interface TodoProps {
  info: {
    date: {
      at: Number
      day: string
      month: string
      year: Number
    }
    event: {
      name: string
      from: string
      to: string
    }
  }
}

export const Todo: React.FC<TodoProps> = ({ info }) => {
  return (
    <TodoBoxContainer>
      <Date data={info.date} />
      <Task event={info.event} />
    </TodoBoxContainer>
  )
}
