import React, { Component } from 'react'
import Main from '../templates/Main'

const headerProps = {
  icon: 'users',
  title: 'User',
  subtitle: 'Register a user'
}

export default class UserCrud extends Component {
  render() {
    return (
      <Main {...headerProps}>
        Register User
      </Main>
    )
  }
}