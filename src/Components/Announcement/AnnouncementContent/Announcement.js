import React from 'react'
import AnnouncementBtn from '../../AccountDetail/AnnouncementBtn'
import Dashboard from '../Dashboard/Dashboard'
import './_Announcement.scss'

function Announcement() {
    return (
        <div className='announcement'>
           <Dashboard />
           <div className='announcement_main'>
           <div className='announcement_header'>
               <div>
            <h2 className='an_heading'>Announcements</h2>
           </div>

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
    )
}

export default Announcement
