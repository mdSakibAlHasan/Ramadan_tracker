import { db } from "../db.js";
import bcrypt from "bcryptjs";


export const signup = (req, res) => {
    console.log("come");
    const data = req.body;
    console.log(data);
    // var qur = "select * from login;";
    // db.query(qur,function(err,result){
    //   if(err)
    //     console.log("Something happend for check user");
    //   else{
    //     if(check_user(result,email)){
    //       console.log("user exits")
    //       return res.status(409).json("User already exists! ");
    //     }
    //     else{
    //       const rand_num = getRandomInt(9999999).toString();
    //       const salt = bcrypt.genSaltSync(10);
    //      const pass = bcrypt.hashSync(rand_num, salt);
    //       console.log(pass);
    //       const body = `${rand_num} is your onetime password to log in the website. Please don't share this with other`
    //       //send_mail(email,"one time password for login",body)
  
    //       const qu = `insert into login(ID,email,password,type,isFirst) values('${ID}','${email}','${pass}','researcher',1);`
    //       db.query(qu,function(err,result){
    //       if(err){
    //         console.log("Something happend to insert data");
    //         return res.status(409).json("not able to insert data");
    //       }
    //       else{
    //         console.log("Data inserted");
    //         return res.status(200).json("User has been created.");
    //       }
    //       });
    //     }
    //   }
    // });
  
  };