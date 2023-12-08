import React from 'react'
import './NotFound.css'
import back from '../assets/404Background.png'

const NotFound = () => {
    return (
        <div className='background'>
            <img src={back} alt="404 Error" />
        </div>
    )
}

export default NotFound