import React, { useState, useEffect } from 'react'
import { getCookie } from './Cookie_handle';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const [isOtpCorrect,setisOtpCorrect]=useState(true)
    const [email,setemail]=useState();
    const [otp,setotp]=useState();
    const [newPass,setnewPass]=useState();
    const [err, setErr] = useState();
    const[inputs,setInputs]= useState({
        OTP: "",
        newPass: "",
        email:"",
    });

    // useEffect(() => {
    //     function handleCookie(){
    //         inputs.token = getCookie('my_cookies');
    //         console.log("here are token ",inputs)
    //     };
    //     handleCookie();
    //   }, []); 

    const checkOtp = async (event) => {
        const value = event.target.value;
        setotp(value);
        inputs.OTP = otp;
        try{
            await axios.post("http://localhost:3002/api/codeCheck",inputs);
            setisOtpCorrect(false);
        }catch(err){
            setErr(err);
        }
        
    };

    const sendOtp = async () => {
        inputs.email = email;
        try{
            await axios.post("http://localhost:3002/api/forgotPass",inputs);
            setisOtpCorrect(false);
        }catch(err){
            setErr(err);
        }
      };//codeCheck

      const otpMatch = async () => {
        inputs.OTP = otp;
        try{
            await axios.post("http://localhost:3002/api/codeCheck",inputs);
        }catch(err){
            setErr(err);
        }
      };

      const navigate = useNavigate();
      const submitButton = async () => {
        
        inputs.newPass = newPass;
        try{
            await axios.post("http://localhost:3002/api/inputPass",inputs);
            navigate("/login");
        }catch(err){
            setErr(err);
        }
      };
    
    // const sendOtp=(event)=>{
    //     event.preventDefault(); 
    //     alert("otp recieved")
    // }
  return (
    <div className='full_page shade1'>
        <div className="shade2 p-5">
        <center><h4>পাসওয়ার্ড পুনরুদ্ধার</h4></center> <hr /> <br/>
            <form>
                <div class="mb-3 mt-3">
                    <label for="q1" className="form-label">ই-মেইল</label><br/>
                    <input type="email"  id="q1" placeholder="আপনার ই-মেইল দিন" name="email" value={email} onChange={(e) => setemail(e.target.value)}/>
                </div> <hr/>
                <button className='shade1' onClick={sendOtp}>ওটিপি রিসিভ করুন</button>
                <div class="mb-3 mt-3">
                    <label for="q2" className="form-label">ওটিপি</label><br/>
                    <input type="password"  id="q2" placeholder="আপনার ইমেলে পাঠানো ওটিপি টি দিন" name="otp"  value={otp} onChange={(e)=>checkOtp(e)}/>
                </div> <hr/> <br/>
                <div class="mb-3 mt-3">
                    <label for="q3" className="form-label">নতুন পাসওয়ার্ড</label><br/>
                    <input disabled={isOtpCorrect} type="password"  id="q3" placeholder="নতুন পাসওয়ার্ড সেট করুন" name="password" value={newPass} onChange={(e) => setnewPass(e.target.value)}/>
                </div> <hr/> <br/>
                <center>
                   <a> <input className='shade1 p-2' type="button" onClick={submitButton} value="সেভ করুন" /></a>
                </center>
            </form> <br/>
           
        </div>

    </div>
  )
}
