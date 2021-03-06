import {Box, IconButton, Typography} from "@material-ui/core";
import React from "react";
import {theme} from "../theme/theme";

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export default function CheckList() {
    return (
        <Box
            mx='auto'
            bgcolor='white'
            width={1}
            maxWidth={theme.size.appWidth}
            p={4}
            height={1}
        >
            <IconButton color='primary' href='/tasks'>
                <KeyboardBackspaceIcon/>
            </IconButton>
            <Typography variant='h1' align='center'>
                Чек-листы
            </Typography>
            <Typography align='right' color='primary'>
                Черновик
            </Typography>
            <Box mt={2} p={4}>
                <Typography variant='h2' align='center'>
                    выполняемые работы
                </Typography>
            </Box>
        </Box>
    );
}
