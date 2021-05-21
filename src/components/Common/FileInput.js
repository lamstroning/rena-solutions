import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

export default function FileInput({file}) {
    if (file)
        return (
            <div className='file-load'>
                <img className='image image_rounded' src={file} alt=''/>
            </div>
        );
    return (
        <div className='file-load'>
            <PhotoCameraIcon className='file-load__image'/>
            <div className='file-load__label'>
                Загрузить фото
            </div>
        </div>
    );
}