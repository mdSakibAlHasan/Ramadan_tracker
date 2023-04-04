import { db } from "../db.js";

export const getFeed = (req, res) => {
      
    var qur = `select FeedID,Date,LikeCount,post,Name from ramadan.feed,ramadan.users where OwnerID=UserID;`;
    db.query(qur,function(err,result){
      if(err){
        console.log("Something happend for get feed data");
      }
      else{
        console.log(result)
         return res.status(200).send(result);
       }
    });
}

const getID= (value) =>{
    return 11;      //code here get ID from cookies
    // Jwt.verify(token, "jwtkey", (err, userInfo) => {
    //     if (err){ 
    //       return res.status(403).json("Token is not valid!");
    //     }else{
    //       const email = userInfo.email;
    //       const q = `SELECT Password FROM bcsir.researcher WHERE Email ='${email}';`;
}


export const getPostInfo = (req, res) => {
      const{FeedID,ID} = req.body;
      const UserID = getID(ID);
      //console.log(FeedID," ",ID)
      var myArr = [0,0]
    var qur = `SELECT COUNT(*) FROM ramadan.likes where PostID=${FeedID} and LikeID=${UserID};`;
    //console.log(qur);
    db.query(qur,function(err,result){
      if(err){
        console.log("Something happend for get first data");
      }
      else{
        console.log(result[0]['COUNT(*)'], " first ")
        myArr[0] = result[0]['COUNT(*)'];
         //return res.status(200).send(result);
       }
    });

    qur = `SELECT COUNT(*) FROM ramadan.feed where Report1=${UserID} or Report2=${UserID} or Report3=${UserID};`;
    //console.log(qur);
    db.query(qur,function(err,result){
      if(err){
        console.log("Something happend for get secode data");
      }
      else{
        console.log(result[0]['COUNT(*)'], " second")
         //return res.status(200).send(result);
         myArr[1] = result[0]['COUNT(*)'];
         console.log(myArr)
       }
    });

    
}
