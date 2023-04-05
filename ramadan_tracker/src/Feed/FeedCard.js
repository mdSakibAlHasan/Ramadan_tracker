import React from 'react'
import '../CSS Files/FeedCard.css'
import { useState, useEffect } from 'react';
import { getCookie } from '../Authorization/Cookie_handle';
import axios from 'axios';

export default function FeedCard(props) {
  //let likeCount=13;

  const [liked, setLiked] = useState(false);
  const [reported, setReported] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [likeHistory,setLikeHistory] = useState([]);
  const [err, setErr] = useState();
  const[inputs,setInputs]= useState({
    FeedID: "",
    ID: "",
    likeCount:"",
    reported:"",
    liked:"",
  });
  var ID;

  const sendDatabase = async ()=>{
    await axios.post("http://localhost:3002/api/setlike",inputs);
  }

  const handleLikeClick = () => {
    if(liked)
      setLikeCount(likeCount-1);
    else{
      setLikeCount(likeCount+1);
    }
    setLiked(!liked);
    inputs.likeCount = likeCount;
    inputs.liked = liked;
    sendDatabase();
  }

  const handleReportClick = () =>{
    setReported(!reported);
  }

  useEffect(() => {
    function handleCookie(){
      inputs.FeedID = props.FeedID;
      inputs.ID = getCookie('my_cookies');
      setInputs(prevInputs => ({
        ...prevInputs,
        ID: getCookie('my_cookies'),
        FeedID: props.FeedID
      }));
      setLikeCount(props.LikeCount);
    }
    handleCookie();
  }, []);
  


  useEffect(() => {
    async function handleInfo(){
      try{
        const result =  await axios.post("http://localhost:3002/api/getPostInfo",inputs);
        setLikeHistory(result.data,"  ",props.FeedID)
        if(result.data[0]==1){
          setLiked(!liked);
        }
        if(result.data[1]==1)
          setReported(!reported);
        // console.log(info);
      }catch(err){
        setErr("Not get data ")
      }
    };
    handleInfo();
  }, [inputs.ID]); 
   

  return (
    <>
    <div className='shade2 p-2 m-2 display-block'>
        <div className="row">
            <div className="display-6">{props.name}</div>
            <div ><strong>{props.time}</strong></div> <hr/>
            <div >{props.story}</div> <hr/>
            <div><strong>{likeCount} Likes</strong></div>
            <div className="col mt-2"><button className={liked ? 'shade3 m-1 liked' : 'shade3 m-1'} onClick={handleLikeClick}>
            {liked ? 'Liked' : 'Like'}</button></div>
            <div className="col mt-2"><button className={reported ? 'shade3 m-1 liked' : 'shade3 m-1'} onClick={handleReportClick}>
            {reported ? 'Reported' : 'Report'}</button></div>
        </div>    
    </div>
    <br/>
    </>
  )
}
