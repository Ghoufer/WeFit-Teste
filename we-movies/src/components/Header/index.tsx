import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import useStyles from './styles';
import CartIcon from 'icons/CartIcon';

const Header = (): JSX.Element => {

    const classes = useStyles()
    const navigate = useNavigate()
    const cartState: any = useSelector((state) => state)

    const [numItems, setNumItems] = useState(0)

    useEffect(() => {
        
        var newValue = 0

        if(cartState.length > 0) {
            cartState.forEach((item: any) => {
                newValue += item.numberOfItems
            });
        }

        setNumItems(newValue)
    }, [cartState])

    const handleGoToPage = (page: string) => {
        navigate(page)
    }

    return (
        <div className={classes.root}>
            <span
                className={classes.homeBtn}
                onClick={() => handleGoToPage('/')}
            >
                WeMovies
            </span>

            <Button 
                disableRipple 
                className={classes.content} 
                endIcon={<CartIcon />}
                sx={{
                    ml: 1,
                    "&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent"
                    },
                    color: '#FFf'
                }}
                onClick={() => handleGoToPage('/cart')}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className={classes.text}>Meu carrinho</span>
                    <span className={classes.subText}>{numItems} itens</span>
                </div>
            </Button>
        </div>
    )
}

export default Header;