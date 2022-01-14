import React ,{useState} from 'react'
import AnnDetail from './AnnDetails/AnnDetail'
import SelectAudience from './SelectAudience/SelectAudience'
import SelectMedium from './SelectMedium/SelectMedium'
import "./_AnnouncementBtn.scss"

function AnnouncementBtn(props) {
    const [toggleState, setToggleState] = useState (1);
   
    const toggleStep = (index) => {
        setToggleState(index);
    }

function getData () {
    alert ("")
}
    return (
        <div className='ann_btn'>
            <div className='ann_container'>
             <h2 className='heading'>Create Announcement</h2>
             
             <div className='for_button'> 

              <div className='all_btn'>

              <button className={toggleState === 1 ? "active-tab" : "not-active-tab" }
                 onClick= {() => toggleStep(1) }> Announcement Details </button>
              </div>

              <div  className='all_btn'>

              <button className={toggleState === 2 ? "active-tab" : "not-active-tab" }
               onClick= {() => toggleStep(2) }>Select Audience</button>
              </div>
              <div  className='all_btn'>
              <button className={toggleState === 3 ? "active-tab" : "not-active-tab" }
              onClick= {() => toggleStep(3) }>Select Medium</button>
              </div>
              </div>
                
              <div  className={toggleState === 1 ? "active-steps" : "not-active"} >
            <AnnDetail  data={ getData}/>

                <div className='next_btn'>
                    <button  onClick= {() => toggleStep(2) } className='next'>Next</button>
                   </div>

                </div>

                <div className={toggleState === 2 ? "active-steps" : "not-active"} >
            <SelectAudience data={ getData} 
       />
           

                <div className='last_btn'>
              <button  onClick= {() => toggleStep(1) } className='back'>Back</button>
              <button  onClick= {() => toggleStep(3) } className='next'>Next</button>

              </div>
                </div>

                <div className={toggleState === 3 ? "active-steps" : "not-active"} >
            <SelectMedium   data={ getData} />
            

                 <div className='last_buttons'>
               <button onClick= {() => toggleStep(2)} className='btn_previous'>Go back To Previous Step</button>
               <div>
               <button className='send'>Send Text</button>
               </div>

               <div>
               <button className='send'>Send Email</button>
              </div>
              </div>
                </div> 
            </div>
            
        </div>
    )
}

export default AnnouncementBtn
