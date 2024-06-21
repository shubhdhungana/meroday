"use client";
import { useState, useEffect } from "react";
import NepaliDate from "nepali-date-converter";
// import { getRandomQuote } from 'random-quotes';

const NepaliDateCard = () => {
  const [nepaliDate, setNepaliDate] = useState("");
  const [englishDate, setEnglishDate] = useState("");
  const [nepaliDay, setNepaliDay] = useState("");
  const [nepaliMonth, setNepaliMonth] = useState("");
  const [panchang, setPanchang] = useState("");
  const [time, setTime] = useState("");
  // const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    const getCurrentNepaliDate = () => {
      const currentDate = new Date();
      const nepaliDateObj = new NepaliDate(currentDate);

      setNepaliDate(nepaliDateObj.format("DD MMMM, YYYY", "en"));
      setEnglishDate(
        currentDate.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      );
      setNepaliDay(nepaliDateObj.format("ddd", "np"));
      setNepaliMonth(
        `${nepaliDateObj.format("MMMM", "np")} ${nepaliDateObj.getBS().date}`
      );
      fetchPanchang(nepaliDateObj);
      setTime(
        `${currentDate.getHours().toString().padStart(2, "0")}:${currentDate
          .getMinutes()
          .toString()
          .padStart(2, "0")}`
      );
    };

    const fetchPanchang = (nepaliDateObj) => {
      // Example logic to fetch Panchang details (replace with actual implementation)
      const panchangDetails = {
        shubh: "शुभ",
        vanic: "वणिज",
        month: nepaliDateObj.format("MMMM", "np"),
      };
      setPanchang(
        `${panchangDetails.shubh} ${panchangDetails.vanic} ${panchangDetails.month}`
      );
    };

    getCurrentNepaliDate();

    /*   getRandomQuote().then(quote => {
      setRandomQuote(quote.text);
    }); */
  }, []);

  return (
    <>
   
   <div className="flex flex-col items-center justify-center min-h-screen bg-red-800">
      {/* Centered heading */}
      <h1 className="text-4xl font-bold text-white mb-8">mero day</h1>

      {/* Card container */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
        <div className="text-center mb-4">
          <p className="text-4xl font-bold">
            {nepaliDate} - {nepaliDay}
          </p>
          <p className="font-bold">{nepaliMonth}</p>
          <p className="font-bold">{panchang}</p>
          <p className="font-bold">{time}</p>
          <p className="font-bold">{englishDate}</p>
        </div>
      </div>
      <p className=" text-bold text-white mb-8 mt-8">subha din rahos!</p>
    </div>
    </>
  );
};

export default NepaliDateCard;
