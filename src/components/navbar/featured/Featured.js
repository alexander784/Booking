import React from 'react'
import "./featured.css"


const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src='https://plus.unsplash.com/premium_photo-1664297939846-330cfd170bae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHN0YXRpY3xlbnwwfHwwfHx8MA%3D%3D' 
            alt='' 
            className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Dublin</h1>
                <h2>123 Properties</h2>
            </div>
        </div>

        <div className='featuredItem'>
            <img src='https://images.unsplash.com/photo-1546617394-18f192a7a775?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHN0YXRpY3xlbnwwfHwwfHx8MA%3D%3D' 
            alt='' 
            className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Austin</h1>
                <h2>532 Properties</h2>
            </div>
        </div>
        
        <div className='featuredItem'>
            <img src='https://media.istockphoto.com/id/1313387262/photo/plasma-light-ball.webp?b=1&s=170667a&w=0&k=20&c=ZD58l8q0EEqTGz-NI_MQ8nJ_XgT5m7Sdqm9Zcq3dg2U=' 
            alt='' 
            className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Reno</h1>
                <h2> 533 Properties</h2>
            </div>
        </div>
       </div>
  )
}

export default Featured;
