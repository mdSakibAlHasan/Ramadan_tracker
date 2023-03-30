import { db } from "../db.js";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import express from "express";

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

export const signup = (req, res) => {
  const { name, phone, gender, address, password, email } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const pass = bcrypt.hashSync(password, salt);
  var qur = `select name from ramadan.users where email='${email}';`;
  db.query(qur,function(err,result){
    if(err){
      console.log("Something happend for check user");
    }
    else{
      console.log(result)
      if(result === 0){
        console.log("user exits")
        return res.status(409).json("email already exists! ");
      }
      else{
        var qur = `INSERT INTO ramadan.users (Name, Gender, Address, Phone, Email, Password) VALUES ('${name}', '${gender}', '${address}', '${phone}', '${email}', '${pass}');`;
        db.query(qur,function(err,result){
          if(err){
            console.log("Something happend for insert data");
            return res.status(409).json("Something happend to create users");
          }
          else{
            return res.status(200).json("successfull");
          }
        });
      }
    }
    });
    
    //var data = `INSERT INTO ramadan.users (Name, Gender, Address, Phone, Email, Password) VALUES ('${name}', '${gender}', '${address}', '${phone}', '${email}', '${password}');`;
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