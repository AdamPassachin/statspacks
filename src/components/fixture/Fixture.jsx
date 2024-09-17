import './Fixture.css'
import Fixturebar from './Fixturebar';
import Fixtureleauge from './Fixtureleauge';
import leaugelogo from '/src/assets/leaugelogo.svg'
import image1 from '/src/assets/image1.svg'
import image2 from '/src/assets/image2.svg'
import { useState } from 'react';
import Fixturedetail from './Fixturedetail';


export default function Fixture(){
    const [selectedFixture, setSelectedFixture] = useState(null);

    const handleFixturebarClick = (fixture) => {
        setSelectedFixture(fixture);
    }
    
    return(
        <div className='fixture-area'>
            <div className='row'>
                <div className='col'>
                    <p className='fixture-header-font'>Fixtures</p>
                    <div className='fixture'>
                        <Fixtureleauge logo = {leaugelogo} leauge="Premier Leauge"/>
                        <Fixturebar 
                        homelogo={image1} 
                        awaylogo={image2} 
                        homeTeam = "Liverpool" 
                        awayTeam = "Manchester United" 
                        time = "18:00"
                        onClick ={handleFixturebarClick({homeTeam: "Liverpool", awayTeam: "Manchester United" })} />
                    </div>
                </div>
                <div className='col'>
                    {selectedFixture && <Fixturedetail fixture={selectedFixture} />}
                </div>
            </div>
        </div>
    );
}
