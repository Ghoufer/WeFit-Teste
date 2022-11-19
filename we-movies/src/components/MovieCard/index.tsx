import { useState } from 'react';
import { Button } from '@mui/material';

import useStyles from "./styles";
import AddItemIcon from 'icons/AddItemIcon';

type Props = {
    imgUrl: string,
    title: string,
    price: string
}

const MovieCard = ({imgUrl, title, price}: Props): JSX.Element => {
    
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img 
                alt={title}
                src={imgUrl}
                className={classes.img}
            />

            <span className={classes.title}>{title}</span>

            <span className={classes.price}>{price}</span>

            <Button 
                color='primary'
                variant='contained'
            >
                <AddItemIcon />

                <div className={classes.btnText}>
                    <span style={{ paddingLeft: 5, paddingRight: 10 }}>0</span>
                    <span style={{ fontWeight: 700 }}>Adicionar ao carrinho</span>
                </div>
            </Button>
        </div>
    )
}

export default MovieCard;