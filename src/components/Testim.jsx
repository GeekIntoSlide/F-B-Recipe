import './Testim.css'
import React from 'react'
import T1 from'../static/teImg/t1.jpg'
import T2 from'../static/teImg/t2.jpg'
import T3 from'../static/teImg/t3.jpg'
import T4 from'../static/teImg/t4.jpg'
import T5 from'../static/teImg/t5.jpg'
import T6 from'../static/teImg/t6.jpg'
import T7 from'../static/teImg/t7.jpg'
import T8 from'../static/teImg/t8.jpg'
import T9 from'../static/teImg/t9.jpg'
import T10 from'../static/teImg/t10.jpg'
import T11 from'../static/teImg/t11.jpg'
import T12 from'../static/teImg/t12.jpg'
import Face1 from '../static/lorem-face-1.jpg';
import Face2 from '../static/lorem-face-2.jpg';
import Face3 from '../static/lorem-face-3.jpg';
import Face4 from '../static/lorem-face-4.jpg';


export default function Testim() {
  return (
    
    <section className='testim'>
     <div className='testi-table'>
      <div className='costumer-test'>
        <div className='test-text'>
            <h1>Testimonial</h1>
            <h2 className='te'>Once you try you it can't go back!</h2>
        </div>
        <div className='comment'>
            <div>
             <img  src={Face1}/>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus voluptatem fugiat repellat odit neque consequuntur porro perferendis fugit id quisquam ratione totam, autem, rem, maiores labore doloremque atque? Assumenda, officia!</p>
             <p>-Samuel</p>
            </div>
            <div>
            <img src={Face2}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae nam voluptate quidem excepturi atque impedit temporibus facere! Accusamus, quam odit. Voluptas ipsam iusto quas illo neque? Temporibus, laboriosam eligendi.</p>
            <p>-Smith</p>
            </div>
            <div>
            <img src={Face3}/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nostrum reiciendis dolor. Dolor nobis voluptate aliquam eligendi id odio culpa laboriosam, nihil, odit adipisci voluptatum, itaque laudantium officia veritatis ratione.</p>
             <p>-Mark</p>
            </div>
            <div>
            <img src={Face4}/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo accusamus vero? In rem atque excepturi, eos nulla commodi quaerat id quasi doloribus assumenda quia magnam, tempore quo aliquid amet.</p>
            <p>-David</p>
            </div>
        </div>
    </div>  
    {/* <div className='mPhoto'>
        <img src={T1}/>
        <img src={T2}/>
        <img src={T4}/>
        <img src={T3}/>
        <img src={T12}/>
        <img src={T11}/>
        <img src={T5}/>
        <img src={T10}/>
        <img src={T7}/>
        <img src={T8}/>
        <img src={T6}/>
        <img src={T9}/>
        
    </div>   */}
    </div>   
    </section>
  )
}
