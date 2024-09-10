import './Datebar.css'

export default function Datebutton({onClick, orientation}){
    return(
        <button onClick={onClick} className='datebutton'>
                <img src={orientation} alt="date-button" className='button-size' />
        </button>
    );
}