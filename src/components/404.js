import Header from './common/Header';

export default function NotFound() {
    return <div>
        <Header
            backArrow
            title='Ошибка 404'
        >
        </Header>
        <div className='row row_offset-4 row_center'>
            <a href='/'>Вернутся на главную</a>
        </div>
    </div>
}