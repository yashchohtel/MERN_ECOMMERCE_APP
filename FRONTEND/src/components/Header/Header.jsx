import React from 'react'
import './header.css'
import Navbar from './Navbar'
import Searchbar from '../SearchBar/Searchbar'

import { IoBagHandleOutline, IoBagHandleSharp } from "react-icons/io5";
import { RiUser6Line, RiUser6Fill } from "react-icons/ri";
import { GoHeart, GoHeartFill } from "react-icons/go";

const Header = () => {
    return (
        <>
            {/* header */}
            <div className="header">

                {/* container wrapper */}
                <div className="container">

                    {/* logo */}
                    <div className="logo">
                        <img src="/logo-light.png" alt="logoimage" />
                    </div>

                    {/* nav and search container */}
                    <div className="Nav_search_cont">

                        {/* navigation bar */}
                        <Navbar />

                        {/* search bar */}
                        <Searchbar />

                    </div>

                    {/* user actions */}
                    <div className="user-actions">

                        {/* wishlist */}
                        <div className="action-icon">

                            {/* count */}
                            <span className='count'>3</span>

                            <div className="icon_container">
                                <GoHeart className='icon_outline' />
                                <GoHeartFill className='iocn_filled' />
                            </div>

                        </div>

                        {/* cart */}
                        <div className="action-icon">

                            {/* count */}
                            <span className='count'>3</span>

                            <div className="icon_container">
                                <IoBagHandleOutline className='icon_outline' />
                                <IoBagHandleSharp className='iocn_filled' />
                            </div>

                        </div>

                        {/* user profile */}
                        <div className="action-icon">

                            <div className="icon_container">
                                <RiUser6Line className='icon_outline' />
                                <RiUser6Fill className='iocn_filled' />
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
};

export default Header