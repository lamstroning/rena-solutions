import {Drawer, withStyles} from '@material-ui/core';

export const StyledDrawer = withStyles(theme =>({
    paper: {
        padding: 40,
        borderRight: `4px solid ${theme.palette.orange}`,
        backgroundColor: theme.palette.lightGrey
    }
}))(Drawer)