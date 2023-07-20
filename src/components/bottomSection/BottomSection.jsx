import React from 'react'
import buy from "../../assets/buy.png"
import sell from "../../assets/sell.png"
import "./bottomSection.css"

const BottomSection = () => {
    return (
        <div className='bottomSection'>
            <div className='image'>
                <img src={buy} alt="" />
            </div>

            <div className='image'>
                <img src={sell} alt="" />
            </div>
        </div>
    )
}

export default BottomSection