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
  const [inputs,setInputs]= useState({
    FeedID: "",
    ID: "",
    likeCount:"",
    reported:"",
    liked:"",
    UserID:"",
  });




  const sendDatabase = async ()=>{
    // const postInfo={
    //   UserID:inputs.UserID,
    //   FeedID:inputs.FeedID, 
    //   likeCount:likeCount+1, 
    //   liked};
    await axios.post("http://localhost:3002/api/setlike",inputs);
  }

  const sendReportDatabase = async ()=>{
    await axios.post("http://localhost:3002/api/setReport",inputs);
  }

  const handleLikeClick = () => {
    if(liked){
      inputs.likeCount = (likeCount-1);
      setLikeCount(likeCount-1);
    }
    else{
      inputs.likeCount = (likeCount+1);
      setLikeCount(likeCount+1);
    }
    setLiked(!liked);
    console.log(inputs.likeCount," is a likecount")
    //inputs.likeCount = likeCount;
    inputs.liked = liked;
    sendDatabase();
  }

  const handleReportClick = () =>{
    setReported(!reported);
    sendReportDatabase();
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
        inputs.UserID = result.data[2];
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
