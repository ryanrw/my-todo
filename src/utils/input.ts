import { useState } from 'react'

export function useInput() {
  const [input, setInput] = useState(``)

  function addValueToState(event: React.ChangeEvent<HTMLInputElement>) {
    const userInput = event.target.value
    setInput(userInput)
  }

  return {
    input,
    addValueToState,
  }
}
