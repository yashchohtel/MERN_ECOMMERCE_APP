import React from 'react'
import './searchbar.css'
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
    return (
        <>
            <div className='searchBar'>

                {/* search icon */}
                <span className="search_icon">
                    <FiSearch />
                </span>

                {/* search input */}
                <input type="text" className='search_input' placeholder='Search for products...' />

            </div>
        </>
    )
}

export default Searchbar