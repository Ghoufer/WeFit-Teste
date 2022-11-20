import { useState } from 'react';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles";
import { Product } from 'helpers/types';
import AddItemIcon from 'icons/AddItemIcon';
import { addItem } from 'redux/actions/cartActions';

const MovieCard = ({id, image, title, price}: Product): JSX.Element => {
    
    const classes = useStyles()
    const dispatch = useDispatch()
    const cartState = useSelector((state) => state)

    console.log(cartState)

    const handleAddItem = () => {
        dispatch(addItem(id))
    }

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
                onClick={() => handleAddItem()}
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