import React,{ useState ,useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import './CSS Files/Colors.css'
import { getCookie } from "./Authorization/Cookie_handle";


export default function Navber() {

  const [isLogin, setIsLogin] = useState(false);
  var result;

  useEffect(() => {
    function handleCookie(){
      result = getCookie('my_cookies');
      console.log(result," here are navbar print");
      if(result!=null){
        setIsLogin(true);
      }
    }
     handleCookie();
  }, []); 

  const clearCookie = (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

    const handleRefresh = () => {
      window.location.reload();
    };

  //const { logout } = useContext(AuthContext);
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      console.log("inside navbar")
      //await logout()

      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
     
      //await axios.post("http://localhost:3001/api/logout");
      setIsLogin(false);
      handleRefresh();
      
    } catch (err) {
      console.log("here error in navbar");
    }
  };



  return (
    <div>
     <nav className="row nav shade1 p-3">
        <div className="display-6 mb-2">Ramadan Tracker</div> <hr/>
        <a className="col mb-1 my-nav-link" aria-current="page" href="/">হোমপেজ</a>
        <a  className="col mb-1 my-nav-link" href="/feeds">ইসলামিক ফিড</a>
        <a className="col mb-1 my-nav-link" href="/ramadanInfo">রমজানের তথ্য</a>
        <a className="col mb-1 my-nav-link" href="/profile">প্রফাইল</a>
        <a className="col mb-1 my-nav-link" href="/progress">প্রোগ্রেস</a>
        {!isLogin && <a className="col mb-1 my-nav-link" href="/login">লগ-ইন</a>}
        {isLogin && <a className="col mb-1 my-nav-link" onClick={handleLogout}>লগ-আউট</a>}
        <hr/>
    </nav>
    </div>
  );
}
