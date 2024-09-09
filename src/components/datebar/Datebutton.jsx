import './Datebar.css'

export default function Datebutton({orientation}){
    return(
        <button className='datebutton'>
                <img src={orientation} alt="leftbutton" className='button-size' />
        </button>
    );
}