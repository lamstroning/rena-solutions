import {Button, TextField} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

export function TaskListFilter() {
    return (
        <>
            <div className='row row_offset-2 col'>
                <TextField
                    fullWidth
                    placeholder='Выбранный чек-лист'
                    className='input input_bg-white'
                    variant='outlined'
                    size='small'
                />
            </div>
            <div className='row row_offset-2'>
                <div className='col col_5'>
                    <TextField
                        fullWidth
                        placeholder='Фильтр по названию'
                        className='input input_bg-white'
                        variant='outlined'
                        size='small'
                    />
                </div>
                <div className='col'>
                    <Button
                        variant='contained'
                        color='primary'
                        className='button'
                    >
                        <FilterListIcon/>
                    </Button>
                </div>
                <div className='col col_6'>
                    <TextField
                        placeholder='Фильтр по оборудованию'
                        fullWidth
                        className='input input_bg-white'
                        variant='outlined'
                        size='small'
                    />
                </div>
                <div className='col'>
                    <Button
                        variant='contained'
                        color='primary'
                        className='button'
                    >
                        <FilterListIcon/>
                    </Button>
                </div>
            </div>
        </>
    );
}