import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { getCookie } from './Cookie_handle';

export default function ChangePassword() {
    const [newPassCanEdit,setnewPassCanEdit]=useState(true);
    const [email,setemail]=useState();
    const [oldPass,setoldPass]=useState();
    const [newPass,setnewPass]=useState();
    const [finalPass,setfinalPass]=useState();

    const[inputs,setInputs]= useState({
        oldPassword: "",
        newPass: "",
        UserID:"",
        token:"",
    });
   

    useEffect(() => {
        function handleCookie(){
            inputs.token = getCookie('my_cookies');
            console.log("here are token ",inputs)
        };
        handleCookie();
      }, []); 

    useEffect(() => {
        async function handleInfo(){
            try{
              const result =  await axios.post("http://localhost:3002/api/getID",inputs);
              inputs.UserID = (result[0].data);
              console.log(inputs);
            }catch(err){
            }
        };
        handleInfo();
      }, [inputs.token != null]); 

    const checkOldPassword = async (event) => {
        const value = event.target.value;
        inputs.oldPassword = value;
        await axios.post("http://localhost:3002/api/checkOldPass",inputs);
        setoldPass(value);
        if (value === "123") {
          setnewPassCanEdit(false);
        }
      };
      

  return (
    <div className='full_page shade1'>
    <div className="shade2 p-5">
    <center><h4>পাসওয়ার্ড পরিবর্তন</h4></center> <hr /> <br/>
        <form>
            <div class="mb-3 mt-3">
                <label for="q2" className="form-label">বর্তমান পাসওয়ার্ড</label><br/>
                <input type="password"  id="q2" placeholder="আপনার পাসওয়ার্ড টি দিন" name="password" value={oldPass} onChange={(e)=>checkOldPassword(e)}/>
            </div> <hr/> <br/>
            <div class="mb-3 mt-3">
                <label for="q3" className="form-label">নতুন পাসওয়ার্ড</label><br/>
                <input disabled={newPassCanEdit} type="password"  id="q3" placeholder="নতুন পাসওয়ার্ড সেট করুন" name="newpassword" value={newPass} onChange={(e) => setnewPass(e.target.value)}/>
            </div> <hr/> <br/>
            <div class="mb-3 mt-3">
                <label for="q3" className="form-label">পাসওয়ার্ড টি নিশ্চিত করতে পুনরায় টাইপ করুন</label><br/>
                <input disabled={newPassCanEdit} type="password"  id="q3" placeholder="নতুন পাসওয়ার্ড" name="finalpassword" value={finalPass} onChange={(e) => setfinalPass(e.target.value)}/>
            </div> <hr/> <br/>
            <center>
               <a> <input className='shade1 p-2' type="submit" value="সেভ করুন" /></a>
            </center>
        </form> <br/>
       
    </div>

</div>  )
}
