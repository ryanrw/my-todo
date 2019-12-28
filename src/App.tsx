import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { Home } from './pages/index'
import { Login } from './pages/login'
import { GlobalStyle } from './components/global-style'
import { firebaseInitialize } from './utils/firebase'
import { initAuthObject, AuthProvider, authContext } from './contexts/auth'

export function App() {
  // @todo add real info
  // @todo add uid in firebase rule
  // @todo add firebase context
  firebaseInitialize()

  return (
    <AuthProvider value={initAuthObject}>
      <Router>
        <ProtectRoute exact path='/'>
          <Home />
        </ProtectRoute>
        <Route path='/login'>
          <Login />
        </Route>
        <GlobalStyle />
      </Router>
    </AuthProvider>
  )
}

interface IProtectRouteProps {
  [key: string]: any
}

const ProtectRoute: React.FC<IProtectRouteProps> = ({ children, ...rest }) => {
  const auth = useContext(authContext)
  console.log('protected')

  return (
    <Route
      {...rest}
      render={(props: IProtectRouteProps) =>
        auth.isAuthenticate ? (
          children
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}
