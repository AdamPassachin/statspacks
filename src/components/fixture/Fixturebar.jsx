import './Fixture.css'

export default function Fixturebar({time}){
    return(
        <>
            <div className='row'>
                <div className='col-2'>
                    <p className='fixture-font'>{time}</p>
                </div>
                <div className='col'>
                    <div class="vertical-line">
                    </div>
                </div>
            </div>
        </>
    );
}
