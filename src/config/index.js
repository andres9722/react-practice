import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAEogoe65r1S4oLRcNAJuiSb_wLbEgOTZU',
  authDomain: 'hooks-826f6.firebaseapp.com',
  databaseURL: 'https://hooks-826f6.firebaseio.com',
  projectId: 'hooks-826f6',
  storageBucket: 'hooks-826f6.appspot.com',
  messagingSenderId: '201266744066'
}

const init = () => firebase.initializeApp(config)

const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider()

  return firebase.auth().signInWithRedirect(provider)
}

const signOut = () => firebase.auth().signOut()

export { init, login, signOut }
