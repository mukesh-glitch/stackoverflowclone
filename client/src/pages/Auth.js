import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../style/pages/Auth.css'
import icon from '../assets/icon.png'
import Aboutauth from '../components/Aboutauth'
import { signupAction, loginAction } from '../actions/auth'


const Auth = () => {

    const [isSignup, setisSignup] = useState(false)
    const [UserInput, setUserInput] = useState({ name: "", email: "", password: "" })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSwitch = () => {
        setisSignup(!isSignup
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(UserInput)
        if (isSignup) {
            dispatch(signupAction(UserInput, navigate))
        } else {
            dispatch(loginAction(UserInput, navigate))
        }
    }


    const handleChange = (e) => {
        setUserInput({ ...UserInput, [e.target.name]: e.target.value })
    }
    return (
        <section className='auth-section'>
            {isSignup && <Aboutauth />}
            <div className="auth-container">
                {!isSignup && <img src={icon} alt='stack overflow' className='auth-icon' />}
                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <label htmlFor="name">
                                <h4>Display Name</h4>
                                <input type="text" value={UserInput.name} onChange={handleChange} name='name' id='name' required />
                            </label>
                        )
                    }

                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" value={UserInput.email} onChange={handleChange} name='email' id='email' required />
                    </label>

                    <label htmlFor="password">
                        <div className="login-password">
                            <h4>Password</h4>
                            <h4 style={{ color: "#007ac6", fontSize: '13px' }}>{isSignup ? "" : "forget password?"}</h4>
                        </div>
                        <input type="password" value={UserInput.password} onChange={handleChange} name='password' id='password' minLength={8} required />
                        {isSignup && <p>Passwords must contain at least eight <br />characters, including at least 1 letter and 1<br /> number.</p>}
                    </label>
                    {
                        isSignup && (
                            <label htmlFor="check">
                                <input type="checkbox" name='check' id='check' />
                                <p>Opt-in to receive occasional,<br /> product updates, user research invitations, <br />company announcements, and digests.</p>

                            </label>
                        )
                    }

                    <button type='submit' className='auth-btn'>{isSignup ? 'Sing up' : 'Log in'}</button>

                    {
                        isSignup && (
                            <p style={{ color: "#666767", fontSize: '13px' }}>By clicking “Sign up”, you agree to our
                                <span style={{ color: "#007ac6" }}> terms of <br />service</span>,
                                <span style={{ color: "#007ac6" }}>privacy policy</span> and
                                <span style={{ color: "#007ac6" }}>cookie policy</span>
                            </p>
                        )
                    }
                </form>

                <p>
                    {isSignup ? 'already have an account?' : " Don't havea an account?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : "sign up"}</button>
                </p>
            </div>
        </section>
    )
}

export default Auth