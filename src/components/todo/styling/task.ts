import styled from '@emotion/styled'

export const TaskContainer = styled.div`
  box-sizing: border-box;
  width: 40vw;
  background-color: var(--task-background);
  color: var(--todo-font-color);
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding-left: 20px;
`

export const Name = styled.h1`
  font-weight: 400;
  font-size: 1.3rem;
  margin: 0;
`

export const Duration = styled.p`
  margin-bottom: 0;
`
