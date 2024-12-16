import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import { useGetProductById } from '../hooks/react-query/product.query';
import { add_to_cart } from '../redux-toolkit/slice/productSlice';

const SingleProduct = () => {
    const { id } = useParams(); 
    const { data, error, isLoading } = useGetProductById(id);

    console.log(data);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading product details.</div>;

    const addToCart = (item) => {
        dispatch(add_to_cart(item))
    }

    return (
        <section className="productSection product-bgnone">
            <Container>
                <div className='productDiv productDetails'>
                    <img
                        src={data?.image}
                        alt={data?.title}
                        style={{ maxWidth: '300px', marginBottom: '20px' }}
                    />
                    <h3 className='productTitle'>{data?.title}</h3>
                    <p>{data?.description}</p>
                    <h4>Price: ${data?.price}</h4>
                    {/* <button onClick={() => {
                    addToCart(item), navigate('/cart')
                    }} className='cartBtn' >Add To Cart</button> */}
                </div>
            </Container>
        </section>
    );
};

export default SingleProduct;