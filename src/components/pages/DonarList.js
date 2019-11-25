import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Icofont from 'react-icofont';
import { IMG_URL } from '../inc/Config';

function DonarList(props) {
    const options = {
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        dots: false,
        nav: true,
        rewind: true,
        autoplay: false,
        mouseDrag:true,
        lazyContent:true,
        fallbackEasing: 'swing',
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
    };
    if (props.portfolio.userInfo && props.portfolio.userInfo.length === 0) {
        return <div className="isLoading text-center">Loading...</div>
    } else {
        return (
            <OwlCarousel options={options} >
                {props.portfolio.userInfo.map((portfolio, i) => {
                    {
                        
                        let order = i + 1;
                        var orderText = '';
                        if (order === 1) {
                            orderText = `${order}st`;
                        } else if (order === 2) {
                            orderText = `${order}nd`;
                        } else if (order === 3) {
                            orderText = `${order}rd`;;
                        } else {
                            orderText = `${order}th`;;
                        }
                    }
                    return (
                        <div className="portfolioCard" key={i}>
                            <div className="portfolioCardTop">
                                <div className="portfolioCardHeader">
                                    <img src={`${IMG_URL}/${portfolio.thumb}`} alt="" />
                                    <span className="order_lebel">{orderText}</span>
                                </div>
                                <div className="portfolioCardBody">
                                    <div className="portfolioBodyTopper">
                                        <div className="portfolioBodyTop">
                                            <h4>{portfolio.first_name} {portfolio.last_name}</h4>
                                            <p>{portfolio.designation}</p>
                                        </div>
                                        <div className="portfolioDetails">
                                            {/* {portfolio.about_me} */}
                                            <p><Icofont icon="icofont-blood-drop" /> {portfolio.blood_group} </p>
                                            <p>{portfolio.donate_date}</p>
                                        </div>
                                    </div>
                                    <div className="portfolioCardFooter">
                                        <ul className="social_ul">
                                            <li><Link onClick={() => window.open(`https://www.facebook.com/${portfolio.facebook}`)} to=""><Icofont icon="facebook" /></Link></li>
                                            <li><Link onClick={() => window.open(`https://www.facebook.com/${portfolio.twitter}`)} to=""><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link onClick={() => window.open(`https://www.facebook.com/${portfolio.youtube}`)} to=""><i className="fa fa-youtube"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio_bg_cover">
                                    <img src={`${IMG_URL}/${portfolio.thumb}`} alt="" />
                                    <span className="order_lebel">{orderText}</span>
                                    <div className="profileCover_title">
                                        <h4>{portfolio.first_name} {portfolio.last_name}</h4>
                                        <p>{portfolio.designation}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    )
                })}
            </OwlCarousel>
        )
    }
}

export default DonarList
