import {deepOrange} from '@material-ui/core/colors';
import {teal} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: teal[500]
        },
        secondary: {
            main: deepOrange[900]
        }
    },
    size: {
        appWidth: 1024
    },
    typography: {
        subtitle1: {
            fontSize: 24
        },
        subtitle2: {
            fontSize: 12
        },
        h5: {
            fontSize: 18
        },
        h6: {
            fontSize: 14
        }
    }
})