import nodemailer from 'nodemailer';
import { db } from "../db.js";
import bcrypt from "bcryptjs";

function send_mail(to_mail,mail_subject, mail_body){
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
          user: "sakibalhasandu123@gmail.com",
          pass: "ffkjpmhtroqslqxh"
        }
      })
      
      let details = {
        from: "sakibalhasandu123@gmail.com",
        to: to_mail,
        subject: mail_subject,
        text: mail_body
      }
  
       mailTransporter.sendMail(details,(err)=>{
        if(err){
          console.log("there are an error to send mail")
          console.log(err)
        }
        else{
          console.log("Email send successfully");
        }
      }) 
}

var timeRemain = true,codeMatch=false;
var randNum,emailName;

function myFunc() {
  timeRemain = false;
  console.log("Time ended")
}

export const forgotPass = (req, res) => {
  emailName = req.body.email;
  const q = "SELECT UserID FROM ramadan.users WHERE Email = ?";
    console.log(q);
  db.query(q, [req.body.email], (err, data) => {
    console.log(data)
    if (err) return res.status(500).json(err);
   
    randNum = getRandomInt(99999);
    //console.log(randNum);
    setTimeout(myFunc, 300000);       //3 minutes = 30000 ms
    const body = `${randNum} is your onetime password. Please don't share this with other`
      console.log(body);
    if (data.length === 0){ 
      return res.status(404).json("email not found!");
    }
    else{
      send_mail(emailName,"Recovery password",body)
      return res.status(200).json("email send");
    }

  });
};




function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

export const checkCode = (req, res) => {
  const givenCode = req.body.OTP;

  if(timeRemain){
      if(givenCode == randNum){
        codeMatch = true;
        return res.status(200).json("Code matched"); 
      }
      else{
        //myFunc();
        return res.status(404).json("Doesnot match");
      }
  }
  else{
    return res.status(404).json("Time end");
  }

};


export const inputPass = (req, res) => {
    const{OTP,newPass,email} = req.body;
  console.log(req.body.newPass)
    if(randNum != OTP && !timeRemain){
      return res.status(404).json("invalid access");
    }
    else{
      const salt = bcrypt.genSaltSync(10);
      const pass = bcrypt.hashSync(newPass, salt);

      const qu = `update ramadan.users set Password = '${pass}' where Email ='${email}';`
      db.query(qu,function(err,result){
      if(err){
        console.log("Something happend to update password");
        return res.status(409).json("password not updated");
      }
      else{
        codeMatch = false;
        return res.status(200).json("Password updated");
      }
      });
    }
 
 };

export default send_mail