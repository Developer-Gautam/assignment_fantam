import React from 'react'
import "./MainCard.css"
import downArrow from "../../assets/downArrow.png"

const MainCard = () => {
    return (
        <div className='main'>
            <div className='topSection'>
                <div>
                    <img src="https://static.vecteezy.com/system/resources/previews/008/505/801/original/bitcoin-logo-color-illustration-png.png" alt="" />
                    <p>Bitcoin</p>
                </div>
                <p style={{ color: "#a7a7a7" }}>BTC</p>
            </div>

            <div className='value'>
                <h1 style={{ color: "#575757" }}>3.529020 BTC</h1>
                <div>
                    <h3 style={{ color: "#a7a7a7" }}>$19.153 USD</h3>
                    <p>-2.32%</p>
                </div>
            </div>

           <div className='arrowDiv'>
           <img className='downArrow' src={downArrow} alt="" />
           </div>

        </div>
    )
}

export default MainCard