import firebase from 'firebase/app'
import 'firebase/auth'

export interface IUserInput {
  email: string
  password: string
}

export async function login(user: IUserInput) {
  const firebaseAuth = firebase.auth()
  await firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
}

export async function logout() {
  await firebase.auth().signOut()
}
