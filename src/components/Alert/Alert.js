import clsx from 'clsx';
import {Button} from '@material-ui/core';

export default function Alert({open, status, children}) {
    if (!open)
        return (<></>);

    return (
        <Button className={clsx('button button_without-hover alert', `alert_${status}`)}>
            {children}
        </Button>
    )
}