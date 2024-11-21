import HomeBanner from "../../Components/HomeBanner";
import banner1 from '../../assets/images/banner1.JPG';
import banner2 from '../../assets/images/banner2.JPG'
import newsLetterimg from '../../assets/images/coupon.png';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { FaArrowRight } from "react-icons/fa";
import React, { useState } from "react";
import Slider from "react-slick";
import { CiMail } from "react-icons/ci";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import HomeCat from "../../Components/HomeCat";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import ProductModal from "../../Components/ProductModal";


const Home = ()=>{
    var productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

      const [isOpenProductModal, setisOpenProductModal] =useState(false);


      const viewProductDetails=(id)=>{
        setisOpenProductModal(true);
      }

      const closeProductModal =()=>{
        setisOpenProductModal(false)
      }
      
    return(
        <>
        <HomeBanner/>

        <HomeCat/>

        <section className="homeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="banner">
                        <img src={banner1} 
                        className="cursor"/>
                        </div>
                    </div>
                    <div className="col-md-9 productRow">
                        <div className="d-flex align-items-center">
                            <div className="info w-75">
                                <h3 className="mb-0 hd">Best Sellers</h3>
                                <p className="text-dark text-sml mb-0" >Do not mis the current offers until the end of March.</p>
                            </div>
                            <Button className="viewAllBtn ml-auto" style={{borderRadius:'30px', border:'none', borderColor:'#ccc', color:'#000'
                                , backgroundColor:'#fff', padding:'8px 15px;'
                            }}>View All &nbsp; <FaArrowRight/></Button>
                        </div>

                        <div className="product_row w-100 mt-4">
                        <Slider {...productSliderOptions}>
                            <div className="item productItem" onClick={()=>viewProductDetails(1)}>
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                    className="w-100"/>

                                    <span className="badge badge-primary">28%</span>
                                    {/* <div className="actions">
                                        <Button><TfiFullscreen/></Button>
                                        <Button><IoMdHeartEmpty style={{fontSize:'20px'}}/></Button>
                                    </div> */}
                                </div>
                                
                                <div className="info">
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                <span className="text-sussess d-block">In Stock</span>
                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" 
                                precision={0.5}/>

                                <div className="d-flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                    className="w-100"/>
                                    <span className="badge badge-primary">28%</span>
                                </div>
                                
                                <div className="info">
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                <span className="text-sussess d-block">In Stock</span>
                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" 
                                precision={0.5}/>
                                <div className="d-flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                    className="w-100"/>
                                    <span className="badge badge-primary">28%</span>
                                </div>
                                
                                <div className="info">
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                <span className="text-sussess d-block">In Stock</span>
                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" 
                                precision={0.5}/>
                                <div className="d-flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                    className="w-100"/>
                                    <span className="badge badge-primary">28%</span>
                                </div>
                                
                                <div className="info">
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                <span className="text-sussess d-block">In Stock</span>
                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" 
                                precision={0.5}/>
                                <div className="d-flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                    className="w-100"/>
                                    <span className="badge badge-primary">28%</span>
                                </div>
                                
                                <div className="info">
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                <span className="text-sussess d-block">In Stock</span>
                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" 
                                precision={0.5}/>
                                <div className="d-flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                </div>
                                </div>
                            </div>
                        </Slider>
                        </div>
                    </div>
                    <br/>
                    <div className="col-md-3">
                        <div className="banner">
                        <img src={banner2} 
                        className="cursor"/>
                        </div>
                    </div>
                    <br/>
                    <div className="col-md-9 productRow">
                        <div className="d-flex align-items-center">
                            <div className="info w-75">
                                <br></br>
                                <h3 className="mb-0 hd">New Arrivals</h3>
                                <p className="text-dark text-sml mb-0" >Do not miss the current offers until the end of March.</p>
                            </div>
                            <br></br>
                            <Button className="viewAllBtn ml-auto" style={{borderRadius:'30px', border:'none', borderColor:'#ccc', color:'#000'
                                , backgroundColor:'#fff', padding:'8px 15px;'
                            }}>View All &nbsp; <FaArrowRight/></Button>
                        </div>

                        <div className="product_row w-100 mt-4">
                        <Slider {...productSliderOptions}>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                    className="w-100"/>

                                    <span className="badge badge-primary">28%</span>
                                    {/* <div className="actions">
                                        <Button><TfiFullscreen/></Button>
                                        <Button><IoMdHeartEmpty style={{fontSize:'20px'}}/></Button>
                                    </div> */}
                                </div>
                                
                                <div className="info">
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                <span className="text-sussess d-block">In Stock</span>
                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" 
                                precision={0.5}/>
                                <div className="d-flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                    className="w-100"/>
                                    <span className="badge badge-primary">28%</span>
                                </div>
                                
                                <div className="info">
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                <span className="text-sussess d-block">In Stock</span>
                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" 
                                precision={0.5}/>
                                <div className="d-flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                    className="w-100"/>
                                    <span className="badge badge-primary">28%</span>
                                </div>
                                
                                <div className="info">
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                <span className="text-sussess d-block">In Stock</span>
                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" 
                                precision={0.5}/>
                                <div className="d-flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                    className="w-100"/>
                                    <span className="badge badge-primary">28%</span>
                                </div>
                                
                                <div className="info">
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                <span className="text-sussess d-block">In Stock</span>
                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" 
                                precision={0.5}/>
                                <div className="d-flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
                                    className="w-100"/>
                                    <span className="badge badge-primary">28%</span>
                                </div>
                                
                                <div className="info">
                                <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                <span className="text-sussess d-block">In Stock</span>
                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" 
                                precision={0.5}/>
                                <div className="d-flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                </div>
                                </div>
                            </div>
                        </Slider>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
            <div className="container">
               <div className="row">
                <div className="col-md-6">
                  <p className="text-white mb-1">$20 discount for your first order</p>
                  <h3 className="text-white">Join our newsletter and get...</h3>
                  <p className="text-light" style={{fontWeight:'lighter'}} >Join our email subscription now to get updates 
                    <br></br>on promotions and coupons.</p>

                    <form>
                        <CiMail/>
                        <input type="text" placeholder="Your Email Address"/>
                        <Button>Subscribe</Button>
                    </form>

                </div>
                <div className="col-md-6">
                    <img src={newsLetterimg}/>
                </div>
                </div>                         
            </div>
        </section>

        {
            isOpenProductModal===true && <ProductModal closeProductModal = {closeProductModal} />
        }
        {/* <ProductModal/> */}

<section>
  <MDBFooter className='text-center text-lg-start text-muted' style={{ backgroundColor: 'transparent' }}>
    <section className='p-4 border-bottom'>
      {/* Other sections can be added here if needed */}
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon color='secondary' icon='gem' className='me-3' />
              Shopify
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </p>
            <div className='d-flex mt-3'style={{alignItems:'center'}}>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
              <a href='#' className='me-3 text-reset'>
                <FaFacebook size={20} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href='#' className='me-3 text-reset'>
                <FaTwitter size={20} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href='#' className='me-3 text-reset'>
                <FaGoogle size={20} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href='#' className='me-3 text-reset'>
                <FaInstagram size={20} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href='#' className='me-3 text-reset'>
                <FaLinkedin size={20} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href='#' className='text-reset'>
                <FaGithub size={20} />
              </a>
            </div>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <p><a href='#!' className='text-reset'>Angular</a></p>
            <p><a href='#!' className='text-reset'>React</a></p>
            <p><a href='#!' className='text-reset'>Vue</a></p>
            <p><a href='#!' className='text-reset'>Laravel</a></p>
          </MDBCol>

          <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p><a href='#!' className='text-reset'>Pricing</a></p>
            <p><a href='#!' className='text-reset'>Settings</a></p>
            <p><a href='#!' className='text-reset'>Orders</a></p>
            <p><a href='#!' className='text-reset'>Help</a></p>
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p><MDBIcon color='secondary' icon='home' className='me-2' />New York, NY 10012, US</p>
            <p><MDBIcon color='secondary' icon='envelope' className='me-3' />info@example.com</p>
            <p><MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88</p>
            <p><MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      © 2021 Copyright:
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        MDBootstrap.com
      </a>
    </div>
  </MDBFooter>
</section>

        

        
        </>
    )

}

export default Home;
