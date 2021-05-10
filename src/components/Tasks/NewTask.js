import NewTaskHeader from './NewTaskHeader';
import NewTaskChoiceCheckList from './NewTaskChoiceCheckList';
import NewTaskCheckListContent from './NewTaskCheckListContent';


export default function NewTask() {
    return (
        <div className='page container'>
            <NewTaskHeader/>
            <div className='area-border'>
                <div className='area-border__label'>Выбор чек-листа</div>
                <div className='container row row_top'>
                    <div className='col col_6'>
                        <NewTaskChoiceCheckList/>
                    </div>
                    <div className='col col_6'>
                        <NewTaskCheckListContent/>
                    </div>
                </div>
            </div>
        </div>
    );
}
