import { db } from "../db.js";
import  Jwt  from "jsonwebtoken";


export const getProfileInfo = (req, res) => {
    const { ID } = req.body;
    console.log(ID," is here");

    Jwt.verify(ID, "jwtkey", (err, userInfo) => {
        if (err){ 
          return res.status(403).json("Token is not valid!");
        }else{
            //console.log(userInfo);
          const email = userInfo.Email;
          console.log(email," is a email")
          const q = `SELECT * FROM ramadan.users WHERE Email ='${email}';`;
          db.query(q, [req.body.email], (err, data) => {
            if(err){
              console.log("Something happend to get ProfileInfo");
              return res.status(409).json("not authorize to get data");
            }
            else{ 
              console.log("sucess to get profile info",data);
              return res.status(200).send(data);
            }  
          });
        } 
    });
}  