import { useState } from 'react';
import { Button } from '@mui/material';

import useStyles from "./styles";
import AddItemIcon from 'icons/AddItemIcon';
import { Product } from 'helpers/types';


const MovieCard = ({id, image, title, price}: Product): JSX.Element => {
    
    const classes = useStyles()

    return (
        <div key={id} className={classes.root}>
            <img 
                alt={title}
                src={image}
                className={classes.img}
            />

            <span className={classes.title}>{title}</span>

            <span className={classes.price}>
                {price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
            </span>

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