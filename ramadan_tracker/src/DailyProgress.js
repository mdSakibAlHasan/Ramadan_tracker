import React, { useState, useEffect } from "react";
import "./CSS Files/DailyProgress.css";
import Photo from "./aaa.jpg";
import Footer from "./Footer";
import { getCookie } from "./Authorization/Cookie_handle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DailyProgress({ getRamadanDay }) {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(time.getDate());
  const [name, setName] = useState("Anomouus");
  const [address, setaddress] = useState("Not Set");
  const [phone, setphone] = useState("Not Set");
  const [err, setErr] = useState();
  const [profileArr, setprofileArr] = useState([]);
  const [progressArr, setprogressArr] = useState([]);
  const[inputs,setInputs]= useState({
    ID: "",
    UserID: "",
    rDay: "",
  });
  var ID,rDay;

  const[fazarFarazisChecked,setfazarFarazisChecked]=useState();
  const[fazarSunnatisChecked,setfazarSunnatisChecked]=useState();

  const[zohorFarazisChecked,setzohorFarazisChecked]=useState();
  const[zohorSunnatisChecked,setzohorSunnatisChecked]=useState();

  const[asarFarazisChecked,setasarFarazisChecked]=useState();
  const[asarSunnatisChecked,setasarSunnatisChecked]=useState();

  const[magribFarazisChecked,setmagribFarazisChecked]=useState();
  const[magribSunnatisChecked,setmagribSunnatisChecked]=useState();

  const[eshaFarazisChecked,seteshaFarazisChecked]=useState();
  const[eshaSunnatisChecked,seteshaSunnatisChecked]=useState();

  const [quranPage,setquranPage] = useState();
  const [QuranAyat, setquranAyat] = useState('');

  const[tarabihisChecked,settarabihisChecked]=useState();
  const[tahazzudisChecked,settahazzudisChecked]=useState();
  const[nafalisChecked,setnafalisChecked]=useState();

  const[zikirisChecked,setzikirisChecked]=useState();
  const[duaisChecked,setduaisChecked]=useState();
  const[istigfarisChecked,setistigfarisChecked]=useState();
  const[hadisisChecked,sethadisisChecked]=useState();
  const[danisChecked,setdanisChecked]=useState();
  const[jamayatisChecked,setjamayatisChecked]=useState();
  const[khomaisChecked,setkhomaisChecked]=useState();
  const[notunsekhaisChecked,setnotunsekhaisChecked]=useState();

  function handleDay() {
    setDate(date - 1);
  }

  function ramadanDayInfo() {
    let x = getRamadanDay(time.getMonth() + 1, time.getDate());
    if (x == 1) return "st";
    else if (x == 2) return "nd";
    else if (x == 3) return "rd";
    else return "th";
  }
  
  function setBoolean(value){
    if(value == 0)
      return false;
    else
      return true;
  }

  const handleSubmit = ()=>{

  }

  useEffect(() => {
    function handleCookie(){
        ID = getCookie('my_cookies');
        inputs.ID = ID;
        rDay =getRamadanDay(time.getMonth() + 1, date);
        inputs.rDay = rDay;
    };
    handleCookie();
  }, []); 


  const navigate = useNavigate();
