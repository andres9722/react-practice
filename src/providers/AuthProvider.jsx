import React, { Component, createContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

export const AuthContext = createContext({})

export class AuthProvider extends Component {
  state = {
    auth: false,
    user: null,
    error: null,
    loading: false
  }

  componentDidMount () {
    this.setState({ loading: true })

    this.removeListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.providerData)
        this.setState({
          auth: true,
          loading: false,
          user: user.providerData[0]
        })
      } else {
        this.setState({
          loading: false
        })
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  onLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    this.setState({ loading: true })

    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(() => {
        this.setState({
          loading: false,
          auth: true
        })
      })
      .catch(error => {
        this.setState({ loading: false, error: error })
      })
  }

  onSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ auth: false, user: null })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render () {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          onLogin: this.onLogin,
          onSignOut: this.onSignOut
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export const AuthConsumer = AuthContext.Consumer
