import React, { Component } from 'react';
import axios from 'axios'

export default class Photos extends Component {
    state = {
        info: [],
    }

    componentWillMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then((bulk) => this.setState({ info: bulk.data }))
    }
    render() {
        console.log(this.state.info);
        return (
            <>
                <h1 className='text-center m-7 text-yellow-400 font-semibold text-5xl bg-red-500'>PHOTOS</h1>
                <div className='flex justify-center items-center flex-wrap bg-red-500'>
                    {
                        this.state.info.map((ele, i) => {
                            return (

                                <div key={i} className="mt-8 ml-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="rounded-t-lg" src={ele.url} alt="" />
                                    </a>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.albumId}</h5>
                                        </a>
                                        <img className="rounded-t-lg" src={ele.thumbnailUrl} alt="" />
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.id}</p>
                                        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            {ele.title}
                                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
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
