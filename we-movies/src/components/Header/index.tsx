import { Typography, Button } from '@mui/material';

import useStyles from './styles';
import CartIcon from 'icons/CartIcon';

const Header = (): JSX.Element => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography 
                variant='h5'
                sx={{ fontWeight: 'bold' }} 
            >
                    WeMovies
            </Typography>

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
                <div>
                    <Typography className={classes.text}>Meu carrinho</Typography>
                    <Typography className={classes.subText}>0 itens</Typography>
                </div>
            </Button>
        </div>
    )
}

export default Header;