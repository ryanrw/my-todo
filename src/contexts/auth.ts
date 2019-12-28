import { createContext } from 'react'

import { login, logout, IUserInput } from '../utils/authenticate'

interface IAuthenticateContext {
  isAuthenticate: boolean
  signIn(user: IUserInput): void
  signOut(): void
}

export const initAuthObject: IAuthenticateContext = {
  isAuthenticate: false,
  signIn(user: IUserInput) {
    login(user)
    this.isAuthenticate = true
  },
  signOut() {
    logout()
    this.isAuthenticate = false
  },
}

export const authContext = createContext<IAuthenticateContext>(initAuthObject)
export const AuthProvider = authContext.Provider
