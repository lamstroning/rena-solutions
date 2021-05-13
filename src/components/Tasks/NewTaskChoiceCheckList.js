import {Button, Table, TableBody, TableCell, TableHead, TableRow, TextField} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import HeadCell from '../Table/HeadCell';

const rows = [
    {
        name: 'Ремонт двигателя',
        equipment: 'PlazMax CNC-2060'
    },
    {
        name: 'Ремонт двигателя',
        equipment: 'PlazMax CNC-2060'
    },
    {
        name: 'Ремонт двигателя',
        equipment: 'PlazMax CNC-2060'
    },
    {
        name: 'Ремонт двигателя',
        equipment: 'PlazMax CNC-2060'
    },
    {
        name: 'Ремонт двигателя',
        equipment: 'PlazMax CNC-2060'
    },
    {
        name: 'Ремонт двигателя',
        equipment: 'PlazMax CNC-2060'
    },
    {
        name: 'Ремонт двигателя',
        equipment: 'PlazMax CNC-2060'
    }
]

export default function NewTaskChoiceCheckList() {
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
            <div className='row row_offset-2 col'>
                <div className='card card_rounded'>
                    <Table className='table'>
                        <TableHead className='table__head'>
                            <TableRow>
                                <HeadCell sorted>
                                    Название
                                </HeadCell>
                                <HeadCell sorted>
                                    Оборудование
                                </HeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(({equipment, name}) =>
                                <TableRow>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>{equipment}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
}