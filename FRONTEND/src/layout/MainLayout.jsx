import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>

            {/* header component */}
            <Header />

            {/* outlet for child component */}
            <Outlet />

            {/* footer component */}
            <Footer />
        </>
    )
}

export default MainLayout