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
              console.log("sucess to get profile info");
              return res.status(200).send(data);
            }  
          });
        } 
    });
}  


// function calculateNamaz(data){
//   var total=0;
//   for(let i=0;i<30;i++){
//     total += (data[i].FazarFaraz+data[i].FazarSuunat+data[i].ZohorFaraz+data[i].ZohorSunnat+data[i].AsarFaraz+data[i].AsarSunnat+data[i].MagribFaraz);
//   }

//   console.log(total," is the value")
// }


export const getChartInfo = (req, res) => {
  const { UserID } = req.body;
  console.log(UserID," is in get chart info here");

 
    const q = `SELECT * FROM ramadan.progress WHERE ID =${UserID};`;
    db.query(q, [req.body.email], (err, data) => {
      if(err){
        console.log("Something happend to get progress info");
        //return res.status(409).json("not authorize to get data");
      }
      else{ 
        //console.log("sucess to get profile info",data[0]);
        //return res.status(200).send(data);
        const arr = [0,0,0];
        for(let i=0;i<30;i++){
          arr[0] += (data[i].FazarFaraz+data[i].FazarSuunat+data[i].ZohorFaraz+data[i].ZohorSunnat+data[i].AsarFaraz+data[i].AsarSunnat+data[i].MagribFaraz+data[i].MagribSunnat+data[i].EshaFaraz+data[i].EshaSunnat);
          if(data[i].QuranPage != null && data[i].QuranPage!=0)
            arr[1] += 1;
          if(data[i].QuranAyat != null)
            arr[1] += 1;

          arr[3] += (data[i].Hadis+data[i].Dan+data[i].Nafal+data[i].Zikir+data[i].Dua+data[i].Jamayat+data[i].Khoma+data[i].NotunSekha);
          
        }
      
        console.log("Successfdully get chart info")
        return res.status(200).send(arr);
      }  
    });
}  