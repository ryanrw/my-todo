import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export function firebaseInitialize() {
  const firebaseConfig = {
    apiKey: 'AIzaSyAJGM28wWzFIk4DfMyj-miRHFKDhTPhNwg',
    authDomain: 'todo-app-1a5e2.firebaseapp.com',
    databaseURL: 'https://todo-app-1a5e2.firebaseio.com',
    projectId: 'todo-app-1a5e2',
    storageBucket: 'todo-app-1a5e2.appspot.com',
    messagingSenderId: '978197661864',
    appId: '1:978197661864:web:2ca5f008bfa70782431a9d',
  }

  firebase.initializeApp(firebaseConfig)
}
