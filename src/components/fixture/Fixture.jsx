import './Fixture.css'
import Fixturebar from './Fixturebar';
import Fixtureleauge from './Fixtureleauge';
import leaugelogo from '/src/assets/leaugelogo.svg'
import image1 from '/src/assets/image1.svg'
import image2 from '/src/assets/image2.svg'
import { useState } from 'react';
import Fixturedetail from './Fixturedetail';


export default function Fixture(){

    // set states for fixture pressed on and if pressed wether the fixtures should be visible or not
    const [selectedFixture, setSelectedFixture] = useState(null);
    const [isVisible, setIsVisible] = useState(true);

    // function that sets the fixture pressed and sets the visibility of fixtures
    const handleFixturebarClick = (fixture) => {
        setSelectedFixture(fixture);
        setIsVisible(false);
    }
    
    return(
        // render the fixture area which shows the fixtures
        <div className='fixture-area'>
            {isVisible && (
            <div className='row'>
                    <div className='col'>
                        <p className='fixture-header-font'>Fixtures</p>
                            <div className='fixture'>
                                {/* render the fixture leauge currently only PL, and each fixture. Added the onClick*/}
                                <Fixtureleauge logo = {leaugelogo} leauge="Premier League"/>
                                <Fixturebar 
                                homelogo={image1} 
                                awaylogo={image2} 
                                homeTeam = "Liverpool" 
                                awayTeam = "Manchester United" 
                                time = "18:00"
                                onClick ={() => handleFixturebarClick({homeTeam: "Liverpool", awayTeam: "Manchester United" })} />
                            </div>
                    </div>
                <div className='col'>
                    {/* TO-DO: add right side content? */}
                </div>
            </div>
            )}
            {/* Conditional if a fixture is pressed we show the fixturedetail component otherwise not shown */}
            {selectedFixture && <Fixturedetail fixture={selectedFixture} homelogo={image1} awaylogo={image2}  />}
        </div>
    );
}
