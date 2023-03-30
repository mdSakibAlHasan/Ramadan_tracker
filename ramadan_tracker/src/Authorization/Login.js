import React from 'react'
import '../CSS Files/Colors.css'

export default function Login() {
  return (
    <div className='full_page shade1'>
        <div className="shade2 p-5">
        <center><h4>লগ-ইন</h4></center> <hr /> <br/>
            <form>
                <div class="mb-3 mt-3">
                    <label for="q1" className="form-label">ই-মেইল</label><br/>
                    <input type="email"  id="q1" placeholder="আপনার ই-মেইল দিন" name="email"/>
                </div> <hr/>
                <div class="mb-3 mt-3">
                    <label for="q2" className="form-label">পাসওয়ার্ড</label><br/>
                    <input type="password"  id="q2" placeholder="আপনার পাসওয়ার্ড দিন" name="password"/>
                </div> <hr/> <br/>
                <center>
                    <input className='shade1 p-2' type="submit" value="লগ-ইন করুন" />
                </center>
            </form> <br/>
            <a href="/signUp">অ্যাকাউন্ট না থাকলে, অ্যাকাউন্ট তৈরি করুন</a>
        </div>

    </div>
  )
}
