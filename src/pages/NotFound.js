import React from 'react'
import '../App.css'
import Error from '../assets/404.png'

const NotFound = () => {
    return (
        <div className='not-background'>
            <img src={Error} alt="404 Error" />
        </div>
    )
}

export default NotFound