import './Datebar.css'
import Datebutton from './Datebutton'
import leftbutton from '/src/assets/leftbutton.svg'
import rightbutton from '/src/assets/rightbutton.svg'
import calendar from '/src/assets/calendar.svg'
import { useState } from 'react'

export default function Datebar(){

    // list of days
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];

    // get index for current day
    const current_today = () => {
        const today_index = new Date().getDay();
        return today_index;
    }

    // change state to previous day
    const previous_day = () => {
        setCurrentDayIndex((prevIndex) => (prevIndex === 0 ? days.length - 1: prevIndex - 1 ));
    }

    // change state to next day
    const next_day = () => {
        setCurrentDayIndex((prevIndex) => (prevIndex === days.length - 1 ? 0: prevIndex + 1 ));
    }

    // state to keep track of current day index
    const [currentDayIndex, setCurrentDayIndex] = useState(current_today());

    return(
        <div className='datebar'>
            <Datebutton onClick = {previous_day} orientation = {leftbutton}/>
            <Datebutton onClick= {next_day} orientation = {rightbutton} />
            <img src={calendar} alt = "calendar-image" className='calendar-img'/>
            <p className='date-dayheader'>{days[currentDayIndex]}</p>
        </div>
    );
}