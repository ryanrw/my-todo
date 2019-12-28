import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase/app'

import { useInput } from '../utils/input'
import { login, IUserInput } from '../utils/authenticate'
import { authContext } from '../contexts/auth'

const LoginPage = styled.div`
  max-width: 100vw;
  height: 100vh;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginForm = styled.div`
  width: 40vw;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px 0;
`

export const Login: React.FC = () => {
  const username = useInput()
  const password = useInput()
  const [user, setUser] = React.useState<firebase.User | null>()
  const auth = useContext(authContext)

  const userInput: IUserInput = {
    email: username.input,
    password: password.input,
  }

  React.useEffect(() => {
    let isRedirected = false

    firebase.auth().onAuthStateChanged(user => {
      if (!isRedirected && user) {
        setUser(user)
      }
    })

    return () => {
      isRedirected = true
    }
  })

  if (user) {
    return <Redirect to='/' />
  }

  return (
    <LoginPage>
      <LoginForm>
        <input
          type='email'
          onChange={event => username.addValueToState(event)}
        />
        <input onChange={event => password.addValueToState(event)} />
        <button onClick={() => auth.signIn(userInput)}>Login</button>
      </LoginForm>
    </LoginPage>
  )
}
