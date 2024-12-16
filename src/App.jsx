import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './component/Product'
import Cart from './component/Cart'
import Root from './component/layouts/root/Root'
import Home from './component/Home'
import SingleProduct from './component/SingleProduct'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Root />,
      children: [
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/products',
          element:<Product />
        },
        {
          path:'/cart',
          element:<Cart />
        },
        {
          path:'/details/:id',
          element:<SingleProduct />
        }
      ]
    }
  ])

  return (
   <>
      <RouterProvider router={router} />
   </>
  )
}

export default App
