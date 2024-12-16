import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove_cart, update_cart } from '../redux-toolkit/slice/productSlice';
import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

const Cart = () => {

  const cartitem = useSelector((state) => state.product.cartItem)

  const totalQuantity = cartitem.reduce((total, item) => total + item.qty, 0)
  const totalAmount = cartitem.reduce((total, item) => total + item.price * item.qty, 0)

  const dispatch = useDispatch();

  const removeFromCart  = (itemId) => {
    dispatch(remove_cart(itemId))
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id)
      return
    }
    dispatch(update_cart({ id, qty: newQuantity }))
    console.log(newQuantity)
  }

  return (
    <section className="productSection product-bgnone">
      <div className="container">
          <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <h2 className="headerClass"><span>Cart</span></h2>
              </div>
          </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {cartitem.map((item) => (
              <Card key={item.id} sx={{ display: 'flex', marginBottom: 2 }}>
                <div className='cartItem'>
                  <div className='cartImg'>
                    <img src={item.image} />
                  </div>
                  <div className='cartContent'>
                    <h4>{item.title}</h4>
                    <h5>${item.price}</h5>
                    <Box sx={{ display: 'flex', alignItems: 'center' }} className='btn-grp'>
                      <IconButton
                        onClick={() => updateQuantity(item.id, item.qty - 1)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{item.qty}</Typography>
                      <IconButton
                        onClick={() => updateQuantity(item.id, item.qty + 1)}
                      >
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => removeFromCart(item.id)}
                        color='error'
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Box>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ padding: 2 }} className='totalQuantity'>
              <h4 className='subHeading'>Order Summary</h4>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Total Quantity:</Typography>
                <Typography>{totalQuantity}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography>Total Amount:</Typography>
                <Typography>${totalAmount.toFixed(2)}</Typography>
              </Box>
              <Button variant="contained" color="primary" fullWidth>
                Proceed to Checkout
              </Button>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default Cart