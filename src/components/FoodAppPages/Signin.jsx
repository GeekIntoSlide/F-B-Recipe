import React from 'react'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import './AllCss/Signin.css'
export default function Signin() {
  const navigate=useNavigate();
  const [formData,setFormData] = useState({
    email:'',
    password:''
  })
  const{email,password}=formData;
  function onChange(e){
    setFormData((prevData)=>({
      ...prevData,
      [e.target.id]:e.target.value
    }))
  }
  async function onFormSubmit(e){
    e.preventDefault();
    try {
      const auth=getAuth();
      await signInWithEmailAndPassword(auth,email,password)
      navigate("/");
      toast.success("Log-IN successfull")

    } catch (error) {
      toast.error("Please enter current detail")
      
    }
  }
  return (
    <div className='signinForm'>
      <div className='sign-col'>
        <div className='img-div'> 
          
        </div>
        <div className='text-div'>
          <div className='a'>
            <h1>SIGN-IN</h1>
            <p>today and get your first meal free</p>
          </div>
          <div className='a2'>
            <div>
            <label>Email</label>
            <input type="email" placeholder='Enter your email' value={email} onChange={onChange} id="email"/>
            </div>
            <div>
            <label>Password</label>
            <input type="password" placeholder='Enter your password' value={password} onChange={onChange} id="password"/>
            </div>
            
          </div> 
          <button type='submit' onClick={onFormSubmit}>SIGN-IN</button>
          <p className='forgotPassword'>Forgot your password? <span onClick={()=>navigate("/forgotpassword")}>reset now</span></p>
          <p className='forgotPassword'>dont't have an acoount? <span onClick={()=>navigate("/signup")}>SIgn-up</span></p>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </div>
  )
}
