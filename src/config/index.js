import firebase from 'firebase/app'

const config = {
  apiKey: 'AIzaSyAEogoe65r1S4oLRcNAJuiSb_wLbEgOTZU',
  authDomain: 'hooks-826f6.firebaseapp.com',
  databaseURL: 'https://hooks-826f6.firebaseio.com',
  projectId: 'hooks-826f6',
  storageBucket: 'hooks-826f6.appspot.com',
  messagingSenderId: '201266744066'
}

const init = () => firebase.initializeApp(config)

export { init }
