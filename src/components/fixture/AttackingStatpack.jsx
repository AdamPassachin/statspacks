import './Fixture.css'
import ColumnDetail from './ColumnDetail';
import RowDetail from './RowDetail';


export default function AttackingStatpack({players}){

    return(
        <>
            {/* create a row and render multiple columns with different header names */}
            <div className='row col-table-style'>
                <ColumnDetail header = "Player" />
                <ColumnDetail header = "Position" />
                <ColumnDetail header = "Shots" />
                <ColumnDetail header = "Goals" />
                <ColumnDetail header = "Assists" />
            </div>

            {/* loop through each player and create rows + columns with props */}
            {players.map((player,index) => (
                <RowDetail
                    key={index}
                    name={player.name}
                    position={player.position}
                    shots={player.shots}
                    goals={player.goals}
                    assists={player.assists}
                    className={index == players.length - 1 ? 'last-row': ''}
                />
            
            ))}
        </>
    );
}
