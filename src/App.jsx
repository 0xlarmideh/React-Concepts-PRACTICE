import './App.css';
import React, { useState, useEffect } from "react";
import Navbar from "./navbar.jsx"
import MainContent from "./maincontent.jsx";
import Data from "./data.jsx"


export default function App() {
  const mapData = Data;
  const locationDataMapped = Data.map((item) => {
    return <MainContent key={item.id} title={item.title} description={item.description} location={item.location} startDate={item.startDate} endDate={item.endDate} mapUrl={item.mapUrl} img={item.imageUrl}/>
  })
  return (
    <div>
      <Navbar />
      <div className='page-container'>{locationDataMapped}</div>
    </div>
  )
}
