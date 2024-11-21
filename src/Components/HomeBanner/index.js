import React from "react";
import Slider from "react-slick";

const HomeBanner = ()=>{

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };

    return(
        <div className="HomeBannerSection">
             <Slider {...settings}>
                <div className="item" style={{ width: '100vw', overflow: 'hidden' }}>
                    <img src="https://cmsimages.shoppersstop.com/static_web_Stop_Life_c593afa66c/static_web_Stop_Life_c593afa66c.png"
                     className="w-100" style={{ width: '100%', height: 'auto' }}/>
                </div>
                <div className="item" style={{ width: '100vw', overflow: 'hidden' }}>
                    <img src="https://cmsimages.shoppersstop.com/static_web_Adidas_puma_and_more_fab67b1371/static_web_Adidas_puma_and_more_fab67b1371.png"
                     className="w-100" style={{ width: '100%', height: 'auto' }}/>
                </div>
                <div className="item" style={{ width: '100vw', overflow: 'hidden' }}>
                    <img src="https://cmsimages.shoppersstop.com/static_web_Forever_New_AND_and_more_4667ba53e6/static_web_Forever_New_AND_and_more_4667ba53e6.png"
                     className="w-100" style={{ width: '100%', height: 'auto' }}/>
                </div>
                <div className="item"style={{ width: '100vw', overflow: 'hidden' }}>
                    <img src="https://cmsimages.shoppersstop.com/static_web_Casio_Fossil_and_more_31c364460c/static_web_Casio_Fossil_and_more_31c364460c.png"
                     className="w-100" style={{ width: '100%', height: 'auto' }}/>
                </div>
             </Slider>
        </div>
    )
}

export default HomeBanner;