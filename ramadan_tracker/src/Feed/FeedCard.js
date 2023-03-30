import React from 'react'
import '../CSS Files/FeedCard.css'

export default function FeedCard(props) {
  let likeCount=13;
  return (
    <>
    <div className='shade2 p-2 m-2 display-block'>
        <div className="row">
            <div className="display-6">{props.name}</div>
            <div ><strong>{props.time}</strong></div> <hr/>
            <div >{props.story}</div> <hr/>
            <div><strong>{likeCount} Likes</strong></div>
            <div className="col mt-2"><button className='shade3 m-1'>Like</button></div>
            <div className="col mt-2"><button className='shade3 m-1'>Report</button></div>
        </div>    
    </div>
    <br/>
    </>
  )
}
