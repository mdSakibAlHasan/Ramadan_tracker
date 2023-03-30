import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Footer from './Footer';
import { getCookie,getAsynCookie } from './Authorization/Cookie_handle';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [name,setname]=useState();
    const [address,setaddress]=useState();
    const [phone,setphone]=useState();
    const [email,setemail]=useState();
    const [gender,setgender]=useState();
    const [aboutme,setaboutme]=useState();
    const [namazPercentage,setnamazPercentage]=useState([{name:'Namaz',value:80},{name:'Namaz',value:20}]);
    const [quranPercentage,setquranPercentage]=useState([{name:'Namaz',value:70},{name:'Namaz',value:30}]);
    const [otherPercentage,setotherPercentage]=useState([{name:'Namaz',value:86},{name:'Namaz',value:14}]);
    const [profileArr, setprofileArr]=useState([]);

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
      });
      var ID;


      useEffect(() => {
        function handleCookie(){
            ID = getCookie('my_cookies');
            inputs.ID = ID;
        };
        handleCookie();
      }, []); 
    
    
      const navigate = useNavigate();
    useEffect(() => {
        const handleInfo = async()=>{
            // const ID = getCookie();
            // inputs.ID = ID;
            console.log(inputs.ID," in cookies")
            if(inputs.ID){
            const info = await axios.post("http://localhost:3002/api/getProfileInfo",inputs);
            setprofileArr(info.data);
            console.log(profileArr);
            }
            else{
                navigate("/login");
            }
        }
        
        // const x1values=["Namaz"];
        // const x2values=["Quran"];
        // const x3values=["Other Activities"];
        // const barColors = ["#b91d47"];

        setname("ফাহিম মাহমুদ");
        setaddress("আজিমপুর");
        setphone("০১৩০৮২৬৭৮৮৩");
        setemail("mammud.fahim1231@gmail.com");
        setgender("পুরুষ");
        setaboutme("Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quam tempore quisquam repellat autem nobis nostrum laboriosam maiores, ea, veritatis odio ad recusandae. Voluptate dolorum voluptatibus consectetur dolor. Tenetur, officia recusandae, suscipit quisga accusamus dolorem autem. Error neque esse doloremque alias. Doloremque nam voluptas distinctio quam sapiente numquam accusantium?");
        // setnamazPercentage([...namazPercentage, 92]);
        // setquranPercentage([...quranPercentage, 42]);
        // setotherPercentage([...otherPercentage, 22]);
       
        console.log(namazPercentage);
        // setnamazPercentage(addElement(namazPercentage,92));
        // setquranPercentage(addElement(quranPercentage,43));
        // setotherPercentage(addElement(otherPercentage,67));
        
        // @sakib database theke ramadanDay onuzayi data load kora

        // setChart1Data({
        //     labels: ["Namaz"],
        //     datasets: [{
        //       backgroundColor: ["#b91d47"],
        //       data: namazPercentage
        //     }]
        //   });
        handleInfo();
        }, [inputs.ID]);

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
    