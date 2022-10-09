import './Hero.css'
import React from 'react'
import HeroImg from '../static/hero3.png';
import Face1 from '../static/lorem-face-1.jpg';
import Face2 from '../static/lorem-face-2.jpg';
import Face3 from '../static/lorem-face-3.jpg';
import Face4 from '../static/lorem-face-4.jpg';
import Face5 from '../static/lorem-face-5.jpg';
import Face6 from '../static/lorem-face-6.jpg';

 function Hero() {
  return (
    <section className='hero-section'>
        <div className='hero'>
            <div className='hero-text'>
             <h1 className='hero-heading'>We deliver healthy meal to you every single day</h1>
             <p className='hero-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, optio eos! Doloribus praesentium cum laborum nam ut repellat aperiam animi accusamus dolor. Dolorum praesentium quia libero. Mollitia explicabo voluptatibus quisquam.</p>
            <a href='#' className='btn btn--full'>Start eating Well</a>   
            <a href='#' className='btn btn--outline'>Learn More &darr;</a>  
            <div className='costumer-list'>
            <img src={Face1} alt="face1" className='c-Face'/>
            <img src={Face2} alt="face1" className='c-Face'/>
            <img src={Face3} alt="face1" className='c-Face'/>
            <img src={Face4} alt="face1" className='c-Face'/>
            <img src={Face5} alt="face1" className='c-Face'/>
            <img src={Face6} alt="face1" className='c-Face'/>
            <span>More than<span>250000+</span> costumers</span>
            </div>        
            </div>
            <div className='hero-img'>
                <img src={HeroImg} className="hero-image" alt='face1'/>
            </div>
        </div>
    </section>
  )
}
export default Hero;
