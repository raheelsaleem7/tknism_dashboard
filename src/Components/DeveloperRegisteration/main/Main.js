import React from 'react'
import Side from '../side/Side'
import group from '../../../images/Group 16415.png'
import './_Main.scss'

function Main() {
    return (
        <div className='main'>
            <div className='main_container'>
                <Side />
               <div className='main_library'>
                   <div className="main_heading">
                     <h3>Create Developer Account</h3>
                     <span>Lorem ipsum dolor sit amet,sconsetetur sadipscing elitr,sed diam nonumy eirmod <br/>
                     tempor invident ut labour et dolore magna aliquyam erat,sed diam voluptua.At</span>
                   </div>
                   <div className='div_icon'>
                <div className='main_content'>
               <img src={group} />
                   </div>
                    <div>
                        <p className='upload_clr'>Upload Logo</p>
                    </div>
               </div>
               <div className='for_forms'>
               <div className='for_email'>
               <label for="name" className='form_name'>Name</label>
               <input type="text" placeholder="Enter Name" className='input_data' required />
               </div>
               

                 <div className='for_email'>
               <label for="name" className='form_name'>Email</label>
               <input type="text" placeholder="Enter Email" className='input_data' required />
               </div>
                 </div>

               <div className='for_forms'>

               <div>
               <label for="name" className='form_name'>Contact</label>
               <input type="text" placeholder="Enter Contact Number" className='input_data' required />
               </div>


               <div>
               <label for="name" className='form_name'>NTN Number</label>
               <input type="text" placeholder="Enter NTN Number" className='input_data' required />
               </div>

               </div>

               <div className='head_ofc'>
               <label for="name" className='form_name2'>Head Office Address</label>
               <input type="text" placeholder="Enter Head Office Address" className='input_data2' required />
               </div>

             <div className='for_check'>
             <input type="checkbox" className='checkbox' />
             <label for ="#"><p className='para'>By checking this box  you agree to AKRU specific <span className='terms'>Terms of Use</span> and <span className='terms'>
              Privacy Policy</span> as well as our partner Dwolla's <span className='terms'>Terms of Service </span>and <span className='terms'>Privacy Policy</span> </p></label>
             </div>

              </div>
 
                </div>
            </div>
    
    )
}

export default Main
