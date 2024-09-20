import './Fixture.css'
import leftbutton from '/src/assets/leftbutton.svg'

export default function ReturnButton() {
    return (

        <button className='return-button'>
                <img src = {leftbutton} alt="return-button" className='return-button-size' />
        </button>
       
    );
}
