import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import express from "express";

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


const create_progress = (email)=>{
  var qur = `select UserID from ramadan.users where Email='${email}';`;
  db.query(qur,function(err,result){
    if(err){
      console.log("Something happend to insert progress");
    }
    else{
      for(let i=1;i<=30;i++){
        qur = `INSERT INTO ramadan.progress (ID, Ramadan, FazarFaraz, FazarSuunat, ZohorFaraz, ZohorSunnat, AsarFaraz, AsarSunnat, MagribFaraz, MagribSunnat, EshaFaraz, EshaSunnat, Tarabih, Tahazzud, Nafal, Zikir, Dua, Istigfar, Hadis, Dan, Jamayat, Khoma, NotunSekha) VALUES (${result[0].UserID}, ${i}, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE,  FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE);`;
        db.query(qur);
      }
      
      //console.log("Added data in progress",result[0].UserID)
    }
  });
}

export const signup = (req, res) => {
  const { name, phone, gender, address, password, email } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const pass = bcrypt.hashSync(password, salt);
  var qur = `select Name from ramadan.users where Email='${email}';`;
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
            //console.log(result);
            create_progress(email);
            return res.status(200).json("successfull");
          }
        });
      }
    }
    }); 
  };


  export const login = (req, res) => {
    const { password, email } = req.body;

    const q = "SELECT Email,Password FROM ramadan.users WHERE Email = ?";
  

  db.query(q, [req.body.email], (err, data) => {
    console.log(data)
    console.log("here in backend");
    //console.log(data[0].password)
    if (err) return res.status(500).json(err);
    if (data.length === 0) 
      return res.status(404).json("User not found!");
    else{
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].Password
      );
  
    
      if (!isPasswordCorrect)
        return res.status(400).json("Wrong email or password!");
        {
        // const myCookie = req.cookies.mycookie;
        // console.log(myCookie)
        const token = jwt.sign({ Email: data[0].Email }, "jwtkey");
        console.log(token)
        //res.sent(token)
        res.status(200).json(token);
        }
    }

  });
  }  