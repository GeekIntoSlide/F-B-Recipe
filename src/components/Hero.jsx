import './Hero.css'
import React from 'react'
import HeroImg from '../static/hero3.png';

 function Hero() {
  return (
    <section className='hero-section'>
        <div className='hero'>
            <div className='hero-text'>
             <h1 className='hero-heading'>We deliver healthy meal to you every single day</h1>
             <p className='hero-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, optio eos! Doloribus praesentium cum laborum nam ut repellat aperiam animi accusamus dolor. Dolorum praesentium quia libero. Mollitia explicabo voluptatibus quisquam.</p>
            <a href='#' className='btn btn--full'>Start eating Well</a>   
            <a href='#' className='btn btn--outline'>Learn More &darr;</a>          
            </div>
            <div className='hero-img'>
                <img src={HeroImg} className="hero-image"/>
            </div>
        </div>
    </section>
  )
}
export default Hero;
