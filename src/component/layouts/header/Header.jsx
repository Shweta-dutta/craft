import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="logoContainer">
                  <Link to='/'><img src="images/logo.png" alt="logo" /></Link>
                </div>
              </div>
              <div className="col-xl-10 col-lg-9 col-md-8 col-sm-6 col-6">
                <div className="navMenu">
                  <ul className="menuList">
                    <li><Button component={Link} to='/'>Home</Button></li>
                    <li><Button component={Link} to='/products'>Products</Button></li>
                    <li><Button component={Link} to='/cart'>Cart</Button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </header>
    </>
  )
}
