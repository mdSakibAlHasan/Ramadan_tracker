import React,{useState} from 'react'
import '../CSS Files/Colors.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export default function Login() {

    const[inputs,setInputs]= useState({
        password: "",
        email: "",
    });
    const[err,setErr] = useState();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitForm = async (e)=>{
        e.preventDefault();
        console.log(inputs," data here")
        try{
           const res =  await axios.post("http://localhost:3002/api/login",inputs);
            Cookies.set(res.data, 'my_cookies', { expires: 1 });
            navigate("/profile");
        }catch(err){
            setErr(err);
        }
    }
    


  return (
    <div className='full_page shade1'>
        <div className="shade2 p-5">
        <center><h4>লগ-ইন</h4></center> <hr /> <br/>
            <form onSubmit={submitForm} method="POST">
                <div class="mb-3 mt-3">
                    <label for="q1" className="form-label">ই-মেইল</label><br/>
                    <input type="email"  id="q1" placeholder="আপনার ই-মেইল দিন" name="email" onChange={handleChange}/>
                </div> <hr/>
                <div class="mb-3 mt-3">
                    <label for="q2" className="form-label">পাসওয়ার্ড</label><br/>
                    <input type="password"  id="q2" placeholder="আপনার পাসওয়ার্ড দিন" name="password" onChange={handleChange}/>
                </div> <hr/> <br/>
                <center>
                    <p>err</p>
                    <input className='shade1 p-2' type="submit" value="লগ-ইন করুন" onClick={submitForm}/>
                </center>
            </form> <br/>
            <a href="/signUp">অ্যাকাউন্ট না থাকলে, অ্যাকাউন্ট তৈরি করুন</a>
        </div>

    </div>
  )
}
