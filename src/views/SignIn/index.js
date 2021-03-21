import React, { useState } from 'react'
import { signIn } from '../../config/firebase.js'

function SignIn({navigate}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSignIn = () => {
        signIn(email, password).then(res => {
            alert(`This ${email} has been Signed In`)
            navigate('dashboard')
        }).catch(
            e => {
                alert(e.message)
            }
        )
    }
    return (
        <div className="form">
             <h3>Sign In</h3>
            <label htmlFor='email'>Email</label>
            <input type="email" id='email' required name='email' onChange={(e) => { setEmail(e.target.value) }} value={email} />
            <br />
            <label htmlFor='password'>Password</label>
            <input type="password" id='password' required name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <br />
            <button onClick={onSignIn}>Sign In</button>
            <p>Already a Member <strong onClick={() => navigate('signup')}>Sign Up</strong></p>
        </div>
    )
}

export default SignIn