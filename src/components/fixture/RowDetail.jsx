import './Fixture.css'

export default function RowDetail({name, position, shots, goals, assists, className}) {
    return (
        <div className={`row row-style ${className}`}>
            <div className='col row-detail-style'>{name}</div>
            <div className='col row-detail-style'>{position}</div>
            <div className='col row-detail-style'>{shots}</div>
            <div className='col row-detail-style'>{goals}</div>
            <div className='col row-detail-style'>{assists}</div>
        </div>
    );
}
