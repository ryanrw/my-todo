import React from 'react'

import { TaskContainer, Name, Duration } from './styling/task'

interface TaskProps {
  event: {
    name: string
    from: string
    to: string
  }
}

export const Task: React.FC<TaskProps> = ({ event }) => {
  return (
    <TaskContainer>
      <Name>{event.name}</Name>
      <Duration>
        {event.from} - {event.to}
      </Duration>
    </TaskContainer>
  )
}
