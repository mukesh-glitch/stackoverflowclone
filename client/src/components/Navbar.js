import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import search from '../assets/search-solid.svg'
import Avatar from '../components/Avatar'

import '../style/component/Navbar.css'
const Navbar = () => {
    let user = 1;
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
                        user === null ? <div><Link to='/Auth' className='nav-auth-btn auth-login'> Log in</Link> <Link to='/Auth' className='nav-auth-btn auth-signup' > Sign up</Link> </div> :
                            <>
                                <Link to='/'> <Avatar borderRadius="50%" backgroundColor="blue" px="10px" py="7px" color="white">M</Avatar></Link>
                                <button className='nav-auth-btn auth-logout' >Log out</button>
                            </>

                    }

                </div>
            </nav>
        </div>
    )
}

export default Navbar