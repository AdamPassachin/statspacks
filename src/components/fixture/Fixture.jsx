import './Fixture.css'
import Fixturebar from './Fixturebar';
import Fixtureleauge from './Fixtureleauge';
import leaugelogo from '/src/assets/leaugelogo.svg'


export default function Fixture(){
    return(
        <div className='fixture-area'>
            <div className='row'>
                <div className='col'>
                    <p className='fixture-header-font'>Fixtures</p>
                    <div className='fixture'>
                        <Fixtureleauge logo = {leaugelogo} leauge="Premier Leauge" />
                        <Fixturebar time = "18:00" />
                    </div>
                </div>
                <div className='col'>
                </div>
            </div>
        </div>
    );
}
