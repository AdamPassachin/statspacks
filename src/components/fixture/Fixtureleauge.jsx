import './Fixture.css'

export default function Fixtureleauge({logo, leauge}){
    return(
            <div className='row divider'>
                <div className='col'>
                    <p className='fixture-font'>{leauge}</p>
                    <img src={logo} alt='prem' className='leauge-logo'/>
                </div>
            </div>
    );
}
