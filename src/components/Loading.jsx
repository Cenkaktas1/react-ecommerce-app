import React from 'react'
import '../css/loading.css'
import { useSelector } from 'react-redux'

function Loading() {

    const {loading} = useSelector((store) => store.products);

  return (
    loading && loading === true ? (
        <div className='loading-overlay'>
            <div className='spinner'></div>
        </div>
    ) : null   
  )
}

export default Loading
