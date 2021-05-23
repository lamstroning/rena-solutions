import NewTaskHeader from './NewTaskHeader';
import NewTaskChoiceCheckList from './NewTaskChoiceCheckList';
import NewTaskCheckListContent from './NewTaskCheckListContent';


export default function NewTask() {
    return (
        <div className='page container'>
            <NewTaskHeader/>
            <div className='row row_offset-2 row_top'>
                <div className='col col_6'>
                    <NewTaskChoiceCheckList/>
                </div>
                <div className='col col_6'>
                    <NewTaskCheckListContent/>
                </div>
            </div>
        </div>
    );
}
