import styled from '@emotion/styled'

export const DateContainer = styled.div`
  box-sizing: border-box;
  border-right: 1px solid darkgray;
  width: 150px;
  height: 170px;
  text-align: center;
  background-color: var(--calendar-background);
`

export const Month = styled.div`
  background-color: var(--calendar-header);
  color: white;
  padding: 10px 0;
  font-size: 1.4rem;
`

export const Body = styled.div`
  margin: 10px;
  color: var(--todo-font-color);
`

export const EventDate = styled.div`
  font-size: 2.5rem;
  margin: 10px 0;
  font-weight: 700;
`
