import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles";
import { Product } from 'helpers/types';
import AddItemIcon from 'icons/AddItemIcon';
import { addItem } from 'redux/actions/cartActions';

const MovieCard = ({id, image, title, price}: Product): JSX.Element => {
    
    const classes = useStyles()
    const dispatch = useDispatch()
    const cartState: any = useSelector((state) => state)
    
    const [numItems, setNumItems] = useState(0)

    useEffect(() => {
        
        const cardItem =
            cartState.find((item: any) => item.info.id === id)

        setNumItems(cardItem ? cardItem.numberOfItems : 0)
    }, [cartState])

    const handleAddItem = () => {

        const newItem: Product = {
            id,
            image,
            title,
            price
        }

        dispatch(addItem(newItem))
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
                color={numItems > 0 ? 'success' : 'primary'}
                variant='contained'
                onClick={() => handleAddItem()}
                sx={{
                    minWidth: '90%'
                }}
            >
                <AddItemIcon />

                <div className={classes.btnText}>
                    <span style={{ paddingLeft: 5, paddingRight: 10 }}>{numItems}</span>
                    <span style={{ fontWeight: 700 }}>
                        {numItems > 0
                            ? 'Item adicionado'
                            : 'Adicionar ao carrinho'
                        }
                    </span>
                </div>
            </Button>
        </div>
    )
}

export default MovieCard;