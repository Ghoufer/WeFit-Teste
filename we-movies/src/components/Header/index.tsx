import { Button } from '@mui/material';

import useStyles from './styles';
import CartIcon from 'icons/CartIcon';

const Header = (): JSX.Element => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <span style={{ fontWeight: 'bold' }} >
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
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className={classes.text}>Meu carrinho</span>
                    <span className={classes.subText}>0 itens</span>
                </div>
            </Button>
        </div>
    )
}

export default Header;