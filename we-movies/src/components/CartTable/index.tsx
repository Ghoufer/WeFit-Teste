import { useState, useEffect } from 'react';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from "react-redux";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import useStyles from "./styles";
import { Product } from 'helpers/types';
import { addItem, deleteItem, removeItem } from 'redux/actions/cartActions';

const CartTable = (): JSX.Element => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const cartState: any = useSelector((state) => state)

    const [items, setItems] = useState(cartState)

    useEffect(() => {
        setItems(cartState)
    }, [cartState])

    const handleAddQuantity = ({id, image, title, price}: Product) => {

        const newItem: Product = {
            id,
            image,
            title,
            price
        }

        dispatch(addItem(newItem))
    }
    
    const handleRemoveQuantity = (id: string) => {
        dispatch(removeItem(id))
    }

    const handleDeleteItem = (id: string) => {
        dispatch(deleteItem(id))
    }

    return (
        <table className={classes.root}>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>QTD</th>
                    <th>SubTotal</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {items.map((item: any) => {

                    const itemPrice = (parseFloat(item.info.price) * item.numberOfItems)

                    return (
                        <tr key={item.info.id}>
                            <td className={classes.itemInfo}>
                                
                                <img src={item.info.image} alt={item.info.title} />
                                
                                <div className={classes.titlePrice}>
                                    <span className={classes.titleTxt}>{item.info.title}</span>
                                    <span className={classes.priceTxt}>{item.info.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
                                </div>
                            </td>

                            <td>
                                <div className={classes.numItems}>
                                    <IconButton disabled={item.numberOfItems === 1} onClick={() => handleRemoveQuantity(item.info.id)}>
                                        {item.numberOfItems === 1 ? (
                                            <RemoveCircleOutlineIcon />
                                        ) : (
                                            <RemoveCircleOutlineIcon color='primary' />
                                        )}
                                    </IconButton>

                                    <div className={classes.quantity}>
                                        {item.numberOfItems}
                                    </div>
                                    
                                    <IconButton onClick={
                                        () => handleAddQuantity({id: item.info.id, image: item.info.image, title: item.info.title, price: item.info.price})}>
                                        <AddCircleOutlineIcon color='primary' />
                                    </IconButton>
                                </div>
                            </td>

                            <td>
                                <span style={{ color: '#2F2E41', fontWeight: 700, fontSize: 20 }}>
                                    {itemPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                                </span>
                            </td>

                            <td style={{ textAlign: 'right' }}>
                                <IconButton onClick={() => handleDeleteItem(item.info.id)}>
                                    <DeleteIcon fontSize='large' color='primary' />
                                </IconButton>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default CartTable;