import React from 'react'
import './AllCss/forgot.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {getAuth,sendPasswordResetEmail} from 'firebase/auth';

export default function ForgotPassword() {
    const auth=getAuth();
  const navigate=useNavigate();
  const [formData,setFormData] = useState({
    email:'',
  })
  const{email}=formData;
  function onChange(e){
    setFormData((prevData)=>({
      ...prevData,
      [e.target.id]:e.target.value
    }))
  }
  async function onFormSubmit(e){
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth,email);
      toast.success("link send succesfull");
      navigate("/signin");
      
     

    } catch (error) {
      toast.error("request denied")
      
    }
  }
  return (
    <div className='forgotpassword'>
      <div className='sign-col'>
        <div className='img-div'> 
          
        </div>
        <div className='text-div'>
          <div className='a'>
            <h1>Forgot-Password</h1>
            
          </div>
          <div className='a2'>
            <div>
            <label>Email</label>
            <input type="email" placeholder='Enter your email' value={email} onChange={onChange} id="email"/>
            </div>
            <div>
            
            </div>
            
          </div> 
          <button type='submit' onClick={onFormSubmit}>Send reset link</button>
         <p className='forgotPassword'>dont't have an account? <span onClick={()=>navigate("/signup")}>SIgn-up</span></p>
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
