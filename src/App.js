import React, { useState } from "react";
import data from "./data.json";
import './App.css';
const App = () => {
  const [sampletime,setSampletime] = useState(0);
  const date = new Date();
  const sampleHrs = date.getHours();
  return (
    
    <div className="content">
      <h1 className="item1">Train Data</h1>
      {
        data.map(contentdata=>{
          return(
            
            <div >
              <h1>Train Name:{contentdata.trainName}</h1>
              <p>Current Hrs: {sampleHrs}</p>
              <p>Train Number:{contentdata.trainNumber}</p>
              <p>Departure time: {contentdata.departureTime.Hours} hrs {contentdata.departureTime.Minutes} min {contentdata.departureTime.Seconds} sec</p>
              <p>Sleeper: {contentdata.seatsAvailable.sleeper} seats | Price: Rs.{contentdata.price.sleeper}</p>
              <p>AC: {contentdata.seatsAvailable.AC} seats | Price: Rs.{contentdata.price.AC}</p>
              <p>Delayed By: {contentdata.delayedBy} min</p>
            </div>
          );
        }
          
        )
      }
    </div>
  );
};

export default App;
