import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Comments from './components/Comments'
import Albums from './components/Albums'
import Photos from './components/Photos'
import Users from './components/Users'
import { Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Posts/>} />
          <Route path='/comments' element={<Comments/>} />
          <Route path='/Albums' element={<Albums/>}/>
          <Route path='/Photos' element={<Photos/>}/>
          <Route path='/Users' element={<Users/>}/>
        </Routes>
      </>
    )
  }
}
