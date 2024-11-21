
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import { IoMdClose } from "react-icons/io";
// import Rating from '@mui/material/Rating';
// const ProductModal = ( props)=>{

//     return (
//     <>
//     <Dialog open={true} className='productModal' onClose={()=>props.closeProductModal()}>
                
//                 {/* <Button className="close_" onClick={()=>props.closeProductModal()} ><IoMdClose /></Button> */}
//                 <h4 className='mb-2'>All Natural Italian-Style Chicken Meatballs</h4>
//                 <div className="d-flex align-items-center mr-4">
//                     <span>Brands</span>
//                     <span className='ml-1'><b>Welch's</b></span>
//                     <Rating name="read-only" className='ml-2' value={5} size="small" precision={0.5} readOnly  />
//                 </div>
//                 <hr/>
               
//                <div className='row mt-2 productDetailsModal'>
//                 <div className='col-md-5'>

//                 </div>
//                 <div className='col-md-7'>

//                 </div>
//                </div>
                

//             </Dialog>
//     </>
//     )
// }

// export default ProductModal;

// src/Components/ProductModal/index.js

// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import { IoMdClose } from "react-icons/io";
// import Rating from '@mui/material/Rating';

// const ProductModal = (props) => {
//     return (
//         <>
//             <Dialog open={true} className='productModal' onClose={() => props.closeProductModal()}>
                
//                 {/* <Button className="close_" onClick={() => props.closeProductModal()} ><IoMdClose /></Button> */}
//                 <h4 className='mb-2'>All Natural Italian-Style Chicken Meatballs</h4>
//                 <div className="d-flex align-items-center mr-4">
//                     <span>Brands</span>
//                     <span className='ml-1'><b>Welch's</b></span>
//                     <Rating name="read-only" className='ml-2' value={5} size="small" precision={0.5} readOnly />
//                 </div>
//                 <hr/>

//                 {/* New section for product image */}
//                 <div className='row mt-2'>
//                     <div className='col-md-5'>
//                         <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg" alt="Product" className='img-fluid' />
//                     </div>
                    
//                     {/* New section for product description */}
//                     <div className='col-md-7'>
//                        <div className='d-flex info align-items-center'>
//                             <span className='oldPrice lg mr-2'>$9.35</span>
//                             <span className='netPrice text-danger lg'>$9.35</span>

//                        </div>
//                     </div>
//                 </div>
                
//             </Dialog>
//         </>
//     )
// }

// export default ProductModal;

import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Rating from '@mui/material/Rating';
import { IoMdClose } from "react-icons/io";

const ProductModal = (props) => {
    return (
        <>
            <Dialog
                open={true}
                className='productModal'
                onClose={() => props.closeProductModal()}
                maxWidth="md" // Ensures the modal has a larger width
                fullWidth
            >
                {/* Close Button */}
                <Button 
                    className="close_" 
                    onClick={() => props.closeProductModal()} 
                    style={{ position: 'absolute', right: 16, top: 16, fontSize: '1.5rem' }}
                >
                    <IoMdClose />
                </Button>

                {/* Modal Content */}
                <div style={{ padding: '24px' }}>
                    {/* Product Title */}
                    <h2 className='mb-3'>All Natural Italian-Style Chicken Meatballs</h2>

                    {/* Brand and Rating */}
                    <div className="d-flex align-items-center mb-3" style={{ fontSize: '1.2rem' }}>
                        <span><strong>Brand:</strong></span>
                        <span className='ml-2'><b>Welch's</b></span>
                        <Rating name="read-only" className='ml-3' value={5} size="medium" precision={0.5} readOnly />
                    </div>
                    <hr style={{ margin: '16px 0' }} />

                    {/* Product Image and Details Section */}
                    <div className='row mt-3'>
                        {/* Product Image */}
                        <div className='col-md-6'>
                            <img 
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg" 
                                alt="Product" 
                                className='img-fluid'
                                style={{ maxWidth: '100%', borderRadius: '8px' }}
                            />
                        </div>

                        {/* Product Details */}
                        <div className='col-md-6'>
                            {/* Price Section */}
                            <div className='d-flex align-items-center mb-3' style={{ fontSize: '1.2rem' }}>
                                <span className='oldPrice text-muted mr-3' style={{ textDecoration: 'line-through' }}>$9.35</span>
                                <span className='netPrice text-danger'><strong>$7.25</strong></span>
                            </div>

                            {/* Stock Status */}
                            <span className='badge bg-success text-white mb-3' style={{ fontSize: '1.0rem', padding: '8px 12px' }}>
                                In Stock
                            </span>

                            {/* Description */}
                            <p style={{ fontSize: '1.0rem' }}>
                                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
                            </p>

                            {/* Quantity and Add to Cart */}
                            <div className='d-flex align-items-center mb-4'>
                                <Button 
                                    variant="outlined" 
                                    size="large" 
                                    style={{ fontSize: '1.0rem', padding: '10px 16px' }}
                                    className='mr-3'
                                >
                                    -
                                </Button>
                                <span className='mx-3' style={{ fontSize: '1.0rem' }}>1</span>
                               &nbsp; &nbsp; &nbsp;  <Button 
                                    variant="outlined" 
                                    size="large" 
                                    style={{ fontSize: '1.0rem', padding: '10px 16px' }}
                                    className='mr-4'
                                >
                                    +
                                </Button>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    style={{ fontSize: '1.0rem', padding: '12px 20px' }}
                                >
                                    Add to Cart
                                </Button>
                            </div>

                            {/* Wishlist and Compare */}
                            <div className='d-flex mb-4'>
                                <Button 
                                    variant="text" 
                                    style={{ fontSize: '1.0rem', marginRight: '16px' }}
                                >
                                    Add to Wishlist
                                </Button>
                                <Button variant="text" style={{ fontSize: '1.0rem' }}>
                                    Compare
                                </Button>
                            </div>

                            {/* Product Details */}
                            <ul style={{ fontSize: '1.0rem' }}>
                                <li><strong>Type:</strong> Organic</li>
                                <li><strong>MFG:</strong> Jun 4, 2021</li>
                                <li><strong>LIFE:</strong> 30 days</li>
                            </ul>

                            {/* Category and Tags */}
                            <p className='mt-4' style={{ fontSize: '1.0rem' }}>
                                <b>Category:</b> Meats & Seafood<br />
                                <b>Tags:</b> chicken, natural, organic
                            </p>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default ProductModal;
