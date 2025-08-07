import React from 'react'
import './shopTheHighlights.css'

const ShopTheHighlights = () => {
    return (
        <>

            {/* Shop The Highlights section */}
            <section className='section highlight_section'>

                {/* container */}
                <div className="container highlight_Section">

                    <h2 className="heading">Shop The Highlights</h2>

                    {/* highlight container */}
                    <div className="highlight_content">

                        <div className="highlight_item">
                            <img src="/mini-banner (1).webp" alt="mini banner - 1" />
                        </div>

                        <div className="highlight_item">
                            <img src="/mini-banner (2).webp" alt="mini banner - 2" />
                        </div>

                        <div className="highlight_item">
                            <img src="/mini-banner (3).webp" alt="mini banner - 3" />
                        </div>

                        <div className="highlight_item">
                            <img src="/mini-banner (4).webp" alt="mini banner - 4" />
                        </div>

                        <div className="highlight_item">
                            <img src="/mini-banner (5).webp" alt="mini banner - 5" />
                        </div>

                        <div className="highlight_item">
                            <img src="/mini-banner (6).jpg" alt="mini banner - 6" />
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default ShopTheHighlights