import React from 'react'
import "../styles/signup.css"
import Button from '@mui/material/Button'

export default function Signup() {
    return (
        <>
            <h2>Register</h2>
            <div id='signup'>
                <div className="login-type"><Button variant='outlined' onClick={() => alert("clicked...")} >Student</Button></div>
                <div className="login-type"><Button variant='outlined' onClick={() => alert("clicked...")} >Staff</Button></div>
            </div>
        </>
    )
}
