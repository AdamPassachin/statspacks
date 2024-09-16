import './Fixture.css'
import Fixturebar from './Fixturebar';
import Fixtureleauge from './Fixtureleauge';
import leaugelogo from '/src/assets/leaugelogo.svg'
import image1 from '/src/assets/image1.svg'
import image2 from '/src/assets/image2.svg'


export default function Fixture(){
    return(
        <div className='fixture-area'>
            <div className='row'>
                <div className='col'>
                    <p className='fixture-header-font'>Fixtures</p>
                    <div className='fixture'>
                        <Fixtureleauge logo = {leaugelogo} leauge="Premier Leauge"/>
                        <Fixturebar homelogo={image1} awaylogo={image2} homeTeam = "Liverpool" awayTeam = "Manchester United" time = "18:00" />
                    </div>
                </div>
                <div className='col'>
                </div>
            </div>
        </div>
    );
}
