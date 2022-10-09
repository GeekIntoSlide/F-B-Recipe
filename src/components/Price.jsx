import './price.css'
import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";

export default function price() {
  return (
   <section >
    <div className='price-main'>
    <div className='price-text'>
     <h1>Price</h1>
     <h2>Eating wel without breaking the bank</h2>
    </div>
    <div className='price-card'>
        <div className='card1'>
            <h1>Starter</h1>
            <h1>$79</h1>
            <h3>Per month that just $2.6 per meal</h3>
            <div className='check'>
                <p><AiOutlineCheck/> 1 meal per day</p>
                <p><AiOutlineCheck/> Order from 11 am to 9 pm</p>
                <p><AiOutlineCheck/> Delivery is free</p>
                <p><AiOutlineCheck/> Get Access to latest recipe</p>
                <button type="submit">Start eating well</button>
            </div>
        </div>
        <div className='card2'>
            <h1>Complete</h1>
            <h1>$79</h1>
            <h3>Per month that just $2.6 per meal</h3>
            <div className='check'>
                <p><AiOutlineCheck/> 1 meal per day</p>
                <p><AiOutlineCheck/> Order from 11 am to 9 pm</p>
                <p><AiOutlineCheck/> Delivery is free</p>
                <p><AiOutlineCheck/> Get Access to latest recipe</p>
                
                <button type="submit">Start eating well</button>
            </div>
        </div>

    </div>
    </div>
   </section>
  )
}
