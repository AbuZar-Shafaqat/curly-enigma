import React, { Component } from 'react';
import axios from 'axios'

export default class Comments extends Component {
    state={
        info:[],
    }

    componentWillMount(){
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then((bulk)=>this.setState({info:bulk.data}))
    }
  render() {
    console.log(this.state.info);
    return (
      <>
      <h1 className='text-center m-7 font-semibold text-5xl bg-red-400'>COMMENTS</h1>
        <div className='flex justify-center items-center flex-wrap bg-red-400'>
          {
            this.state.info.map((ele, i) => {
              return (
                <div key={i} href="#" className="mt-10 ml-5 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <p className="font-normal text-gray-700 dark:text-gray-400">Post Id:- {ele.postId}</p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Id:- {ele.id}</h5>
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-green-500 dark:text-white">Name:- {ele.name}</h5>
                  <h5 className="mb-2 text-1xl font-semibold tracking-tight text-blue-900 dark:text-white">Email:- {ele.email}</h5>
                  <h5 className="mb-2 text-1xl font-semibold tracking-tight text-blue-700 dark:text-white">Body:- {ele.body}</h5>
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
