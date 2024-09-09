import './Datebar.css'
import Datebutton from './Datebutton'
import leftbutton from '/src/assets/leftbutton.svg'
import rightbutton from '/src/assets/rightbutton.svg'
import calendar from '/src/assets/calendar.svg'

export default function Datebar(){
    return(
        <div className='datebar'>
            <Datebutton orientation = {leftbutton}/>
            <Datebutton orientation = {rightbutton} />
            <img src={calendar} alt = "calendar-image" className='calendar-img'/>
        </div>
    );
}