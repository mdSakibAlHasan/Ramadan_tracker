import { db } from "../db.js";


export const getProfileInfo = (req, res) => {
    const { ID } = req.body;
    const qur = `SELECT * FROM ramadan.users WHERE ID = '${ID}'`;
  
    db.query(qur,function(err,result){
        if(err){
          console.log("Something happend for check user");
        }
        else{
            console.log(result);
            return res.status(200).send(result);
        }

  });
}  