useEffect(() => {
    const handleInfo = async()=>{
        console.log(inputs.ID," in cookies")
        if(inputs.ID){
            try{
                ID = await axios.post("http://localhost:3002/api/getProfileInfo",inputs);
                console.log(ID," is info");
                setprofileArr(ID.data);
                console.log(profileArr," is data arr");

                inputs.UserID = profileArr[0].UserID;
                rDay = await axios.post("http://localhost:3002/api/getProgressInfo",inputs);
                console.log(rDay," is progress info");
                setprogressArr(rDay.data);
                console.log(progressArr," is data arr");
            }catch(err){
                setErr("Unable to get Info");
            }
        
        }
        else{
            navigate("/login");
        }
    }

    if(profileArr.length != 0){
      setName(profileArr[0].Name);
      setaddress(profileArr[0].Address);
      setphone(profileArr[0].Phone);
    }
    
    if(progressArr.length != 0){
      setfazarFarazisChecked(setBoolean(progressArr[0].FazarFaraz));
      setfazarSunnatisChecked(setBoolean(progressArr[0].FazarSuunat));
      setzohorFarazisChecked(setBoolean(progressArr[0].ZohorFaraz));
      setzohorSunnatisChecked(setBoolean(progressArr[0].ZohorSunnat))
      setasarFarazisChecked(setBoolean(progressArr[0].AsarFaraz))
      setasarSunnatisChecked(setBoolean(progressArr[0].AsarSunnat))
      setmagribFarazisChecked(setBoolean(progressArr[0].MagribFaraz))
      setmagribSunnatisChecked(setBoolean(progressArr[0].MagribSunnat))
      seteshaFarazisChecked(setBoolean(progressArr[0].EshaFaraz))
      seteshaSunnatisChecked(setBoolean(progressArr[0].EshaSunnat))
      
      // setquranPage(setBoolean(progressArr[0].QuranPage))
      // setquranAyat(setBoolean(progressArr[0].QuranAyat))

      settarabihisChecked(setBoolean(progressArr[0].Tarabih))
      settahazzudisChecked(setBoolean(progressArr[0].Tahazzud))
      setnafalisChecked(setBoolean(progressArr[0].Nafal))
      setzikirisChecked(setBoolean(progressArr[0].Zikir))
      setduaisChecked(setBoolean(progressArr[0].Dua))
      setistigfarisChecked(setBoolean(progressArr[0].Istigfar))
      sethadisisChecked(setBoolean(progressArr[0].Hadis))
      setdanisChecked(setBoolean(progressArr[0].Dan))
      setjamayatisChecked(setBoolean(progressArr[0].Jamayat))
      setkhomaisChecked(setBoolean(progressArr[0].Khoma))
      setnotunsekhaisChecked(setBoolean(progressArr[0].NotuSekha))
    }
    
    
    handleInfo();
    }, [inputs.ID]);

  return (
    <div className=" full_body">
      <div className="ramadan_info p-3">
        <div>
          <button
            className=" btn btn-outline-info mx-3"
            onClick={handleDay}
          >
            Previous Day
          </button>
        </div>
        <div className="display-6">
          <div>
            Date: {date}/{time.getMonth() + 1}/{time.getFullYear()}{" "}
            {getRamadanDay(time.getMonth() + 1, date)}{" "}
            <sup>
              {ramadanDayInfo(getRamadanDay(time.getMonth() + 1, date))}
            </sup>{" "}
            Ramadan
          </div>
        </div>
      </div>

      <div className="personal_info p-3">
        নামঃ {name} <br /> ঠিকানাঃ {address} <br /> মোবাইলঃ {phone}
      </div>

      <div className="checkpoints p-3">
        <form onSubmit={handleSubmit} method="POST">
        <div className="row">
            <div className="col-6">
                <center><h4>নামাজ ট্র্যাকার</h4></center> <hr />
                
                <div className="row">
                    <div className="col">নামাজ <hr/></div>
                    <div className="col">ফরজ <hr/></div>
                    <div className="col">সুন্নত <hr/></div>
                </div>
                <div className="row">
                    <div className="col">ফজর</div>
                    <div className="col"><input type="checkbox" name="fazarFaraz" checked={fazarFarazisChecked}  onChange={(e) => setfazarFarazisChecked(e.target.checked)} /></div>
                    <div className="col"><input type="checkbox" name="fazarSunnat" checked={fazarSunnatisChecked}  onChange={(e) => setfazarSunnatisChecked(e.target.checked)} /></div>
                </div>
                <div className="row">
                    <div className="col">যোহর</div>
                    <div className="col"><input type="checkbox" name="zohorFaraz" checked={zohorFarazisChecked}   onChange={(e) => setzohorFarazisChecked(e.target.checked)}/></div>
                    <div className="col"><input type="checkbox" name="zohorSunnat" checked={zohorSunnatisChecked}  onChange={(e) => setzohorSunnatisChecked(e.target.checked)} /></div>
                </div>
                <div className="row">
                    <div className="col">আসর</div>
                    <div className="col"><input type="checkbox" name="asarFaraz" checked={asarFarazisChecked}  onChange={(e) => setasarFarazisChecked(e.target.checked)} /></div>
                    <div className="col"><input type="checkbox" name="asarSunnat" checked={asarSunnatisChecked}  onChange={(e) => setasarSunnatisChecked(e.target.checked)} /></div>
                </div>
                <div className="row">
                    <div className="col">মাগরিব</div>
                    <div className="col"><input type="checkbox" name="magribFaraz" checked={magribFarazisChecked}  onChange={(e) => setmagribFarazisChecked(e.target.checked)} /></div>
                    <div className="col"><input type="checkbox" name="magribSunnat" checked={magribSunnatisChecked}  onChange={(e) => setmagribSunnatisChecked(e.target.checked)} /></div>
                </div>
                <div className="row">
                    <div className="col">এশা</div>
                    <div className="col"><input type="checkbox" name="eshaFaraz" checked={eshaFarazisChecked} onChange={(e) => seteshaFarazisChecked(e.target.checked)}  /></div>
                    <div className="col"><input type="checkbox" name="eshaSunnat" checked={eshaSunnatisChecked}  onChange={(e) => seteshaSunnatisChecked(e.target.checked)} /></div>
                </div>
                <div className="row">
                    <div className="col">তারাবীহ</div>
                    <div className="col"></div>
                    <div className="col"><input type="checkbox" name="tarabih" checked={tarabihisChecked}  onChange={(e) => settarabihisChecked(e.target.checked)} /></div>
                </div>
                <div className="row">
                    <div className="col">তাহাজ্জুদ</div>
                    <div className="col"></div>
                    <div className="col"><input type="checkbox" name="tarabih" checked={tahazzudisChecked}  onChange={(e) => settahazzudisChecked(e.target.checked)} /></div>
                </div>
                <div className="row">
                    <div className="col">নফল</div>
                    <div className="col"></div>
                    <div className="col"><input type="checkbox" name="tarabih" checked={nafalisChecked}  onChange={(e) => setnafalisChecked(e.target.checked)} /></div>
                </div>
               
                
            </div>
            <div className="col-6">
                <center><h4>কুরআন ট্র্যাকার</h4></center> <hr />
                <div class="mb-3 mt-3">
                    <label for="q1" className="form-label">আজ যত পৃষ্ঠা কোরআন পরেছিঃ</label><br/>
                    <input type="number"  id="q1" placeholder="পৃষ্ঠা নম্বর" name="quranPage" onChange={(e) => setquranPage(e.target.value)}/>
                </div>
                <div class="mb-3 mt-3">
                    <label for="q2" className="form-label">বিশেষ কোনো আয়াত বা পারাঃ</label><br/>
                    <textarea row="8" type="text" id="q2" placeholder="এখানে লিখুন" name="quranAyat"  onChange={(e) => setquranAyat(e.target.value)}></textarea>
                </div>
            </div>
        </div>
        <div className="row">
            <center><h4>দৈনন্দিন চেকলিস্ট</h4></center> <hr />
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">যিকির</div>
                        <div className="col"><input type="checkbox" name="zikir" checked={zikirisChecked}  onChange={(e) => setzikirisChecked(e.target.checked)} /></div>
                    </div>
                    <div className="row">
                        <div className="col">দু'আ</div>
                        <div className="col"><input type="checkbox" name="dua" checked={duaisChecked}  onChange={(e) => setduaisChecked(e.target.checked)} /></div>
                    </div>
                    <div className="row">
                        <div className="col">ইস্তিগফার</div>
                        <div className="col"><input type="checkbox" name="istigfar" checked={istigfarisChecked}  onChange={(e) => setistigfarisChecked(e.target.checked)} /></div>
                    </div>
                    <div className="row">
                        <div className="col">হাদিস পাঠ</div>
                        <div className="col"><input type="checkbox" name="hadis" checked={hadisisChecked}  onChange={(e) => sethadisisChecked(e.target.checked)} /></div>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">দান-সদকা</div>
                        <div className="col"><input type="checkbox" name="dan" checked={danisChecked}  onChange={(e) => setdanisChecked(e.target.checked)} /></div>
                    </div>
                    <div className="row">
                        <div className="col">জামায়াতে নামায আদায়</div>
                        <div className="col"><input type="checkbox" name="zamayat" checked={jamayatisChecked}  onChange={(e) => setjamayatisChecked(e.target.checked)} /></div>
                    </div>
                    <div className="row">
                        <div className="col">ক্ষমা প্রার্থনা</div>
                        <div className="col"><input type="checkbox" name="khoma" checked={khomaisChecked}  onChange={(e) => setkhomaisChecked(e.target.checked)} /></div>
                    </div>
                    <div className="row">
                        <div className="col">নতুন কিছু শেখা</div>
                        <div className="col"><input type="checkbox" name="notunSekha" checked={notunsekhaisChecked}  onChange={(e) => setnotunsekhaisChecked(e.target.checked)} /></div>
                    </div>
                </div>
            </div>
        </div>
        <input type="submit" value="Save" onClick={handleSubmit} />
        </form>
      </div>
      
    </div>
  );
}
