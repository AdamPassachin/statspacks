import './Fixture.css';

export default function Fixturebar({ time, homelogo, awaylogo, homeTeam, awayTeam}) {
  return (
    <>
      <div className='row'>
        <div className='col-auto'>
          <p className='fixture-font'>{time}</p>
        </div>
        <div className='col-auto'>
          <div className="vertical-line"></div>
        </div>
        <div className='col-auto team-img'>
          <img src={homelogo} alt='homelogo' className='team-logo' /> 
          <img src={awaylogo} alt='awaylogo' className='team-logo' /> 
        </div>
        <div className='col-auto team-names'>
            <div><p className='team-font'>{homeTeam}</p> </div>
            <div><p className='team-font'>{awayTeam}</p> </div>
        </div>
      </div>
    </>
  );
}
