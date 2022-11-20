import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';

import useStyles from './styles';
import MovieCard from 'components/MovieCard';
import fetchData from 'helpers/fetchData';
import { Product } from 'helpers/types';

const Home = (): JSX.Element => {

    const classes = useStyles()

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<Product[] | null>(null)

    useEffect(() => {

        setLoading(true)

        fetchData('products')
        .then((result) => {
            setProducts(result as Product[])
        })
        .finally(() => setLoading(false))
    }, [])

    return (
        <>
            {loading ? (
                <div className={classes.loading}>
                    <CircularProgress sx={{ color: '#FFF' }} size={64} />
                </div>
            ) : (
                <div className={classes.root}>
                    {products ? (
                        <>
                            {products.map((product) => {
                                return (
                                    <React.Fragment key={product.id}>
                                        <MovieCard 
                                            id={product.id}
                                            title={product.title}
                                            price={product.price}
                                            image={product.image}
                                        />
                                    </React.Fragment>
                                )
                            })}
                        </>
                        // products.map((product))
                    ) : (
                        <div className={classes.loading}>
                            <span style={{ fontSize: 18 }}>Nenhum produto encontrado</span>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default Home;