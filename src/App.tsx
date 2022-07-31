import React from 'react';
import './App.css';
import { Searching } from './Components/Searching/searching';
import { CityToday } from './Components/CityToday/cityToday';
import { Buttons } from './Components/Buttons/buttons';
import { Quote } from './Components/Quote/quote';
import { TodayInfo } from './Components/TodayInfo/todayinfo';
import { useSelector } from 'react-redux';

function App() {


 
  return (
    <div className="App">
      <Searching />
      <CityToday />
      <Buttons />
      <Quote />
      <TodayInfo/>
    </div>
  );
}
export default App;
