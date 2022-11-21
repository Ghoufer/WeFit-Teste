import { useEffect } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';
import { deleteAll } from 'redux/actions/cartActions';

const Success = (): JSX.Element => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(deleteAll())
    }, [])

    const handleGoToPage = (page: string) => {
        navigate(page)
    }

    return (
        <div className={classes.root}>
            <div className={classes.nothingHere}>
                <span className={classes.nothingHereText}>
                    {'Compra realizada com sucesso!'}
                </span>
                
                <img
                    src='images/success.png' 
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
        </div>
    )
}

export default Success;