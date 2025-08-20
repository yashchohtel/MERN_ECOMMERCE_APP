import React from 'react'
import './PromotionBanner.css'

const PromotionBanner = () => {
    return (
        <>
            <section className='section promotion_banner_section'>

                <div className='container promotion_banner_container'>

                    <div className='promotion_banner_content'>
                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30884092/2024/9/26/367647c1-15ee-4cb1-a663-ad92b67b2ebf1727355804986-Red-Tape-Men-Solid-PU-Sneakers-5011727355804641-1.jpg" alt="" />
                        <div className="overlay"></div>
                        <p className="banner_heading">Rare Sneakers</p>
                        <button className='promo_button'>SHOP NOW</button>
                    </div>

                    <div className='promotion_banner_content'>
                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23328104/2025/6/17/e402e1ad-62dd-49d5-8012-ce265187f00a1750163521057-SWISS-MILITARY-HANOWA-Men-Dial--Bracelet-Style-Straps-Analog-1.jpg" alt="" />
                        <div className="overlay"></div>
                        <p className="banner_heading">Sports Watch</p>
                        <button className='promo_button'>SHOP NOW</button>
                    </div>

                    <div className='promotion_banner_content'>
                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22651478/2024/9/28/0c51e356-6860-46e3-b0d1-fb1c369741341727513504612-Voyage-Polarised-And-UV-Protected-Lens-Full-Rim-Wayfarer-Sun-1.jpg" alt="" />
                        <div className="overlay"></div>
                        <p className="banner_heading">Premium Sunglasses</p>
                        <button className='promo_button'>SHOP NOW</button>
                    </div>

                </div>

            </section>
        </>
    )
}

export default PromotionBanner