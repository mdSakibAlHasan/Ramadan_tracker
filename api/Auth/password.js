import { db } from "../db.js";
import  Jwt  from "jsonwebtoken";



export const getID = (req,res) =>{
    const{token} = req.body;
    Jwt.verify(token, "jwtkey", (err, userInfo) => {
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
              //const UserID = result[0].UserID;
              return res.status(200).send(result);
            }
          })
        }
    });
}

export const checkOldPassword = (req, res) => {
    const { oldPassword, UserID } = req.body;
    console.log(oldPassword);

    var qur = `select Password ramadan.users where UserID = ${UserID};`;
    console.log(qur);
    db.query(qur,function(err,result){
      if(err){
        console.log("Something happend for get Own post data");
        return res.send(409);
      }
      else{
        return res.status(200).send(result);
      }
    });
  }