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
        return days[today_index]
    }

    // state to keep track of current day index
    const [currentDayIndex, setCurrentDayIndex] = useState(current_today());

    return(
        <div className='datebar'>
            <Datebutton orientation = {leftbutton}/>
            <Datebutton orientation = {rightbutton} />
            <img src={calendar} alt = "calendar-image" className='calendar-img'/>
            <p>Today is {currentDayIndex}</p>
        </div>
    );
}