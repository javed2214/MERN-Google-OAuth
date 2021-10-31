import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const authLinks = (
        <div>
            <li><Link style={{ textDecoration: 'none', marginRight: '10px' }} to='/todos'>Todos</Link></li>
            <li><Link to='/profile'><img src = { auth.isAuthenticated ? auth.user.thumbnail : null } height='40px' width='40px' style={{ borderRadius: '100px', border: '2px solid white', marginRight: '25px'  }} /></Link></li>
            <li><button style={{ marginRight: '11px', marginTop: '-8px' }} className="btn red"><a style={{ textDecoration: 'none', fontWeight: 'bold' }} href='/auth/logout'>Logout</a></button></li>
        </div>
    )

    const guestLinks = (
        <></>
    )
// #616161 grey darken-2
    return(
        <div>
            <nav className="#263238 blue-grey darken-4">
                <div className="nav-wrapper">
                    <span style={{ marginLeft: '10px', cursor: 'pointer' }} className="brand-logo"><Link style={{ textDecoration: 'none' }} to='/profile'>Todo App</Link></span>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        { auth.isAuthenticated ? authLinks : guestLinks }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar