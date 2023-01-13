import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import decode from 'jwt-decode'

import logo from '../assets/logo.png'
import search from '../assets/search-solid.svg'
import Avatar from '../components/Avatar'
import '../style/component/Navbar.css'
import { setCurrentUser } from '../actions/currentUser'

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    let user = useSelector((state) => (state.currentUserReducer));
    console.log(user)

    useEffect(() => {
        const token = user?.token

        if (token) {
            const decodeToken = decode(token)
            console.log(new Date().getTime())
            console.log(decodeToken.exp * 1000)
            if (decodeToken.exp * 1000 < new Date().getTime()) {
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
    }, [dispatch])

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
        dispatch(setCurrentUser(null))
    }
    // const handleLogout =()
    return (
        <div className="potion-nav">
            <nav className='main-nav'>
                <div className='navbar'>
                    <Link to='/' className='nav-item nav-logo'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <Link to='/' className='nav-item nav-btn'>
                        About
                    </Link>
                    <Link to='/' className='nav-item nav-btn'>
                        Products
                    </Link>
                    <Link to='/' className='nav-item nav-btn'>
                        For teams
                    </Link>
                    <form className='nav-search'>
                        <input type="text" placeholder='Search...' />
                        <img className='search-icon' src={search} alt="seacrh" width='18' />
                    </form>

                    {
                        user === null ? <div><Link to='/Auth' className='nav-auth-btn auth-login'> Log in</Link> <Link to='/auth' className='nav-auth-btn auth-signup' > Sign up</Link> </div> :
                            <>
                                <Link to='/'> <Avatar borderRadius="50%" backgroundColor="blue" px="10px" py="7px" color="white">{user.result.name.charAt(0).toUpperCase()}</Avatar></Link>
                                <button className='nav-auth-btn auth-logout' onClick={handleLogout}>Log out</button>
                            </>

                    }

                </div>
            </nav>
        </div>
    )
}

export default Navbar