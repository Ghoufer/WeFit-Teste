import React from 'react';
import { Typography } from '@mui/material';

import useStyles from './styles';

const Header = (): JSX.Element => {

    const classes = useStyles()

    return (
        <div className={classes.root}>

            <Typography 
                sx={{ fontWeight: 'bold' }} 
                variant='h5'
            >
                    WeMovies
            </Typography>


            <span>Header</span>
        </div>
    )
}

export default Header;