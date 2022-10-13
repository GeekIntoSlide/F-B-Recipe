import React from 'react'
import './Contact.css'
import Signup from '../static/signup.jpg'
import { useState } from 'react';
import {getAuth,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { async } from '@firebase/util';
import { db } from '../firebase';
import { doc, limitToLast, serverTimestamp, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Contact() {
  const[formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
   })
   const onChange=(e)=>{
     setFormData((prevData)=>({
      ...prevData,
      [e.target.id]:e.target.value,
     }))
   }
   const{name,email,password}=formData;
 async function formSubmit(e){
  e.preventDefault();
  
  try {
    const auth=getAuth();
  const userCred=await 
  createUserWithEmailAndPassword(auth,email,password);
  updateProfile(auth.currentUser,{
    displayName:name
  })
    const user=userCred.user;
    const formDataCopy={...formData}
    delete formDataCopy.password
    formDataCopy.timestamp=serverTimestamp();
    await setDoc(doc(db,"users",user.uid),formDataCopy)
    toast.success("Sign-up succesfully");
  } catch (error) {
    toast.error("Something went wrong")
  }
 


}
  return (
    <section>
      <div className='container'>
        <div className='form'>
          <h2>Sign up today and get your first meal free</h2>
          <div className='form-col'>
            <div>
              <h1>Name</h1>
              <input id="name" type="text" placeholder="Fullname" value={name} onChange={onChange}/>
            </div>
            <div>
              <h1>Email</h1>
              <input id="email"type="Email" placeholder="Enter your email" value={email} onChange={onChange}/>
            </div>
            <div>
              <h1>Tell us what you want to hear from us</h1>
              <input id="password"type="password" placeholder="password" value={password} onChange={onChange}/>
            </div>
            <div>
              <button type='submit' onClick={formSubmit} >Sign up now</button>
            </div>
          </div>
        </div>
        <div className='photo'>
       <img src={Signup}/>
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
    </section>
  )
}
