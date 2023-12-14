import React from 'react'
import { Button } from 'reactstrap'
import '../App.css'
import Error from '../assets/404.png'

const NotFound = () => {
    return (
        <div className='not-background'>
            <img src={Error} alt="404 Error" />
            {/* <Button>Back Home</Button> */}
            {/* <h1>Test text</h1> */}
        </div>
    )
}

export default NotFound