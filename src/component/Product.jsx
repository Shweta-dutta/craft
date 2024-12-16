import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, MenuItem, Rating, Select, Slider, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { add_to_cart } from '../redux-toolkit/slice/productSlice';
import { useGetProducts } from '../hooks/react-query/product.query';
import { filterlist } from '../redux-toolkit/slice/filterSlice';
import { searchList } from '../redux-toolkit/slice/searchSlice'



const Product = () => {

    const {data,error,loading} = useGetProducts()
    console.log(data);
    if(loading)return<div>Loading</div>
    if(error)return<div>Error</div>

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { searchInput } = useSelector((state) => state.search);

    const addToCart = (item) => {
        dispatch(add_to_cart(item))
    }
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOption, setSortOption] = useState(''); 

    const filteredProducts = useMemo(() => {
        if (!data) return [];
        let products = data;
    
        // Filter by price range
        if (minPrice) products = products.filter((item) => item.price >= Number(minPrice));
        if (maxPrice) products = products.filter((item) => item.price <= Number(maxPrice));
    
        // Filter by search input
        if (searchInput) {
          products = products.filter((item) =>
            item.title.toLowerCase().includes(searchInput.toLowerCase())
          );
        }
    
        // Sort products
        if (sortOption === 'price-asc') {
          products = products.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
          products = products.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'name-asc') {
          products = products.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOption === 'name-desc') {
          products = products.sort((a, b) => b.title.localeCompare(a.title));
        }
    
        return products;
      }, [data, minPrice, maxPrice, searchInput, sortOption]);
    
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error loading products</div>;
    

  return (
    <>
         <section className="productSection product-bgnone">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <h2 className="headerClass">Our <span>Products</span></h2>
                        </div>
                    </div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={2}>
                    <div className='propertyBox'>
                        <h4 className='subHeading'>Search Product</h4>
                        <input type='search' placeholder='Seach Here' onChange={(e) => dispatch(searchList(e.target.value))}/>
                    </div>
                        <div className='propertyBox'>
                            <h4 className='subHeading'>Filter by Price</h4>
                            <div className='input-grp'>
                                <input
                                        type="search"
                                        placeholder="Min Price"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)}
                                        style={{ marginRight: '10px' }}
                                    />
                                <input
                                        type="search"
                                        placeholder="Max Price"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                />
                           </div>
                        </div>
                        {/* <div className='propertyBox'>
                            <h4 className='subHeading'>Filter by Rating</h4>
                            <Rating
                                value={filters.rating}
                                onChange={handleRatingChange}
                                precision={0.5}
                                sx={{ mb: 4 }}
                            />
                        </div> */}
                        <div className='propertyBox'>
                            <h4 className='subHeading'>Sort Products</h4>
                            <Select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                                displayEmpty
                                fullWidth
                                sx={{ mb: 4 }}
                            >
                                <MenuItem value="" disabled>
                                    Select Sorting
                                </MenuItem>
                                <MenuItem value="price-asc">Price: Low to High</MenuItem>
                                <MenuItem value="price-desc">Price: High to Low</MenuItem>
                                <MenuItem value="name-asc">Name: A to Z</MenuItem>
                                <MenuItem value="name-desc">Name: Z to A</MenuItem>
                            </Select>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <Box sx={{ p: 2}}>
                            <div className='productOuter'>
                                {
                                    data &&
                                    filteredProducts.map((item) => {
                                        return(
                                            <div className='productDiv'>
                                                <img src={item.image} />
                                                <div className='productInfo'>
                                                    <Typography component={Link} to={`/details/${item.id}`} className="productTitle"  variant="h3" >{item.title}</Typography>
                                                    <h4>Price {item.price}</h4>
                                                    <p>{item.description.slice(0, 50) + '...'}</p>
                                                    <button onClick={() => {
                                                    addToCart(item), navigate('/cart')
                                                    }} className='cartBtn' >Add To Cart</button>
                                                </div>
                                            </div>
                                        )

                                    })
                                }
                            </div>
                        </Box>
                    </Grid>
                </Grid> 
            </div>
        </section>
    </>
  )
}

export default Product