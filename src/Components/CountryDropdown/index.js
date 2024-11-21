// import React, { useContext, useEffect } from "react";
// import { FaAngleDown } from "react-icons/fa6";
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import { FaSearch } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";
// import { useState } from "react";
// import Slide from '@mui/material/Slide';
// import { MyContext } from "../../App";

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });

// const CountryDropdown=()=>{

//     const[isOpenModal, setisOpenModal] = useState(false);
//     const [selectedTab, setselectedTab]= useState(null);

//     const [countryList, setcountryList] = useState([]);
    

//     const context = useContext(MyContext);

//     const selectCountry=(index=>{
//         setselectedTab(index);
//         setisOpenModal(false);
        
//     })

//     useEffect(()=>{
//         setcountryList(context.countryList);
//     },[])

//     const filterList=(e)=>{
//         const keyword = e.target.value.toLowerCase();

//         if(keyword!==""){

//             const list = countryList.filter((item)=>{
//                 return item.country.toLowerCase().includes(keyword);
//             }); 
//             setcountryList(list);

//         }else{
//             setcountryList(context.countryList); 
//         }
//     }

    

//     return(
//         <>
//          <Button className='countryDrop' onClick={()=>setisOpenModal(true)} >
//              <div className='info d-flex flex-column'>
//                  <span className="lable" >Your Location</span>
//                  <span className="name" ><b>India</b></span>
//             </div>
//             <span className="ml-auto"><FaAngleDown/></span>
//         </Button>


//         <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)}  className="locationModal"
//             TransitionComponent={Transition} >
//         <h3 className="mb-0">Choose Your Location</h3>
//         <p>Enter your address and we will specify the offer for your area</p>
//         <Button className="close_" onClick={()=>setisOpenModal(false)} ><IoMdClose/></Button>
//         <div className='headerSearch w-100'>
//         <input type='text' placeholder='Search for Area...' onChange={filterList}/>
//         <Button><FaSearch/></Button>
//         </div>
//         <ul className="countryList mt-3">
//             {
//                 countryList?.length!==0 && countryList?.map((item,index)=>{
//                     return(
//                         <li key={index}><Button onClick={()=>selectCountry(index)}
//                         className={`${selectedTab===index ? 'active' : ''}`}
//                         >{item.country}</Button></li>
//                     )
//                 })
//             }
           
//             {/* <li><Button onClick={()=>setisOpenModal(false)}>Mumbai</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Delhi</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Pune</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Mumbai</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Delhi</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Pune</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Mumbai</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Delhi</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Pune</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Mumbai</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Delhi</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Pune</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Mumbai</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Delhi</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Pune</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Mumbai</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Delhi</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Pune</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Mumbai</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Delhi</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Pune</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Mumbai</Button></li>
//             <li><Button onClick={()=>setisOpenModal(false)}>Delhi</Button></li> */}

//         </ul>
//         </Dialog>
//         </>
//     )
// }

// export default CountryDropdown;
import React, { useContext, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Slide from '@mui/material/Slide';
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setselectedTab] = useState(null);
    const [countryList, setcountryList] = useState([]);

    const context = useContext(MyContext);

    const selectCountry = (index) => {
        setselectedTab(index);
        setisOpenModal(false);
    }

    useEffect(() => {
        setcountryList(context.countryList);
    }, [])

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();

        if (keyword !== "") {
            const list = countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword);
            });
            setcountryList(list);
        } else {
            setcountryList(context.countryList);
        }
    }

    return (
        <>
            <Button className='countryDrop' onClick={() => setisOpenModal(true)}  >
                <div className='info d-flex flex-column' style={{ outlineColor:'none' }}>
                    <span className="lable" >Your Location</span>
                    <span className="name"><b>{selectedTab !== null ? countryList[selectedTab].country : 'select'}</b></span> {/* Updated line */}
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => setisOpenModal(false)} className="locationModal"
                TransitionComponent={Transition}>
                <h3 className="mb-0">Choose Your Location</h3>
                <p>Enter your address and we will specify the offer for your area</p>
                <Button className="close_" onClick={() => setisOpenModal(false)} ><IoMdClose /></Button>
                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Search for Area...' onChange={filterList} />
                    <Button><FaSearch /></Button>
                </div>
                <ul className="countryList mt-3">
                    {
                        countryList?.length !== 0 && countryList?.map((item, index) => {
                            return (
                                <li key={index}><Button onClick={() => selectCountry(index)}
                                    className={`${selectedTab === index ? 'active' : ''}`}
                                >{item.country}</Button></li>
                            )
                        })
                    }
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown;