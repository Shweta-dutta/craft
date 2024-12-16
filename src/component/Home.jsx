import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className="main">
			<section className="bannerSection"> 
				<div className="bannerSlider">
					<div className="item">
						<img src="images/slide1.jpg" alt="slide1" />
						<div className="bannerContent">
							<div className="container">
								<div className="row">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<h2>Gifts of Nature </h2>
										<img src="images/Banner-Products-img.png" alt="Banner-Products-img.png" className="bannerproduct" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="aboutSection">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12 col-12">
							<h1 className="headerClass">About <span>Us</span></h1>
							<p>Local artisans, globally. "Handicraft" from EcoWorldCraft, means exactly what the word does. Hand-designed and produced locally, a platform where ecologically sustainable local products create the magic they were meant to. Local artists, local designs - their art, their production and their products. Centuries of art, sustainable production, tradition and a touch of modernity. This is by the craftsmen, for the people. For the environment, by the people. Of the people, and of the local craftsmen.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-12 col-12">
							<div className="aboutContent">
								<span className="aboutIcon"><img src="images/aboutIcon1.png" alt="aboutIcon1" /></span>
								<h4>Biodegradable </h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 col-12">
							<div className="aboutContent">
								<span className="aboutIcon"><img src="images/aboutIcon5.png" alt="aboutIcon2" /></span>
								<h4>Carbon footprints </h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 col-12">
							<div className="aboutContent">
								<span className="aboutIcon"><img src="images/aboutIcon6.png" alt="aboutIcon3" /></span>
								<h4>Natural fibres </h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 col-12">
							<div className="aboutContent">
								<span className="aboutIcon"><img src="images/aboutIcon4.png" alt="aboutIcon4" /></span>
								<h4>Deforestation free </h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="featureSection">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-sm-12 col-12">
							<div className="featureBox featureBox1">
								<a href="home-lifestyle.html">
									<img src="images/productbg1.png" alt="productbg1" className="bgimg" />
									<div className="layer1"></div>
									<h3>Home & <span>Lifestyle</span></h3>
									<img src="images/productImg20.png" alt="jute box" className="featureImgOne" />
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-12">
							<div className="featureBox featureBox2">
								<a href="#">
									<img src="images/productbg2.png" alt="productbg2"  className="bgimg" />
									<div className="layer1"></div>
									<h3>Packaging</h3>
									<img src="images/productImg21.png" alt="Box" className="featureImgTwo" />
								</a>
							</div>
							<div className="featureBox featureBox3">
								<a href="#">
									<img src="images/productbg3.png" alt="productbg3"  className="bgimg" />
									<div className="layer1"></div>
									<h3>Gift <span>Expressions </span></h3>
									<img src="images/productImg22.png" alt="bird-box" className="featureImgThree" />
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 col-12">
							<div className="featureBox featureBox4">
								<a href="#">
									<img src="images/productbg4.png" alt="productbg4" className="bgimg" />
									<div className="layer1"></div>
									<h3>Bags & <span>Accessories</span></h3>
									<img src="images/productImg23.png" alt="Bag" className="featureImgFour" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
            <section className="productSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <h2 className="headerClass">Our <span>Products</span></h2>
                            <div className="productSlider">
                                <div className="item">
                                    <div className="productInfo">
                                        <div className="productImg">
                                            <img src="images/productImg5.png" alt="productImg" />
                                        </div>
                                        <div className="productContent">
                                            <h5>Golden Grass Pen Stand</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="productInfo">
                                        <div className="productImg">
                                            <img src="images/productImg6.png" alt="productImg" />
                                        </div>
                                        <div className="productContent">
                                            <h5>Sabai Grass & Palm Leaf Coasters with Box</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="productInfo">
                                        <div className="productImg">
                                            <img src="images/productImg7.png" alt="productImg" />
                                        </div>
                                        <div className="productContent">
                                            <h5>Water Hyacinth Gift Trays</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="productInfo">
                                        <div className="productImg">
                                            <img src="images/productImg8.png" alt="productImg" />
                                        </div>
                                        <div className="productContent">
                                            <h5>Water Hyacinth Gift Trays</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='btnOuter'>
                                <Button component={Link} to='/products' className="view">View Products</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="naturesection">
                <div className="container">
                    <div className="row">						
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="personalizeSlider">
                                <div className="item">
                                    <img src="images/Packaging.png" alt="Packaging" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blogSection">
                <img src="images/nature.png" className="nature" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <h2 className="headerClass">Latest <span>Blogs</span></h2>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="natureSlider">
                                <div className="item">
                                    <div className="natureInner">
                                        <img src="images/socialbg.png" alt="socialbg" />
                                        <div className="layer1"></div>
                                        <h4>Social <span>Impact</span></h4>
                                    </div>
                                    <div className="natureContent">
                                        <p> From an environmental standpoint using recycled goods save raw materials reduces the consumption of energy, water and results in lesser air pollution.
                                        It reduces air pollution and water pollution by reducing the need for “conventional” waste disposal.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="natureSlider">
                                <div className="item">
                                    <div className="natureInner">
                                        <img src="images/naturebg.png" alt="naturebg" />
                                        <div className="layer1"></div>
                                        <h4>We care for <span>nature</span></h4>
                                    </div>									
                                    <div className="natureContent">
                                        <p> From an environmental standpoint using recycled goods save raw materials reduces the consumption of energy, water and results in lesser air pollution.
                                        It reduces air pollution and water pollution by reducing the need for “conventional” waste disposal.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="images/leaf.png" className="leaf" />
                <img src="images/waterdrop.png" className="waterdrop" />
            </section>
            <section className="iconSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <ul>
                                <li>
                                    <img src="images/deliveryIcon.png" alt="deliveryIcon" />
                                    <h4>Bulk Order</h4>
                                </li>
                                <li>
                                    <img src="images/partnerIcon.png" alt="partnerIcon" />
                                    <h4>Partner with Us</h4>
                                </li>
                                <li>
                                    <img src="images/locatorIcon.png" alt="locatorIcon" />
                                    <h4>Partner Locators</h4>
                                </li>
                                <li>
                                    <img src="images/deliveryIcon1.png" alt="deliveryIcon1" />
                                    <h4>Delivery Information</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
       
  )
}

export default Home