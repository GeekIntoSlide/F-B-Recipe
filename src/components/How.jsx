import './How.css';
import React from 'react'
import iphone from '../static/hero2.jpg';
export default function How() {
  return (
    <section className='how'>
        <div className='how-content'>
            <div className='how-heading'>
             <p>How it's works</p>
             <h1>Your daily dose of health in 3 easy steps!</h1>
            </div>
            <div className='how-style'>
              <div className='style-text'>
                <h1>01</h1>
                <h2>Tell us what you like (and what not)</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis natus dicta qui fugiat ullam voluptates, aliquam maiores laboriosam fugit rem dignissimos consectetur reiciendis voluptatem sed animi, eveniet et. Consequuntur?</p>
              </div>
              <div className='style-img'>
                <img src={iphone}></img>
              </div>
            </div>
            <div className='how-style'>
              <div className='style-img'>
                <img src={iphone}></img>
              </div>
              <div className='style-text'>
                <h1>02</h1>
                <h2>Choose your plan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis natus dicta qui fugiat ullam voluptates, aliquam maiores laboriosam fugit rem dignissimos consectetur reiciendis voluptatem sed animi, eveniet et. Consequuntur?</p>
              </div>
            </div>
            <div className='how-style'>
              <div className='style-text'>
                <h1>03</h1>
                <h2>Order</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis natus dicta qui fugiat ullam voluptates, aliquam maiores laboriosam fugit rem dignissimos consectetur reiciendis voluptatem sed animi, eveniet et. Consequuntur?</p>
              </div>
              <div className='style-img'>
                <img src={iphone}></img>
              </div>
            </div>
        </div>

    </section>
  )
}
