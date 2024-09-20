import './Datebar.css'
import Datebutton from './Datebutton'
import leftbutton from '/src/assets/leftbutton.svg'
import rightbutton from '/src/assets/rightbutton.svg'
import calendar from '/src/assets/calendar.svg'
import { useState } from 'react'

export default function Datebar(){

    // TO-DO: add functionality so that the fixtures days changes when button is pressed. Need to store games based on date. 

    // list of days
    const days = ['Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday','Sunday'];

    // get date for chosen day
    const getFormattedDate = (index) => {
        const today = new Date();
        today.setDate(today.getDate() + (index - current_today())); // Adjust the date according to index
        const options = { month: 'short', day: 'numeric', year: 'numeric' }; // format the date object with an option
        return today.toLocaleDateString('en-US', options); // format the date object to a string
    };

    // get index for current day
    const current_today = () => {
        const today_index = new Date().getDay();
        return today_index;
    }

    // change state to previous day
    const previous_day = () => {
        setCurrentDayIndex((prevIndex) => (prevIndex === 0 ? 0: prevIndex - 1 ));
    }

    // change state to next day
    const next_day = () => {
        setCurrentDayIndex((prevIndex) => (prevIndex === days.length - 1 ? days.length - 1: prevIndex + 1 ));
    }

    // state to keep track of current day index
    const [currentDayIndex, setCurrentDayIndex] = useState(current_today());
    return(
        <div className='datebar'>            
            <Datebutton onClick = {previous_day} orientation = {leftbutton}/>
            <Datebutton onClick= {next_day} orientation = {rightbutton} />
            <img src={calendar} alt = "calendar-image" className='calendar-img'/>
            <p className='date-dayheader'>{days[currentDayIndex]}, {getFormattedDate(currentDayIndex)} </p>
        </div>
 
    );
}