import React from "react";
import { Link, NavLink } from "react-router-dom";
import './CSS Files/Colors.css'

export default function Navber() {
  return (
    <div>
     <nav className="row nav shade1 p-3">
        <div className="display-6 mb-2">Ramadan Tracker</div> <hr/>
        <a className="col mb-1 my-nav-link" aria-current="page" href="/">হোমপেজ</a>
        <a  className="col mb-1 my-nav-link" href="/feeds">ইসলামিক ফিড</a>
        <a className="col mb-1 my-nav-link" href="/ramadanInfo">রমজানের তথ্য</a>
        <a className="col mb-1 my-nav-link" href="/profile">প্রফাইল</a>
        <a className="col mb-1 my-nav-link" href="/progress">প্রোগ্রেস</a>
        <a className="col mb-1 my-nav-link" href="/login">লগ-ইন</a>
        <hr/>
    </nav>
    </div>
  );
}
