import {Box, Typography} from '@material-ui/core';

export default function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}