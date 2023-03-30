import React, { useEffect, useState } from 'react'
import Navber from './Navber'
import './CSS Files/HomePage.css'
import './CSS Files/Colors.css'
// import './CSS Files/FeedCard.css'
import IMG1 from './aaa.jpg';
import IMG2 from './loginBack.avif';

export default function HomePage() {
  const [time,setTime] = useState(new Date());
  const [AMPM,setAMPM] = useState();
  const [imageIndex, setImageIndex] = useState(0);
  const imageUrls = [IMG1,IMG2];

  useEffect(()=>{setInterval(() => {
    if(time.getHours()>12)  {setAMPM("pm");}
    else {setAMPM("am");}
    setTime(new Date());
  }, 1000);},[]);

  const handleImageChange = () => {
    setImageIndex((imageIndex + 1) % 5);
  }

  return (
    // <>
    //   <div className={`full_page img_bg shade1 image-${imageIndex}`} style={{ display: "block" }}>
    //     <div className="row">
    //        <button className='shade2' onClick={handleImageChange}>Change Image</button><br/>
    //     </div>
    //     <div className="row">
    //        <div className="display-4">
    //       Now: {time.getHours()>12?time.getHours()-12:time.getHours()}:{time.getMinutes()}:{time.getSeconds()} {AMPM}
    //     </div>
    //     </div> 
    //   </div>
    // </>
    <div className={`full_page img_bg shade1 image-${imageIndex}`}>
      <div>
        <div className="row">
          <button className='shade4' onClick={handleImageChange}>Change Image</button><br/>
        </div>
        <div className="row display-4">
          Now: {time.getHours()>12?time.getHours()-12:time.getHours()}:{time.getMinutes()}:{time.getSeconds()} {AMPM}
       </div>
      </div>
    </div>
  )
}
