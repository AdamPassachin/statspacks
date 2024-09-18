import './Fixture.css'
import AttackingStatpack from './AttackingStatpack';
import DefensiveStatpack from './DefensiveStatpack';

export default function Fixturedetail({fixture, homelogo, awaylogo}){
    return(
        <>
            <div className='game-header row'>
                <div className='col'>
                    <img src={homelogo} alt='homelogo' className='team-logo-detail' /> 
                    {fixture.homeTeam}
                </div>
                <div className='col'>
                    <img src={awaylogo} alt='awaylogo' className='team-logo-detail' /> 
                    {fixture.awayTeam}
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    {/* add button to go back */}
                    <h1 className='fixture-font' style={{color: 'white', textAlign:'left'}}>PLAYER ATTACKING STATPACK</h1>
                    <AttackingStatpack />
                </div>
                <div className='col'>
                    <AttackingStatpack />
                </div>
            </div>
            <div className='row'>
                {/* add defensive statpack r*/}
            </div>
        </>
    );
}
