import React from 'react'
import './Foot.css'
import { FaFacebook,FaInstagram,FaTwitter,FaCopyright } from 'react-icons/fa'

export default function Flast() {
  return (
    <section className='footer'>
        <div className='f-content'>
            <div className='foot-logo'>
                <h1>F  <span>&</span>B Recipe</h1>
                <FaFacebook className='facebook'/>
                <FaInstagram className="instagram"/>
                <FaTwitter className='twitter'/>
                <p>
                    Copyright <FaCopyright/> 2030 by F&B Recipe inc. All right reserved
                </p>
            </div>
            <div className='c-detail'>
                <h1>Contact us</h1>
                <h2>
                    xyz Road m street india
                </h2>
                <h2>
                    123-456-789
                </h2>
                <h2>xyz@fbrecipe@gmail.com</h2>
            </div>
            <div className='c-detail '>
                <h1>Account</h1>
                <h2>
                   Create Account
                </h2>
                <h2>
                   Sign-in
                </h2>
                <h2>Android App</h2>
       
            </div>
            <div className='c-detail '>
                <h1>Company</h1>
                <h2>
                  About F & B Recipe
                </h2>
                <h2>
                  For Bussiness
                </h2>
                <h2>Cooking Partner</h2>
       
            </div>
            <div className='c-detail '>
                <h1>Resources</h1>
                <h2>
                   Reciepe directory
                </h2>
                <h2>
                  Help Center
                </h2>
                <h2>Privacy a& terms</h2>
       
            </div>
        </div>
        </section>

  )
}
