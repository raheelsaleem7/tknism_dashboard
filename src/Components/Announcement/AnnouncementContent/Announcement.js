import React,{useState} from 'react'
import AnnouncementBtn from '../../AccountDetail/AnnouncementBtn'
import Dashboard from '../Dashboard/Dashboard'
import './_Announcement.scss'

function Announcement() {
    const [toggleState, setToggleState] = useState (false);
   
    const toggleStep = (index) => {
        if(toggleState) {
            setToggleState(false)
        } else {
            setToggleState(true)
        }
    }
    function getData () {
        alert ("")
    }
    return (
        <div className='announcement'>
            
          
           <div className='announcement_main'>
           <div className='announcement_header'>
           <div>
           <div className='menu_bar'  onClick= {() => toggleStep() }>
               <span></span>
               <span></span>
               <span></span>
              </div> 
              <div className ={toggleState === true ? "active-steps" : "not-active"} > 
              <Dashboard data={ getData}  />
            </div>
           </div>
              

           </div>
           <div className="main_item">
           <div className='header'>
            <h2 className='an_heading'>Announcements</h2>
           

           <div className='header_content'>
         <div className='header_detail'>
        <h4 className='header_name'>Text Announcements</h4>
         </div>

         <div className='header_detail'>
        <h4 className='header_name'>Email Announcements</h4>
         </div>

         <div className='header_detail'>
        <h4 className='header_name'>Announcement Reco</h4>
         </div>
           </div>
           </div>
           <AnnouncementBtn />
           </div>
        </div>
        </div>
    )
}

export default Announcement
