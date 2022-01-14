import React from 'react'
import './_SelectMedium.scss'
import man from '../../../images/man.png'
import man2 from '../../../images/man2.png'
import man3 from '../../../images/man3.png'
import man4 from '../../../images/man4.png'
import man5 from '../../../images/man5.png'

function SelectMedium() {
    const medium = [
        {
           name:"Antom Kluie",
           img :man,
        },
        {
            name:"Antom Kluie",
            img :man2,
         },
         {
            name:"Antom Kluie",
            img :man3,
         },
         {
            name:"Antom Kluie",
            img :man5,
         }, 
         {
            name:"Antom Kluie",
            img :man5,
         }, 
         {
            name:"Antom Kluie",
            img :man5,
         },  {
            name:"Antom Kluie",
            img :man5,
         },  {
            name:"Antom Kluie",
            img :man5,
         },  {
            name:"Antom Kluie",
            img :man5,
         },  {
            name:"Antom Kluie",
            img :man5,
         },  {
            name:"Antom Kluie",
             img :man5,
         },  {
            name:"Antom Kluie",
           img :man5,
         },  {
            name:"Antom Kluie",
           img :man5,
         },  {
            name:"Antom Kluie",
            img :man5,
         }, 
]      
    return (
        <div className='medium_select'>
            <div className='medium_container'>
             <div className='title'>
             <h3 className='members'>Selected Members (42)</h3>
              </div>
              <div className='for_all'>
              <div className='div_img'>
                  {
                      medium.map((SelectMedium) => (
                          
                     
                <div className='audience1'>
                  <img src={SelectMedium.img} />
                  <p className='mediumText'>{SelectMedium.name}</p>

                </div>

                 ))
                }
              </div>
              
              <div className='div_img'>
                  {
                      medium.map((SelectMedium) => (
                          
                     
                <div className='audience1'>
                  <img src={SelectMedium.img} />
                  <p className='mediumText'>{SelectMedium.name}</p>

                </div>

                 ))
                }
              </div>
              </div>
              
             

            </div>
        </div>
    )
}

export default SelectMedium
