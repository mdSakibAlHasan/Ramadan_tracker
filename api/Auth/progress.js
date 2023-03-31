import { db } from "../db.js";

function getDigit(value){
    if(value == true)
        return 1;
    else 
        return 0;
}   


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

export const setProgressInfo = (req,res)=>{
    //console.log(" is here in det progress ",req.body);
    const {ID, Ramadan, fazarFarazisChecked, fazarSunnatisChecked, zohorFarazisChecked, zohorSunnatisChecked, asarFarazisChecked, asarSunnatisChecked, magribFarazisChecked, magribSunnatisChecked, eshaFarazisChecked, eshaSunnatisChecked, QuranPage, QuranAyat, tarabihisChecked, tahazzudisChecked, nafalisChecked, zikirisChecked, duaisChecked, istigfarisChecked, hadisisChecked, danisChecked, jamayatisChecked, khomaisChecked, notunsekhaisChecked} = req.body;
    const que = `UPDATE ramadan.progress\
    SET FazarFaraz = ${fazarFarazisChecked}, FazarSuunat =  ${fazarSunnatisChecked}, ZohorFaraz =  ${zohorFarazisChecked}, ZohorSunnat = ${zohorSunnatisChecked}, AsarFaraz= ${asarFarazisChecked}, AsarSunnat = ${asarSunnatisChecked},\
    MagribFaraz = ${magribFarazisChecked}, MagribSunnat = ${magribSunnatisChecked}, EshaFaraz = ${eshaFarazisChecked}, EshaSunnat = ${eshaSunnatisChecked}, QuranPage = ${QuranPage}, QuranAyat = '${QuranAyat}', Tarabih= ${tarabihisChecked},\
    Tahazzud= ${tahazzudisChecked}, Nafal= ${nafalisChecked},Zikir= ${zikirisChecked}, Dua= ${duaisChecked}, Istigfar= ${istigfarisChecked}, Hadis= ${hadisisChecked}, Dan= ${danisChecked}, Jamayat= ${jamayatisChecked},\
    Khoma= ${khomaisChecked}, NotunSekha= ${notunsekhaisChecked} WHERE ID = ${ID} AND Ramadan = ${Ramadan};`;

    //console.log(que)
    db.query(que, function(err, data) {
    if(err){
        console.log("Something happend to set progress Info");
        return res.status(409).json("not able to get data");
    }
    else{ 
        console.log("sucess to get progress info",data);
        return res.status(200).json("Set data successfully");
    }  
    });
}