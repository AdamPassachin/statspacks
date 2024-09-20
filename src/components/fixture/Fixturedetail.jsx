import './Fixture.css'
import AttackingStatpack from './AttackingStatpack';
import DefensiveStatpack from './DefensiveStatpack';
import ReturnButton from './ReturnButton';

export default function Fixturedetail({fixture, homelogo, awaylogo}){
    // make api call to get all players stats, home + away team
    const homePlayers = [
        { name: 'M. Salah', position: 'RW', shots: 5, goals: 10, assists: 1 },
        { name: 'C. Gapko', position: 'LW', shots: 3, goals: 1, assists: 2 },
        { name: 'A. McAllister', position: 'CM', shots: 1, goals: 2, assists: 1 },
        { name: 'T.A Arnold', position: 'RB', shots: 1, goals: 3, assists: 1 },
        { name: 'Diogo Jota', position: 'ST', shots: 1, goals: 1, assists: 1 }
        // Add more player objects here, will be changed with API call
    ];

    const awayPlayers = [
        { name: 'M. Rashford', position: 'LW', shots: 5, goals: 10, assists: 1 },
        { name: 'M. Mount', position: 'CM', shots: 3, goals: 1, assists: 2 },
        { name: 'R. Hojlund', position: 'ST', shots: 1, goals: 2, assists: 1 },
        { name: 'A. Diallo', position: 'RW', shots: 1, goals: 3, assists: 1 },
        { name: 'B. Fernandes', position: 'CAM', shots: 1, goals: 1, assists: 1 }
        // Add more player objects here, will be changed with API call
    ];

    return(
        <>
            <div className='game-header row'>
                {/* renders the header bar with the two teams (name+logo) sent as props */}
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
                    {/* TO-DO: add functionality to go back to fixtures */}
                    <div className='return-button-container'>
                        <ReturnButton />
                    </div>
                    {/* Make API call and render hometeam attack statpack with all data as props */}
                    <h1 className='fixture-font' style={{color: 'white', textAlign:'left'}}>PLAYER ATTACKING STATPACK</h1>
                    <AttackingStatpack players = {homePlayers} />
                </div>
                <div className='col'>
                    <h1 className='fixture-font' style={{visibility: 'hidden'}}>Invisible Header</h1>
                    <h1 className='fixture-font' style={{visibility: 'hidden'}}>Invisible Header</h1>
                    <h1 className='fixture-font' style={{visibility: 'hidden'}}>Invisible Header</h1>
                    {/* Make API call and render awayteam attack statpack with all data as props */}
                    <AttackingStatpack players = {awayPlayers} />
                </div>
            </div>
            <div className='row'>
                {/* TO-DO: add defensive statpacks */}
            </div>
        </>
    );
}
