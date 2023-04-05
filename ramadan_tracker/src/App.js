import logo from './logo.svg';
import { BrowserRouter,StaticRouter, Navigate, Routes, Route, Link, createBrowserRouter } from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import DailyProgress from './DailyProgress';
import Footer from './Footer';
import Login from './Authorization/Login';
import SignUp from './Authorization/SignUp';
import Profile from './Profile';
import FeedPage from './Feed/FeedPage';
import FeedCard from './Feed/FeedCard';
import Navber from './Navber';
import RamadanInfo from './RamadanInfo';
import ChangePassword from './Authorization/ChangePassword'
import ForgotPassword from './Authorization/ForgotPassword'

function App() {
  function getRamadanDay(month,day){
    let rDay,exten;
    if(month==3)
    return (day-23);
    else 
    return (day+8);


  }
  return (
    <div className='my_body'>
    <Navber/>
    {/* <RamadanInfo/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/ramadanInfo" element={<RamadanInfo/>}/>
        <Route path="/feeds" element={<FeedPage/>}/>
        <Route path="/changepass" element={<ChangePassword/>}/>
        <Route path="/forgotpass" element={<ForgotPassword/>}/>
        <Route path="/progress" element={<DailyProgress getRamadanDay={getRamadanDay}/>}/>
        {/* <Route path="/feeds" element={<FeedPage/>}/> */}
      </Routes>
    </BrowserRouter>
    {/* <DailyProgress getRamadanDay={getRamadanDay}/>
    <Footer/> */}
    {/* <Login/> */}
    {/* <SignUp/> */}
    {/* <Profile/> */}
    {/* <FeedPage/> */}
    {/* <FeedCard name="hi" time="w" story="dfd"/> */}
    <Footer/>
    </div>
  );
}

export default App;
