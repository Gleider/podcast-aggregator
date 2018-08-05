import React from 'react'
import Main from '../templates/Main'
import Search from './Search'

export default props => 
  <Main icon="home" title="Home" subtitle="home page">
    <Search />
    {/* <div className='display-4'>welcome</div>
    <hr />
    <p className='mb-0'>System to test = </p> */}
  </Main>