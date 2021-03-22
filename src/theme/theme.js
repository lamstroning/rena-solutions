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
        },
        darkGreen: '#335251',
        orange: '#F29545'
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
        h1: {
            fontSize: 24
        },
        h2: {
            fontSize: 22
        },
        h5: {
            fontSize: 18
        },
        h6: {
            fontSize: 14
        }
    }
})