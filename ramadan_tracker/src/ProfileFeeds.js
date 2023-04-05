import React from 'react'

export default function ProfileFeeds(props) {
  return (
    <>
    <div className='shade2 p-2 m-2 display-block'>
        <div className="row">
            <div ><strong>{props.time}</strong></div> 
            <div ><strong>Likes: {props.like}</strong></div><hr/>
            <div >{props.story}</div>
        </div>    
    </div>
    <br/>
    </>
  )
}
