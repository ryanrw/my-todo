import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { useHistory, Link } from 'react-router-dom'

import { authContext } from '../contexts/auth'

const StyledButton = styled.button`
  font-size: 20px;
`

export const Button: React.FC = () => {
  const history = useHistory()
  const auth = useContext(authContext)

  return auth.isAuthenticate ? (
    <StyledButton
      onClick={() => {
        auth.signOut()
        history.push('/')
      }}
    >
      Logout
    </StyledButton>
  ) : (
    <StyledButton>
      <Link to='/login'>Login</Link>
    </StyledButton>
  )
}
