// import Button from '@mui/material/Button';
// import { IoMenu  } from "react-icons/io5";
// import { FaAngleDown } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { FaHome } from "react-icons/fa";
// import { FaHeadphonesAlt } from "react-icons/fa";
// import { GiClothes } from "react-icons/gi";
// import { MdBakeryDining } from "react-icons/md";
// import { MdFastfood } from "react-icons/md";
// import { FaMicroblog } from "react-icons/fa6";
// import { IoMdContact } from "react-icons/io";


// const Navigation=()=>{
//     return(
//         <nav>
//         <div className='container'>
//             <div className='row'>
//             <div className='col-sm-3 navPart1'>
//                <div className='catWrapper'>
//                <Button className='allCatTab align-items-center'>
//                 <span className='icon1 mr-2'><IoMenu/></span>
//                 <span class='text'>All Categories</span>
//                 <span className='icon2 ml-2'><FaAngleDown/></span>
//                 </Button>
//                 <div className='sidebarNav'>
//                     <Link to="/"><Button>Clothing</Button></Link>
//                     <Link to="/"><Button>Footwear</Button></Link>
//                     <Link to="/"><Button>Clothing</Button></Link>
//                     <Link to="/"><Button>Footwear</Button></Link>
//                     <Link to="/"><Button>Watches</Button></Link>
//                     <Link to="/"><Button>Clothing</Button></Link>
//                 </div>
//                </div>
//             </div>

//             <div className='col-sm-9 navPart2 d-flex align-items-center'>
//                 <ul className='list list-inline ml-auto'>
//                     <li className='list-inline-item'> <Link to="/"><FaHome/> &nbsp; Home</Link></li>
//                     <li className='list-inline-item'> <Link to="/"> <GiClothes/> &nbsp; Men</Link>
//                     <div className='submenu shadow'>
//                     <Link to="/">Clothing</Link>
//                     <Link to="/">Footwear</Link>
//                     <Link to="/">Watches</Link>
//                     <Link to="/">Clothing</Link>
//                     <Link to="/">Footwear</Link>
//                     <Link to="/">Watches</Link>
//                     </div>
//                     </li>
//                     <li className='list-inline-item'> <Link to="/"> <FaHeadphonesAlt/> &nbsp; Women</Link> 
//                     <div className='submenu shadow'>
//                     <Link to="/">Clothing</Link>
//                     <Link to="/">Footwear</Link>
//                     <Link to="/">Watches</Link>
//                     <Link to="/">Clothing</Link>
//                     <Link to="/">Footwear</Link>
//                     <Link to="/">Watches</Link>
//                     </div>
//                     </li>
//                     <li className='list-inline-item'> <Link to="/"> <MdBakeryDining/> &nbsp; Beauty</Link> 
//                     <div className='submenu shadow'>
//                     <Link to="/">Clothing</Link>
//                     <Link to="/">Footwear</Link>
//                     <Link to="/">Watches</Link>
//                     <Link to="/">Clothing</Link>
//                     <Link to="/">Footwear</Link>
//                     <Link to="/">Watches</Link>
//                     </div>
//                     </li>
//                     <li className='list-inline-item'> <Link to="/"> <MdFastfood/> &nbsp; Watches</Link> 
//                     <div className='submenu shadow'>
//                     <Link to="/">Clothing</Link>
//                     <Link to="/">Footwear</Link>
//                     <Link to="/">Watches</Link>
//                     <Link to="/">Clothing</Link>
//                     <Link to="/">Footwear</Link>
//                     <Link to="/">Watches</Link>
//                     </div>
//                     </li>
//                     <li className='list-inline-item'> <Link to="/"><FaMicroblog/> &nbsp; Gift</Link> 
//                     <div className='submenu shadow'>
//                     <Link to="/">Clothing</Link>
//                     <Link to="/">Footwear</Link>
//                     <Link to="/">Watches</Link>
//                     <Link to="/">Clothing</Link>
//                     <Link to="/">Footwear</Link>
//                     <Link to="/">Watches</Link>
//                     </div>
//                     </li>
//                     <li className='list-inline-item'> <Link to="/"><IoMdContact/> &nbsp; Contact</Link> </li>
                    
//                 </ul>
//             </div>
//             </div>
//         </div>
//     </nav>
//     )
// }

// export default Navigation;

// src/Components/Header/Navigation/index.js
import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdBakeryDining } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { FaMicroblog } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { useState } from 'react';

const Navigation = () => {
    const [isopenSidebarVal, setisopenSidebarVal] = useState(true);

    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                       
                    </div>

                    <div className='col-sm-9 navPart2 d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
                        <ul className='list list-inline' style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                            <li className='list-inline-item'> <Link to="/"><FaHome /> &nbsp; Home</Link></li>
                            <li className='list-inline-item'> <Link to="/Products"> <GiClothes /> &nbsp; Men</Link>
                                <div className='submenu shadow'>
                                    <Link to="/">Clothing</Link>
                                    <Link to="/">Footwear</Link>
                                    <Link to="/">Watches</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'> <Link to="/"> <FaHeadphonesAlt /> &nbsp; Women</Link>
                                <div className='submenu shadow'>
                                    <Link to="/">Clothing</Link>
                                    <Link to="/">Footwear</Link>
                                    <Link to="/">Watches</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'> <Link to="/"> <MdBakeryDining /> &nbsp; Beauty</Link>
                                <div className='submenu shadow'>
                                    <Link to="/">Clothing</Link>
                                    <Link to="/">Footwear</Link>
                                    <Link to="/">Watches</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'> <Link to="/"> <MdFastfood /> &nbsp; Watches</Link>
                                <div className='submenu shadow'>
                                    <Link to="/">Clothing</Link>
                                    <Link to="/">Footwear</Link>
                                    <Link to="/">Watches</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'> <Link to="/"><FaMicroblog /> &nbsp; Gift</Link>
                                <div className='submenu shadow'>
                                    <Link to="/">Clothing</Link>
                                    <Link to="/">Footwear</Link>
                                    <Link to="/">Watches</Link>
                                </div>
                            </li>
                            <li className='list-inline-item'> <Link to="/"><IoMdContact /> &nbsp; Contact</Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;