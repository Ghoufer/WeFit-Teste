import { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';

import useStyles from './styles';
import useAxios from 'helpers/useAxios';
import MovieCard from 'components/MovieCard';

const Home = (): JSX.Element => {

    const classes = useStyles()

    const [products, setProducts] = useState(null)
    const [result, isError, isLoading] = useAxios({ url: '/products', method: 'GET' })

    useEffect(() => {
        if(result) console.log(result)
    }, [result])

    return (
        <>
            {isLoading ? (
                <CircularProgress sx={{ color: '#FFF' }} size={64} />
            ) : (
                <div className={classes.root}>
                    <MovieCard 
                        title={'God of War Ragnarock'} 
                        price={'R$300,00'} 
                        imgUrl={'https://m.media-amazon.com/images/I/81UzPcO7PiL._AC_SX466_.jpg'} 
                    />
                    <MovieCard 
                        title={'God of War Ragnarock'} 
                        price={'R$300,00'} 
                        imgUrl={'https://m.media-amazon.com/images/I/81UzPcO7PiL._AC_SX466_.jpg'} 
                    />
                    <MovieCard 
                        title={'God of War Ragnarock'} 
                        price={'R$300,00'} 
                        imgUrl={'https://m.media-amazon.com/images/I/81UzPcO7PiL._AC_SX466_.jpg'} 
                    />
                    <MovieCard 
                        title={'God of War Ragnarock'} 
                        price={'R$300,00'} 
                        imgUrl={'https://m.media-amazon.com/images/I/81UzPcO7PiL._AC_SX466_.jpg'} 
                    />
                    <MovieCard 
                        title={'God of War Ragnarock'} 
                        price={'R$300,00'} 
                        imgUrl={'https://m.media-amazon.com/images/I/81UzPcO7PiL._AC_SX466_.jpg'} 
                    />
                </div>
            )}
        </>
    )
}

export default Home;