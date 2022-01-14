import React from 'react'
import './_SelectAudience.scss'
import man from '../../../images/man.png'
import man2 from '../../../images/man2.png'
import man3 from '../../../images/man3.png'


function SelectAudience() {
    const select = [
        {
           name:"Antom Kluie",
           mail:"john@akru.co",
           img :man,
        },
        {
            name:"Antom Kluie",
            mail:"john@akru.co",
            img :man2,
         },
         {
            name:"Antom Kluie",
            mail:"john@akru.co",
            img :man3,
         },
         {
            name:"Antom Kluie",
            mail:"john@akru.co",
            img :man3,
            
         }, 
          


      
    ] 
    return (
        <div className='select'>
             <div className='select_container'>
                
                  
              <div className='select_content'>
                  <div className='select_heading'>
                <h4 className='slt_text'>Select Allottees</h4>
                 </div>
              <div className='select_check'>
              <div class="form-group">
      <input type="checkbox" id="css" />
      <label for="css">Select All</label>
    </div>
              </div>
              <div className='search_box'>
                  <input type="search"  placeholder='Seacrh' />
               
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg_search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
            
              </div>
                   <div className='for_contents'>
              {
                   select.map((SelectAudience) => (

              <div className='clients_info'>
                  
                  <div class="form-group">
      <input type="checkbox" id="css" />
      <label for="css"></label>
    </div>
                 <div className='image'>
                  <img src={SelectAudience.img}  />
                 </div>
                  
                  <div className='img_info'>
                   <p className='green'>{SelectAudience.name}</p>
                   <p className='email'>{SelectAudience.mail}</p>
                  </div>
               
                  </div>
   ))
}
                 </div>
           
             </div>
             <div className='select_content'>
                  <div className='select_heading'>
                <h4 className='slt_text'>Select Agents</h4>
                 </div>
              <div className='select_check'>
              <div class="form-group">
      <input type="checkbox" id="css" />
      <label for="css">Select All</label>
    </div>
              </div>
              <div className='search_box'>
                  <input type="search"  placeholder='Seacrh' />
               
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg_search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
            
              </div>
                <div  className='for_contents' >
              {
                   select.map((SelectAudience) => (

              <div className='clients_info'>
                  
                  <div class="form-group">
      <input type="checkbox" id="css" />
      <label for="css"></label>
    </div>
                 <div className='image'>
                  <img src={SelectAudience.img}  />
                 </div>
                  
                  <div className='img_info'>
                   <p className='green'>{SelectAudience.name}</p>
                   <p className='email'>{SelectAudience.mail}</p>
                  </div>
               
                  </div>
   ))
}
                 </div>
           
             </div>
             
             <div className='select_content'>
                  <div className='select_heading'>
                <h4 className='slt_text'>Select Agents</h4>
                 </div>
              <div className='select_check'>
             
              </div>  
              
              <div className='div_img'>
                  {
                      select.map((SelectAudience) => (
                          
                     
                <div className='audience1'>
                  <img src={SelectAudience.img} />
                  <p className='green'>{SelectAudience.name}</p>

                </div>

                 ))
                }
              </div>

              <div className='div_img'>
                  {
                      select.map((SelectAudience) => (
                          
                     
                <div className='audience1'>
                  <img src={SelectAudience.img} />
                  <p className='green'>{SelectAudience.name}</p>

                </div>

                 ))
                }
               
      
              </div>
              
              </div>       
              
             
    
        </div>

      </div>  
    )
}

export default SelectAudience
