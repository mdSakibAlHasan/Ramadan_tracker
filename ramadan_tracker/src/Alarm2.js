import React, { useState, useEffect } from "react";
import vdo from "./Asset/azan.mp4";

function App() {
  const [alarmTime, setAlarmTime] = useState(new Date().setHours(2));
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const [playAlarm, setPlayAlarm] = useState(false);
  const [currentTime2, setCurrentTime2] = useState(new Date());

  const items = [
    {
      id: 1,
      day: "Saturday",
      sehri: "০৪:৪৩",
      iftar: 12,
      date: "3/24/2023",
      iftarB: "৬:১২",
    },
    {
      id: 2,
      day: "Sunday",
      sehri: "০৪:৪২",
      iftar: 12,
      date: "3/25/2023",
      iftarB: "৬:১২",
    },
    {
      id: 3,
      day: "Monday",
      sehri: "০৪:৪১",
      iftar: 13,
      date: "3/26/2023",
      iftarB: "৬:১৩",
    },
    {
      id: 4,
      day: "Tuesday",
      sehri: "০৪:৪০",
      iftar: 13,
      date: "3/27/2023",
      iftarB: "৬:১৩",
    },
    {
      id: 5,
      day: "Wednesday",
      sehri: "০৪:৩৮",
      iftar: 13,
      date: "3/28/2023",
      iftarB: "৬:১৩",
    },
    {
      id: 6,
      day: "Thursday",
      sehri: "০৪:৩৭",
      iftar: 14,
      date: "3/29/2023",
      iftarB: "৬:১৪",
    },
    {
      id: 7,
      day: "Friday",
      sehri: "০৪:৩৬",
      iftar: 14,
      date: "3/30/2023",
      iftarB: "৬:১৪",
    },
    {
      id: 8,
      day: "Thursday",
      sehri: "০৪:৩৫",
      iftar: 15,
      date: "3/31/2023",
      iftarB: "৬:১৫",
    },
    {
      id: 9,
      day: "Thursday",
      sehri: "০৪:৩৪",
      iftar: 15,
      date: "4/1/2023",
      iftarB: "৬:১৫",
    },
    {
      id: 10,
      day: "Thursday",
      sehri: "০৪:৩৩",
      iftar: 15,
      date: "4/2/2023",
      iftarB: "৬:১৫",
    },
    {
      id: 11,
      day: "Thursday",
      sehri: "০৪:৩২",
      iftar: 16,
      date: "4/3/2023",
      iftarB: "৬:১৬",
    },
    {
      id: 12,
      day: "Thursday",
      sehri: "০৪:৩১",
      iftar: 16,
      date: "4/4/2023",
      iftarB: "৬:১৬",
    },
    {
      id: 13,
      day: "Thursday",
      sehri: "০৪:৩০",
      iftar: 17,
      date: "4/5/2023",
      iftarB: "৬:১৭",
    },
    {
      id: 14,
      day: "Thursday",
      sehri: "০৪:২৪",
      iftar: 52,
      date: "4/6/2023",
      iftarB: "৬:২০",
    },
    {
      id: 15,
      day: "Thursday",
      sehri: "০৪:২৮",
      iftar: 17,
      date: "4/7/2023",
      iftarB: "৬:১৭",
    },
    {
      id: 16,
      day: "Thursday",
      sehri: "০৪:২৭",
      iftar: 18,
      date: "4/8/2023",
      iftarB: "৬:১৮",
    },
    {
      id: 17,
      day: "Thursday",
      sehri: "০৪:২৬",
      iftar: 18,
      date: "4/9/2023",
      iftarB: "৬:১৮",
    },
    {
      id: 18,
      day: "Thursday",
      sehri: "০৪:২৪",
      iftar: 19,
      date: "4/10/2023",
      iftarB: "৬:১৯",
    },
    {
      id: 19,
      day: "Thursday",
      sehri: "০৪:২৩",
      iftar: 19,
      date: "4/11/2023",
      iftarB: "৬:১৯",
    },
    {
      id: 20,
      day: "Thursday",
      sehri: "০৪:২২",
      iftar: 19,
      date: "4/12/2023",
      iftarB: "৬:১৯",
    },
    {
      id: 21,
      day: "Thursday",
      sehri: "০৪:২১",
      iftar: 20,
      date: "4/13/2023",
      iftarB: "৬:২০",
    },
    {
      id: 22,
      day: "Thursday",
      sehri: "০৪:২০",
      iftar: 20,
      date: "4/14/2023",
      iftarB: "৬:২০",
    },
    {
      id: 23,
      day: "Thursday",
      sehri: "০৪:১৯",
      iftar: 21,
      date: "4/15/2023",
      iftarB: "৬:২০",
    },
    {
      id: 24,
      day: "Thursday",
      sehri: "০৪:১৮",
      iftar: 21,
      date: "4/16/2023",
      iftarB: "৬:২১",
    },
    {
      id: 25,
      day: "Thursday",
      sehri: "০৪:১৭",
      iftar: 21,
      date: "4/17/2023",
      iftarB: "৬:২১",
    },
    {
      id: 26,
      day: "Thursday",
      sehri: "০৪:১৬",
      iftar: 22,
      date: "4/18/2023",
      iftarB: "৬:২২",
    },
    {
      id: 27,
      day: "Thursday",
      sehri: "০৪:১৫",
      iftar: 22,
      date: "4/19/2023",
      iftarB: "৬:২২",
    },
    {
      id: 28,
      day: "Thursday",
      sehri: "০৪:১৪",
      iftar: 23,
      date: "4/20/2023",
      iftarB: "৬:২৩",
    },
    {
      id: 29,
      day: "Thursday",
      sehri: "০৪:১৩",
      iftar: 23,
      date: "4/21/2023",
      iftarB: "৬:২৩",
    },
    {
      id: 30,
      day: "Thursday",
      sehri: "০৪:১২",
      iftar: 13,
      date: "4/22/2023",
      iftarB: "৬:২৪",
    },
  ];

  function getCurrentIftar() {
    const currentDate = new Date();
    const currentDateString = `${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    const currentItem = items.find((item) => item.date === currentDateString);
    return currentItem ? currentItem.iftar : "N/A";
  }
  function getCurrentIftarB() {
    const currentDate = new Date();
    const currentDateString = `${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    const currentItem = items.find((item) => item.date === currentDateString);
    return currentItem ? currentItem.iftarB : "N/A";
  }

  function getCurrentSehriB() {
    const currentDate = new Date();
    const currentDateString = `${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    const currentItem = items.find((item) => item.date === currentDateString);
    return currentItem ? currentItem.sehri : "N/A";
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentIftar = getCurrentIftar();
    const currentHours = currentTime2.getHours();
    const currentMinutes = currentTime2.getMinutes();
    // const alarmHours=alarmTime.getHours();
    console.log(currentMinutes);

    if (currentHours ===2 && !playAlarm && currentIftar === currentMinutes) {
      setPlayAlarm(true);
    }
  }, [currentTime, alarmTime, playAlarm]);

  return (
    <div>
      <video
        style={{ width: "500px", height: "500px" }}
        src={vdo}
        controls
        autoPlay={playAlarm}
      />
      <div style={{position:"absolute",top:"40%",left:"50%",transform:"Translate(-50%,-50%)"}}>
        
        

        <div className="row">
                <div className="col"><p>আজকের ইফতারের সময়: {getCurrentIftarB()}</p></div>
                <div className="col"><p>আজকের সেহরির সময়: {getCurrentSehriB()}</p></div>
        </div>
      
      
      
      </div>
    </div>
  );
}

export default App;
