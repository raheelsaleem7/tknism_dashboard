import React from 'react'
import "./_AnnDetail.scss"

function AnnDetail() {
    return (
        <div className='ann_detail'>

            <div className='details'>
         <div>
            <div className='ann_title'>
               <label for="name" className='form_name'>Announcement Title</label>
               <input type="text" placeholder="Enter Announcement title" className='input_data' required />
               </div>

               <div className='ann_title'>
               <label for="name" className='form_name'>Announcement Description</label>
               <input type="text" placeholder="Enter Announcement description" className='input_data2' required />
               </div>
        </div>
                
            </div>


        </div>
    )
}

export default AnnDetail
