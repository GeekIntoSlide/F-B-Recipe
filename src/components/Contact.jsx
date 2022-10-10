import React from 'react'
import './Contact.css'
import Signup from '../static/signup.jpg'
export default function Contact() {
  return (
    <section>
      <div className='container'>
        <div className='form'>
          <h2>Sign up today and get your first meal free</h2>
          <div className='form-col'>
            <div>
              <h1>Name</h1>
              <input type="text" placeholder="Fullname"/>
            </div>
            <div>
              <h1>Email</h1>
              <input type="Email" placeholder="Enter your email"/>
            </div>
            <div>
              <h1>Tell us what you want to hear from us</h1>
              <input type="text" placeholder="Fullname"/>
            </div>
            <div>
              <button type='submit'>Sign up now</button>
            </div>
          </div>
        </div>
        <div className='photo'>
       <img src={Signup}/>
        </div>
      </div>
    </section>
  )
}
