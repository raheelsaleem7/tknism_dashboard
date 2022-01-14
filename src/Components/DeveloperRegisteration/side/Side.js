import React from 'react'
import "./_Side.scss"
import image1 from '../../../images/Ellipse 70.png'
import logo from '../../../images/logo.png'

function Side() {
    return (
        <div className='side'>
          <div className='side_content'>
            <div className='akru'>
         <img src={image1} className='img1' />
        <div className='content'>
         <img src={logo} className='logo' />
         <p className='real'>Real Estate <br /> Management System</p>
        </div>

         <div className='last'>
         <img src={logo} className='logo'/>
         <p className='power'>Powered by Akru</p>
         </div>
         
          </div>
         
          </div>
        </div>
    )
}

export default Side
