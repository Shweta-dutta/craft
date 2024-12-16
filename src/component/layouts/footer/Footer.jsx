import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-6 col-12">
                <div className="ft-menuOuter">
                  <h5>Menu Links</h5>
                  <ul className="ft-menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/product'>Product</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="ft-menuOuter">
                  <h5>Contact Info</h5>
                  <ul>
                    <li><span>Ecoworldcraft</span> P37, 114A, Lake Gardens, CIT Scheme 47, Jodhpur Gardens, Lake Gardens, Kolkata, West Bengal 700045</li>
                    <li><a href="tel:033 4072 6112">033 4072 6112</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="ft-menuOuter">
                  <h5>Follow Us</h5>
                  <ul className="ft-social">
                    <li><a href="#"><img src="images/facebook.png" alt="facebook" /></a></li>
                    <li><a href="#"><img src="images/twitter.png" alt="twitter" /></a></li>
                    <li><a href="#"><img src="images/google-plus.png" alt="google-plus"/></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyRight">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <p>&copy; 2024 Eco World Craft <span>Privacy Policy</span> </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer