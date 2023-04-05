import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Footer from './Footer';
import { getCookie,getAsynCookie } from './Authorization/Cookie_handle';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ProfileFeeds from './ProfileFeeds';

export default function Profile( ) {
   // const [time,setTime] = useState(new Date());
    const [name,setname]=useState();
    const [address,setaddress]=useState();
    const [newfeed,setnewfed]=useState();
    const [phone,setphone]=useState();
    const [email,setemail]=useState();
    const [gender,setgender]=useState();
    const [aboutme,setaboutme]=useState();
    const [err,setErr] = useState();
    const [chartArr, setChartArr] = useState([])
    const [time, setTime] = useState(new Date());
    const [date, setDate] = useState(time.getDate());
    const [namazPercentage,setnamazPercentage]=useState([{name:'Namaz',value:80},{name:'Namaz',value:20}]);
    const [quranPercentage,setquranPercentage]=useState([{name:'Namaz',value:70},{name:'Namaz',value:30}]);
    const [otherPercentage,setotherPercentage]=useState([{name:'Namaz',value:86},{name:'Namaz',value:14}]);
    const [profileArr, setprofileArr]=useState([]);
    const [ownFeeds, setOwnFeeds] = useState([])

    const [chart1Data, setChart1Data] = useState({});
    const [chart2Data, setChart2Data] = useState({});
    const [chart3Data, setChart3Data] = useState({});
    
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const COLORS = ['#144272', '#ffffff09', '#FFBB28', '#FF8042'];
      const[inputs,setInputs]= useState({
        ID: "",
        UserID: "",
      });
      var ID;


      useEffect(() => {
        function handleCookie(){
            ID = getCookie('my_cookies');
            inputs.ID = ID;
        };
        handleCookie();
      }, []); 


      function getRamadanDay(month,day,value){
        //let rDay,exten;
        let t,p;
        if(month==3)
            t = (day-23);
        else 
            t = (day+8);
    
        p = (value/t);
        return p;
      }
    
    
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

                    ID = await axios.post("http://localhost:3002/api/getChartInfo",inputs);
                     //console.log(ID," is info from namaz");
                     setChartArr(ID.data);
                    console.log(" complete", chartArr);

                    ID = await axios.post("http://localhost:3002/api/getOwmPost",inputs);
                    setOwnFeeds(ID.data)
                }catch(err){
                    setErr("Unable to get Info");
                }
            
            }
            else{
                navigate("/login");
            }
        }
       
        
        if(profileArr.length != 0){
            setname(profileArr[0].Name);
            setaddress(profileArr[0].Address);
            setphone(profileArr[0].Phone);
            setemail(profileArr[0].Email);
            setgender(profileArr[0].Gender);
            setaboutme(profileArr[0].AboutMe);
        }
        
        //getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[0])
        //setnamazPercentage([...namazPercentage, getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[0])]);
        if(chartArr.length!=0){
        setnamazPercentage([{name:'Namaz',value:getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[0])},{name:'Namaz',value:100 - getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[0])}]);
        setquranPercentage([{name:'Namaz',value:getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[1])},{name:'Namaz',value:100-getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[1])}]);
        setotherPercentage([{name:'Namaz',value:getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[2])},{name:'Namaz',value:100-getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[2])}]);
        }
        else{
            console.log("here RE NOT")
        }
        console.log(namazPercentage);
       
        handleInfo();
        }, []);     //inputs.ID


        
      useEffect(() => {
        function handleChartInfo(){
            setnamazPercentage([{name:'Namaz',value:getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[0])},{name:'Namaz',value:100 - getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[0])}]);
            setquranPercentage([{name:'Namaz',value:getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[1])},{name:'Namaz',value:100-getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[1])}]);
            setotherPercentage([{name:'Namaz',value:getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[2])},{name:'Namaz',value:100-getRamadanDay(time.getMonth() + 1, time.getDate(),chartArr[2])}]);
            
        };
        handleChartInfo();
      }, [chartArr.length!=0 ]);

    //   const myfeeds=[
    //     {time:"Today", story:"A Prophet once passed by an ant hill and saw ants working tirelessly to store food for the winter. He was so impressed that he said, :Go to the ant, you sluggard, and consider her ways and be wise (Quran 6: 118). The lesson here is that we should learn from the hardworking ants and not be lazy."},
    //     {time:"Today", story:"The Prophet Muhammad (peace be upon him) used to smile often, and one day a man asked him why he smiled so much. The Prophet replied, \"I smile because it is a charity and a way to bring joy to others.\" This story teaches us the importance of being kind and bringing joy to others."},
    //     {time:"Today", story:"On the Day of Judgment, our good deeds and bad deeds will be weighed on a scale. One of the companions of the Prophet asked, \"O Messenger of Allah, what if our good deeds are outweighed by our bad deeds?\" The Prophet replied, \"Then Allah will forgive you out of His mercy.\" This story teaches us about the importance of doing good deeds and seeking forgiveness."},
    //     {time:"Tomorrow", story:"One day, a dog was wandering around in the desert, searching for food. It was so hungry that it started to chew on a dry bone. As it chewed, it discovered that there was still some meat left on the bone. The dog had been patient and had been rewarded for its patience. This story teaches us about the importance of patience and perseverance."},
    //     {time:"Tomorrow", story:"When the Prophet Muhammad (peace be upon him) was hiding in a cave from his enemies, a spider spun a web over the entrance to the cave. When the enemies came to the cave, they saw the spider web and assumed that nobody could have entered the cave recently. This story teaches us about the importance of using whatever resources we have to protect ourselves and our loved ones."}
    // ]
    
    const feedsubmit=async(event)=>{
        event.preventDefault(); 
        let feedDate= time.getFullYear()+"-"+time.getMonth()+"-"+time.getDate();
        console.log(feedDate)
        const postInfo={
            post:newfeed,
            feedDate,
            ID:inputs.UserID,
        }
        await axios.post("http://localhost:3002/api/setPost",postInfo);
        navigate("/feeds")
    };

  return (
    <>
    <div className='shade1 full_page_height'>
        <div className="shade2 p-5">
            <center><h4>প্রফাইল</h4></center> <hr /><hr/> <br/>
            <center><h4>ব্যাক্তিগত তথ্য</h4></center><hr/> <br/>
            <div className="row">
                <div className="col">
                    <div className="row m-2 p-3">
                        নামঃ<hr/>{name}<br/>
                    </div>
                    <div className="row m-2 p-3">
                        ঠিকানাঃ<hr/>{address}<br/>
                    </div>
                </div>
                <div className="col mx-2">
                    <div className="row m-2 p-3">
                        জেন্ডারঃ<hr/>{gender}<br/>
                    </div>
                    <div className="row m-2 p-3">
                        মোবাইলঃ<hr/>{phone}<br/>
                    </div>
                </div>
            </div> <br/>
            <div className="row">
                নিজের সম্পর্কেঃ<br/>{aboutme}
            </div><br/>
            <center><h4>ব্যাক্তিগত রিপোর্ট</h4></center><hr/> <br/>
            <div className="shade3">
                <br/>
                <center>
                    <span className="p-1 shade2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;উক্ত রঙটি টার্গেট পূরণের শতকরা ভাগ নির্দেশ করে
                </center>
                <br/>
                <div className="row">
                    <div className="col">
                    <center><h3>নামাজ</h3></center><hr/>
                    <PieChart width={300} height={230}  >
                        <Pie
                        data={namazPercentage}
                        cx={120}
                        cy={100}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                    
                    </PieChart>
                    </div>
                    <div className="col">
                    <center><h3>কুরআন</h3></center><hr/>
                    <PieChart width={300} height={230}  >
                        <Pie
                        data={quranPercentage}
                        cx={120}
                        cy={100}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                    
                    </PieChart>
                    </div>
                    <div className="col">
                    <center><h3>অন্যান্য চেকলিস্ট</h3></center><hr/>
                    <PieChart width={300} height={230}  >
                        <Pie
                        data={otherPercentage}
                        cx={120}
                        cy={100}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                    
                    </PieChart>
                    </div>
                </div>
            </div><br/>
            <form onSubmit={feedsubmit}>
                <center><h4>ফিড</h4></center><hr/> <br/>
                <p>নতুন ফিড পোস্ট করুন</p>
                <div className="shade3">
                    <label htmlFor="feedd"></label>
                    <textarea name="feed" id="feeedd" placeholder='এখানে নতুন ফিড লিখুন' style={{ width: "100%" }} rows="5" value={newfeed} onChange={(e)=> setnewfed(e.target.value)}></textarea>
                </div>
                <input className='shade1 p-2' type="submit" value="পোস্ট করুন" />
            </form>
            <p className='my-3'>আপনার পূর্বের ফিডসমুহ</p>
            <div className='shade1 p-3 full_page_height' style={{ display: "inline-block" }}>
                 {ownFeeds.map((feed)=><ProfileFeeds time={feed.Date} story={feed.post} like={feed.LikeCount}/>)}
            </div>
        </div>
        
    </div>
    {/* <Footer/> */}
    </>
  )
}


// INSERT INTO ramadan.progress  VALUES (
//     1,
//       true,
//       false,
//       true,
//       true,
//       true,
//       false,
//       true,
//       false,
//       true,
//       true,
//       'Page 1',
//       'Ayat 1',
//       true,
//       false,
//       true,
//       true,
//       false,
//       true,
//       false,
//       true,
//       true,
//       false,
//       true
//     );
    