import { db } from "../db.js";
import  Jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";



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
    const { oldPassword, token } = req.body;
    console.log(oldPassword);

    Jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err){ 
        console.log("Error in token");
      }else{
        const email = userInfo.Email;
        const q = `SELECT Password FROM ramadan.users WHERE Email ='${email}';`;
        //console.log(q);
        db.query(q,function(err,result){
          if(err){
            console.log("Something happend for get ID from cookies");
          }
          else{
            const isPasswordCorrect = bcrypt.compareSync(
              oldPassword,
              result[0].Password
            );
            console.log(result)
            if(isPasswordCorrect)
                return res.status(200).json("Old password matcjed successsfully ");
            else
              return res.status(409).json("Password not matched ");
          }
        })
      }
  });

  }


  export const changePassword = (req, res) => {
    const { newPass, token } = req.body;
    //console.log(oldPassword);

    Jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err){ 
        console.log("Error in token");
      }else{
          const salt = bcrypt.genSaltSync(10);
          const pass = bcrypt.hashSync(newPass, salt);

        const email = userInfo.Email;
        const q = `update ramadan.users set Password = '${pass}' where email ='${email}';`;
        //console.log(q);
        db.query(q,function(err,result){
          if(err){
            console.log("Something happend for get ID from cookies");
          }
          else{
              return res.status(200).json("Password changed ");
          }
        })
      }
  });

  }