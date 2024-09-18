import './Fixture.css'
import ColumnDetail from './ColumnDetail';

export default function AttackingStatpack(){
    return(
        <>
            <div className='row statpack-table-style'>
                <ColumnDetail header = "Player" />
                <ColumnDetail header = "Position" />
                <ColumnDetail header = "Shots" />
                <ColumnDetail header = "Goals" />
                <ColumnDetail header = "Assists" />
            </div>
        </>
    );
}
