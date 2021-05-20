import {Button} from '@material-ui/core';
import {Input} from '../common/Inputs';

export default function Reports() {
    return (
        <div className='page container'>
            <div className='row row_end row_offset-4'>
                <Button
                    variant='contained'
                    color='primary'
                    className='button'
                >
                    Построить отчёт
                </Button>
            </div>
            <div className='card card_rounded row row_top row_offset-4'>
                <div className='col col_6'>
                    <div className='row row_offset-2'>
                        <div className='col col_12'>
                            <Input label='Введите название оборудования'/>
                        </div>
                    </div>
                    <div className='row row_offset-2'>
                        <div className='col col_12'>
                            <Input label='Введите шифр оборудования'/>
                        </div>
                    </div>
                    <div className='row row_offset-2'>
                        <div className='col col_12'>
                            <Input label='Исполнитель'/>
                        </div>
                    </div>
                    <div className='row row_offset-2'>
                        <div className='col col_6'>
                            <Input label='от'/>
                        </div>
                        <div className='col col_6'>
                            <Input label='до'/>
                        </div>
                    </div>
                </div>
                <div className='col col_6'>
                    <div className='row row_offset-2'>
                        <div className='col col_12'>
                            <Input label='Введите чек-лист'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}