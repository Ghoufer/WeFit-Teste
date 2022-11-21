import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Divider } from '@mui/material';

import useStyles from './styles';
import CartTable from 'components/CartTable';

const Cart = (): JSX.Element => {

    const classes = useStyles()
    const navigate = useNavigate()
    const cartState: any = useSelector((state) => state)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {

        var allPrice: number = 0
        
        cartState.forEach((item: any) => {
            allPrice += item.info.price * item.numberOfItems
        })

        setTotalPrice(allPrice)
    }, [cartState])

    const handleGoToPage = (page: string) => {
        navigate(page)
    }

    return (
        <div className={classes.root}>
            {cartState.length > 0 ? (
                <div className={classes.table}>
                    
                    <CartTable />

                    <Divider sx={{ width: '100%', margin: 5, borderWidth: 1 }} />

                    <div className={classes.footer}>
                        <Button
                            color='primary'
                            variant='contained'
                            sx={{
                                minWidth: 240,
                                minHeight: 60,
                                backgroundColor: '#009EDD',
                                fontWeight: 700,
                                fontSize: 18
                            }}
                            onClick={() => handleGoToPage('/success')}
                        >
                            Finalizar Pedido
                        </Button>

                        <div>
                            <span style={{ fontWeight: 700, fontSize: 20, textAlign: 'left', textTransform: 'uppercase', color: '#999999', marginRight: 20 }}>
                                Total
                            </span>
                            <span style={{ color: '#2F2E41', fontWeight: 700, fontSize: 20 }}>
                                {totalPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={classes.nothingHere}>
                    <span className={classes.nothingHereText}>
                        {'Parece que não há nada por aqui :('}
                    </span>
                    
                    <img
                        src='images/nothingHere.png' 
                        alt='Nada aqui' 
                    />

                    <Button
                        color='primary'
                        variant='contained'
                        sx={{
                            minWidth: 240,
                            minHeight: 60,
                            backgroundColor: '#009EDD',
                            fontWeight: 700,
                            fontSize: 18
                        }}
                        onClick={() => handleGoToPage('/')}
                    >
                        Voltar
                    </Button>
                </div>
            )}
        </div>
    )
}

export default Cart;