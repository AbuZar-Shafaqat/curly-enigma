import React, { Component } from 'react'
import axios from 'axios'

export default class Posts extends Component {
  state = {
    user: [],
  }
  componentWillMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => { this.setState({ user: res.data }) })
    console.log("testing");
  }
  render() {
    console.log(this.state.user);
    return (
      <>
      <h1 className='text-center m-7 text-blue-400 font-semibold text-5xl bg-yellow-400'>POSTS</h1>
        <div className='flex justify-center items-center flex-wrap bg-yellow-400'>
          {
            this.state.user.map((ele, i) => {
              return (
                <div key={i} href="#" className="mt-10 ml-5 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <p className="font-normal text-gray-700 dark:text-gray-400">Body: {ele.body}</p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Id: {ele.id}</h5>
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-700 dark:text-white">Title: {ele.title}</h5>
                  <h5 className="mb-2 text-1xl font-semibold tracking-tight text-blue-900 dark:text-white">User Id: {ele.userId}</h5>
                </div>
              )
            }

            )
          }
        </div>
      </>
    )
  }
}
