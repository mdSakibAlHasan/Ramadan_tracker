import { db } from "../db.js";

export const getProgressInfo = (req,res)=>{
    const { ID, UserID ,rDay } = req.body;
    console.log(ID," is here",rDay);


    const q = `SELECT * FROM ramadan.progress WHERE ID =${UserID} and Ramadan = ${rDay};`;
    db.query(q, function(err, data) {
    if(err){
        console.log("Something happend to get progress Info");
        return res.status(409).json("not able to get data");
    }
    else{ 
        console.log("sucess to get progress info",data);
        return res.status(200).send(data);
    }  
    });
}