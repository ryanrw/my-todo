import React from 'react'
import firebase from 'firebase/app'

import { Button } from '../components/button'

export const Home: React.FC = () => {
  firebase.auth().onAuthStateChanged(user => {
    console.log(user)
  })

  return (
    <div>
      <Button />
      test
    </div>
  )
}
