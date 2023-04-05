import { db } from "../db.js";
import  Jwt  from "jsonwebtoken";

export const getFeed = (req, res) => {
      
    var qur = `select FeedID,Date,LikeCount,post,Name from ramadan.feed,ramadan.users where OwnerID=UserID ORDER BY Date DESC;`;
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

// const getID= (value) =>{
//     //      //code here get ID from cookies
//     Jwt.verify(value, "jwtkey", (err, userInfo) => {
//         if (err){ 
//           //return res.status(403).json("Token is not valid!");
//           console.log("Error in token");
//         }else{
//           const email = userInfo.Email;
//           const q = `SELECT UserID FROM ramadan.users WHERE Email ='${email}';`;
//           console.log(q);
//           db.query(q,function(err,result){
//             if(err){
//               console.log("Something happend for get ID from cookies");
//             }
//             else{
//               console.log(result[0].UserID, " in ID")
//               console.log(result, " in ID")
//               return result[0].UserID;
//              }
//           });
//         }
//     })

//     //return 11;
// }


export const getPostInfo = (req, res) => {
      const{FeedID,ID} = req.body;
      //console.log(FeedID," ---- ",ID)
      // const UserID = getID(ID);
      // console.log(FeedID," ---- ",UserID)
      var myArr = [0,0,0]

      Jwt.verify(ID, "jwtkey", (err, userInfo) => {
        if (err){ 
          console.log("Error in token");
        }else{
          const email = userInfo.Email;
          const q = `SELECT UserID FROM ramadan.users WHERE Email ='${email}';`;
          //console.log(q);
          db.query(q,function(err,result){
            if(err){
              console.log("Something happend for get ID from cookies");
            }
            else{
              const UserID = result[0].UserID;
              ///////////////////////////////////////////

                var qur = `SELECT COUNT(*) FROM ramadan.likes where PostID=${FeedID} and LikeID=${UserID};`;
                //console.log(qur);
                db.query(qur,function(err,result){
                  if(err){
                    console.log("Something happend for get first data");
                  }
                  else{
                    //console.log(result[0]['COUNT(*)'], " first ")
                    myArr[0] = result[0]['COUNT(*)'];
                    //return res.status(200).send(result);
                  }
                });

                qur = `SELECT COUNT(*) FROM ramadan.feed where (Report1=${UserID} or Report2=${UserID} or Report3=${UserID}) and FeedID = ${FeedID};`;
                //console.log(qur);
                db.query(qur,function(err,result){
                  if(err){
                    console.log("Something happend for get secode data");
                  }
                  else{
                    //console.log(result[0]['COUNT(*)'], " second")
                    //return res.status(200).send(result);
                    myArr[1] = result[0]['COUNT(*)'];
                    myArr[2] = UserID;
                    console.log(myArr,FeedID)
                    return res.status(200).send(myArr);
                  }
                });

                  ////////////////////////////////////////
             }
          });
        }
    })
    
    
}


export const storeLikes = (req, res) => {
  const{UserID,FeedID, likeCount, liked} = req.body;
  console.log(FeedID," ",likeCount," ",liked);
  var qur = `update ramadan.feed set LikeCount = ${likeCount} where FeedID = ${FeedID};`;
  //console.log(qur);
  db.query(qur,function(err,result){
    if(err){
      console.log("Something happend for get feed data");
    }
    else{
      if(!liked){
        qur = `insert into ramadan.likes values(${FeedID},${UserID});`
      }
      else{
        qur = `delete from ramadan.likes where PostID=${FeedID} and LikeID=${UserID};`
      }
      //console.log(qur)
      db.query(qur,function(err,result){
        if(err){
          console.log("Something happend for get like data");
        }
        else{
          console.log("complete")
        }
      });
     }
  });
}


export const storeReport = (req, res) => {
  const{UserID,FeedID, reported} = req.body;
  console.log(FeedID," ",reported," ",UserID);
  var qur = `select Report1, Report2, Report3 from ramadan.feed where FeedID = ${FeedID};`;
  console.log(qur);
  db.query(qur,function(err,result){
    if(err){
      console.log("Something happend for get feed data");
    }
    else{
      console.log(result);
      if(!reported){
        if(result[0].Report1 == 0)
          qur = `UPDATE ramadan.feed SET Report1 = ${UserID} where FeedID=${FeedID};`;
        else if(result[0].Report2 == 0)
          qur = `UPDATE ramadan.feed SET Report2 = ${UserID} where FeedID=${FeedID};`;
        else
          qur = `delete from ramadan.feed where FeedID=${FeedID};`
      }
      else{
        if(result[0].Report1 == UserID)
          qur = `UPDATE ramadan.feed SET Report1 = 0 where FeedID=${FeedID};`;
        else if(result[0].Report2 == UserID)
          qur = `UPDATE ramadan.feed SET Report2 = 0 where FeedID=${FeedID};`;
        else
          qur = `UPDATE ramadan.feed SET Report3 = 0 where FeedID=${FeedID};`;
      }
      console.log(qur)
      db.query(qur,function(err,result){
        if(err){
          console.log("Something happend for get like data");
        }
        else{
          console.log("complete to store report")
        }
      });
     }
  });
}



export const getOwnPost = (req, res) => {
  const { UserID } = req.body;
  console.log(UserID);
  var qur = `select FeedID, Date, LikeCount, post from ramadan.feed where OwnerID = ${UserID} ORDER BY Date DESC;`;
  console.log(qur);
  db.query(qur,function(err,result){
    if(err){
      console.log("Something happend for get Own post data");
    }
    else{
      console.log("Successfully get own feed")
      return res.status(200).send(result);
    }
  });
}

export const setPost = (req, res) => {
  const { post,feedDate,ID} = req.body;
  console.log(post,feedDate,ID);
  var qur = `insert into ramadan.feed(OwnerID,Date,post) values(${ID},'${feedDate}','${post}');`;
  console.log(qur);
  db.query(qur,function(err,result){
    if(err){
      console.log("Something happend for post own data");
    }
    else{
      console.log("Complete")
      return res.status(200).json("Complete post upload");
    }
  });
}

