import React from 'react'
// import {Button } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Icofont from 'react-icofont';
import { IMG_URL } from '../inc/Config';

function AllDonar(props) {
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
   
    if (props.donar && props.donar.length === 0) {
        return <div className="isLoading text-center">Please wait...</div>
    } else {
        return (
            <OwlCarousel options={options} >
                {props.donar.map((portfolio, i) => {
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
                        <div className="portfolioCard donarList" key={i}>
                            <div className="portfolioCardTop donarList">
                                <div className="PortfolioCovetTop">
                                    <div className="portfolioCardHeader donarList">
                                        <img src={`${IMG_URL}/${portfolio.image}`} alt="" />
                                        <span className="order_lebel">{orderText}</span>
                                    </div>
                                    <div className="portfolioCardBody donarList">
                                        <div className="portfolioBodyTopper donarList">
                                            <div className="portfolioBodyTop">
                                                <h5><Icofont className="blood" icon="icofont-blood-drop" /> {portfolio.blood_group} </h5>
                                                <h4>{portfolio.first_name} {portfolio.last_name}</h4>
                                                <p>{portfolio.designation}</p>
                                            </div>
                                            <div className="portfolioDetails">
                                                 <p><Icofont icon="icofont-phone" /> {portfolio.phone}</p>
                                                {/* <Button variant="primary">Go somewhere</Button> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* cover image */}
                                    <div className="allDonar_cover">
                                        <img src={`${IMG_URL}/${portfolio.image}`} alt="" />
                                        <span className="order_lebel">{orderText}</span>
                                        <div className="profileCover_title">
                                            <p className="blood_group" ><Icofont className="blood" icon="icofont-blood-drop" /> {portfolio.blood_group} </p>
                                            <h4>{portfolio.first_name} {portfolio.last_name}</h4>
                                            <h4>{portfolio.donate_date}</h4>
                                            {/* <p>{portfolio.designation}</p> */}
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolioCardFooter donarList">
                                    <ul className="social_ul">
                                        <li><Link onClick={() => window.open(`https://www.facebook.com/${portfolio.facebook}`)} to=""><Icofont icon="facebook" /></Link></li>
                                        <li><Link onClick={() => window.open(`https://www.facebook.com/${portfolio.twitter}`)} to=""><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link onClick={() => window.open(`https://www.facebook.com/${portfolio.youtube}`)} to=""><i className="fa fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            
                            
                        </div>
                    )
                })}
            </OwlCarousel>
        )
    }
}

export default AllDonar
