import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <>

            {/* navigation bar */}
            <nav className='navbar'>

                {/* navigation links */}
                <ul className="navbar-links">

                    <li className='nav_link'>
                        Electronics
                    </li>

                    <li className='nav_link'>
                        Fashion
                    </li>

                    <li className='nav_link'>
                        Home
                    </li>

                    <li className='nav_link'>
                        Beauty
                    </li>

                    <li className='nav_link'>
                        Fitness
                    </li>

                </ul>

            </nav>

        </>
    )
}

export default Navbar