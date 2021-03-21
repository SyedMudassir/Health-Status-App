import React, { useState } from 'react'
import { signUp, addUsers } from '../../config/firebase'

function SignUp({ navigate }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [healthStatus, setHealthStatus] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [checkConfirmPasword, setCheckConfirmPassword] = useState()
    const [disease,setDisease ]=  useState('')
     
    const onSignUp = () => {
        signUp(email, password).then(res => {
            addUsers({ email, fullName, healthStatus,disease }).then(res => {
                alert(`This '${email}' has been Signed Up`)
                navigate('signin')
            }).catch(e => {
                alert(e.message)
            }).catch(e => {
                alert(e.message)
            })
        })
        checkEmptyField()
        resetAllstates()
    }
    const checkEmptyField = () => {
        { fullName === '' || email === '' || password === '' || healthStatus === '' || confirmPassword === '' ? alert('All Fields are required'):navigate('signup') }
    }
    const validatePassword = () => {
        { password === confirmPassword ? setCheckConfirmPassword(true) : setCheckConfirmPassword(false) }
    }
    const statusValCheck = (e) =>{
        healthStatus === 'I am ill' && console.log('imill')
    }
    const resetAllstates = () =>{
       setEmail('')
       setFullName('')
       setConfirmPassword('')
       setHealthStatus('')
       setpassword('')     
    }
    return (
        <div className="form">
            <h3>Sign Up</h3>
            <label htmlFor="fullName">Name</label>
            <input type="text" required name='fullName' id='fullName' onChange={(e) => setFullName(e.target.value)} required value={fullName} />
            <br />
            <label htmlFor='email'>Email</label>
            <input type="email" id='email' required name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <br />
            <label htmlFor='password'>Password</label>
            <input type="password" id='password' name='password' onChange={e => setpassword(e.target.value)} value={password} required />
            <br />
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input className={checkConfirmPasword && 'border-add'} type="password" id='confirmPassword' onBlur={() => validatePassword()} onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} required name='confirmPassword' />
            <br />
            Health Status
            <select name="healthStatus" onChange={(e) => setHealthStatus(e.target.value) } id="healthStaus" required>
                <option value={healthStatus}>Select Option</option>
                <option value='Healty And Wealthy'>Healty And Wealthy</option>
                <option value='I am ill' onSelect={statusValCheck()}>I'm ill</option>
            </select>
            { healthStatus === 'I am ill' &&    
                <div>
                    Disease
                    <select name="disease" onChange={(e) => setDisease(e.target.value) } id="disease" required>
                        <option value=''>Select Option</option>
                        <option value='Fever'>Fever</option>
                        <option value='Flu'>Flu</option>
                        <option value='Cuff'>Cuff</option>
                    </select>
                </div>
            }
            <br />
            <button onClick={onSignUp}>Sign Up</button>
            <p>Already a Member <strong onClick={() => navigate('signin')}>Sign In</strong></p>
        </div>
    )
}

export default SignUp