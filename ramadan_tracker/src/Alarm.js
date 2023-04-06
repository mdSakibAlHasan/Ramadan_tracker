import React, { useState, useEffect } from "react";
import vdo from "./Asset/azan.mp4";

function App() {
  const [alarmTime, setAlarmTime] = useState(new Date().setHours(2)); // set alarm time to 6 PM
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const [playAlarm, setPlayAlarm] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const items = [
    { id: 1, day: "Saturday", sehri: "4:43", iftar: "14", date: "3/24/2023" },
    { id: 2, day: "Sunday", sehri: "4:42", iftar: "15", date: "3/25/2023" },
    { id: 3, day: "Monday", sehri: "4:41", iftar: "15", date: "3/26/2023" },
    { id: 4, day: "Tuesday", sehri: "4:41", iftar: "16", date: "3/27/2023" },
    { id: 5, day: "Wednesday", sehri: "4:41", iftar: "16", date: "3/28/2023" },
    { id: 6, day: "Thursday", sehri: "4:41", iftar: "17", date: "3/29/2023" },
    { id: 7, day: "Friday", sehri: "4:41", iftar: "17", date: "3/30/2023" },
    { id: 8, day: "Thursday", sehri: "4:41", iftar: "18", date: "3/31/2023" },
    { id: 9, day: "Thursday", sehri: "4:41", iftar: "18", date: "4/1/2023" },
    { id: 10, day: "Thursday", sehri: "4:41", iftar: "19", date: "4/2/2023" },
    { id: 11, day: "Thursday", sehri: "4:41", iftar: "19", date: "4/3/2023" },
    { id: 12, day: "Thursday", sehri: "4:41", iftar: "19", date: "4/4/2023" },
    { id: 13, day: "Thursday", sehri: "4:41", iftar: "20", date: "5/5/2023" },
    { id: 14, day: "Thursday", sehri: "4:41", iftar: "20", date: "6/4/2023" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentTime == alarmTime && !playAlarm) {
      // check if the current time is greater than or equal to alarm time and playAlarm is false
      setPlayAlarm(true); // set playAlarm state to true to trigger video autoplay
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
      <div>
        <p>Current date: {currentDate.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default App;
