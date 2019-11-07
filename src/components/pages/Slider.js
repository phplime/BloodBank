import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';

function Slider() {
    const options = {
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        nav: true,
        rewind: true,
        autoplay: false,
        mouseDrag:true,
        lazyContent:true,
        fallbackEasing: 'swing',
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
    };
    
    const sliderContent = [
        {
            title: 'DONATE BLOOD AND GET REAL BLESSINGS 1', subTitle: "Blood is the most precious gift that anyone can give to another person.Donating blood not only saves the life also save donor's lives.",
            image: 'https://placeimg.com/640/480/any', isBtn: true, btnText: 'Get Appoinment',
        },
        {
            title: 'DONATE BLOOD AND GET REAL BLESSINGS 2', subTitle: "Blood is the most precious gift that anyone can give to another person.Donating blood not only saves the life also save donor's lives.",
            image: 'https://placeimg.com/640/480/any', isBtn: false, btnText: 'Get Appoinment',
        },
        {
            title: 'DONATE BLOOD AND GET REAL BLESSINGS 3', subTitle: "Blood is the most precious gift that anyone can give to another person.Donating blood not only saves the life also save donor's lives.",
            image: 'https://placeimg.com/640/480/any', isBtn: true, btnText: 'Get Appoinment',
        },
    ];


    return (
        <OwlCarousel options={options} >
        {
            sliderContent.map((slider,i) =>{
                return (
                    <div className='sliderImage' key={i}>
                        <img src={slider.image} alt={slider.title} />
                        <div className="sliderText">
                            <div className="sliderTextContent">
                                <h1>{slider.title}</h1>
                                <p>{slider.subtitle}</p>
                                {
                                    // slider.isBtn && <button className="sliderBtn">{slider.btnText}</button>
                                }
                                <div className="searchArea">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="slider_content">
                                                <div className="form-group">
                                                    <input type="text" name="search" className="form-control" />
                                                </div>
                                                <div className="searchHomeBtn">
                                                    <button className="btn btn-primary">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                )
            })
        }
        </OwlCarousel>
    )
}

export default Slider
