import React, { Component } from 'react'
import Main from '../templates/Main'
import axios from 'axios'

const headerProps = {
  icon: 'users',
  title: 'User',
  subtitle: 'Register a user'
}

const baseUrl = 'http://localhost:5000/oapi/db'
const initialState = {
  user: {
    username: '',
    email: ''
  },
  list: []
}


export default class UserCrud extends Component {
  
  state = { ...initialState }

  componentWillMount() {
    axios(baseUrl).then(resp => {
      this.setState({ list: resp.data })
    })
  }


  clear() {
    this.setState({ user: initialState.user })
  }

  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
      .then(res => {
        const list = this.getUpdatedList(res.data)
        this.setState({ user: initialState.user, list })
      })
  }

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter(u => u.id !== user.id)
    if(add) list.unshift(user)
    return list
  }

  updateField(event) {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value
    this.setState({ user })
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" name="username" value={this.state.user.username} onChange={e => this.updateField(e)} placeholder="Enter with the name" />
              
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" className="form-control" name="email" value={this.state.user.email} onChange={e => this.updateField(e)} placeholder="Enter with the email"/>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={e => this.save(e)}>Save</button>
            <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }

  load(user) {
    this.setState({ user })
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then(res => {
      const list = this.getUpdatedList(user, false)
      this.setState({ list })
    })
  }



  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }

  renderRows() {
    return this.state.list.map(user => {
      return (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning" onClick={() => this.load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    )
  }
}