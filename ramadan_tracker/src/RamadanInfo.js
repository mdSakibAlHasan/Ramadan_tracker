import React from "react";
import "./CSS Files/RamadanInfo.css";

export default function RamadanInfo() {
  const daysOfWeek = ["শুক্র", "শনি", "রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি"];
  const RamadanNo = [
    "১ ",
    "২ ",
    "৩ ",
    "৪ ",
    "৫ ",
    "৬ ",
    "৭ ",
    "৮ ",
    "৯",
    "১০ ",
    "১১ ",
    "১২ ",
    "১৩ ",
    "১৪ ",
    "১৫",
    "১৬",
    "১৭ ",
    "১৮",
    "১৯",
    "২০",
    "২১",
    "২২",
    "২৩",
    "২৪ ",
    "২৫",
    "২৬",
    "২৭",
    "২৮",
    "২৯",
    "৩০",
    "৩১",
  ];
  const date = [
    "২৪ মার্চ",
    "২৫ মার্চ",
    "২৬ মার্চ",
    "২৭ মার্চ",
    "২৮ মার্চ",
    "২৯ মার্চ",
    "৩০ মার্চ",
    "৩১ মার্চ",
    "১ এপ্রিল",
    "২ এপ্রিল",
    "৩ এপ্রিল",
    "৪ এপ্রিল",
    "৫ এপ্রিল",
    "৬ এপ্রিল",
    "৭ এপ্রিল",
    "৮ এপ্রিল",
    "৯ এপ্রিল",
    "১০ এপ্রিল",
    "১১ এপ্রিল",
    "১২ এপ্রিল",
    "১৩ এপ্রিল",
    "১৪ এপ্রিল",
    "১৫ এপ্রিল",
    "১৬ এপ্রিল",
    "১৭ এপ্রিল",
    "১৮ এপ্রিল",
    "১৯ এপ্রিল",
    "২০ এপ্রিল",
    "২১ এপ্রিল",
    "২২ এপ্রিল",
    "২৩ এপ্রিল",
  ];

  const iftar = [
    "৬:১২",
    "৬:১২",
    "৬:১৩",
    "৬:১৩",
    "৬:১৩",
    "৬:১৪",
    "৬:১৪",
    "৬:১৫",
    "৬:১৫",
    "৬:১৫",
    "৬:১৬",
    "৬:১৬",
    "৬:১৭",
    "৬:১৭",
    "৬:১৭",
    "৬:১৮",
    "৬:১৮",
    "৬:১৯",
    "৬:১৯",
    "৬:১৯",
    "৬:২০",
    "৬:২০",
    "৬:২১",
    "৬:২১",
    "৬:২১",
    "৬:২২",
    "৬:২২",
    "৬:২৩",
    "৬:২৩",
  ];

  const sehri = [
    "০৪:৪৩",
    "০৪:৪২",
    "০৪:৪১",
    "০৪:৪০",
    "০৪:৩৮",
    "০৪:৩৭",
    "০৪:৩৬",
    "০৪:৩৫",
    "০৪:৩৪",
    "০৪:৩৩",
    "০৪:৩২",
    "০৪:৩১",
    "০৪:৩০",
    "০৪:২৯",
    "০৪:২৮",
    "০৪:২৭",
    "০৪:২৬",
    "০৪:২৪",
    "০৪:২৩",
    "০৪:২২",
    "০৪:২১",
    "০৪:২০",
    "০৪:১৯",
    "০৪:১৮",
    "০৪:১৭",
    "০৪:১৬",
    "০৪:১৫",
    "০৪:১৪",
    "০৪:১৩",
    "০৪:১২",
  ];

 

  return (
    <>
      <div className="shade1 full_page">
        <div className="shade2 p-3">
          <div className="row">
            <div className="col">
              <center>
                <h4>রহমতের ১০ দিন</h4>
              </center>{" "}
              <hr />
              <div className="row">
                <div className="col-2">রমযান </div>
                <div className="col-3">তারিখ </div>
                <div className="col">বার </div>
                <div className="col">সাহরী</div>
                <div className="col">ইফতার</div>
              </div>{" "}
              <hr />
              <div className="row my-1">
                <div className="col-2">
                  {RamadanNo.slice(0, 10).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </div>
                <div className="col-3">
                  {date.slice(0, 10).map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </div>
                <div className="col-2">
                  {daysOfWeek.map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                  {daysOfWeek.slice(0, 3).map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </div>
                <div className="col">
                  {sehri.slice(0, 10).map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </div>
                <div className="col">
                  {iftar.slice(0, 10).map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </div>
              </div>
              <hr />
              <center>
                <h4>মাগফিরাতের ১০ দিন</h4>
              </center>{" "}
              <hr />
              <div className="row my-1">
                <div className="col-2">
                  {RamadanNo.slice(10, 20).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </div>
                <div className="col-3">
                  {date.slice(10, 20).map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </div>
                <div className="col-2">
                  {daysOfWeek.map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                  {daysOfWeek.slice(0, 3).map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </div>
                <div className="col">
                  {sehri.slice(10, 20).map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </div>
                <div className="col">
                  {iftar.slice(10, 20).map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </div>
              </div>
              <hr />
              <center>
                <h4>নাজাতের ১০ দিন</h4>
              </center>{" "}
              <hr />
              <div className="row my-1">
                <div className="col-2">
                  {RamadanNo.slice(20, 30).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </div>
                <div className="col-3">
                  {date.slice(20, 30).map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </div>
                <div className="col-2">
                  {daysOfWeek.map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                  {daysOfWeek.slice(0, 3).map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </div>
                <div className="col">
                  {sehri.slice(20, 30).map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                </div>
                <div className="col">
                  {iftar.slice(20, 30).map((day, index) => (
                    <li key={index}>{day}</li>
                  ))}
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
