import React from 'react'
import {Button } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Icofont from 'react-icofont';

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
    return (
            <OwlCarousel options={options} >
                {props.donar.map((portfolio, i) => {
                    {
                        
                        let order = i+1;
                        var orderText = '';
                        if (order === 1) {
                            orderText = `${order}st`;
                        } else if (order === 2) {
                            orderText = `${order}nd`;
                        } else if (order === 3) {
                            orderText = `${order}rd`;;
                        } else{
                            orderText = `${order}th`;;
                        }
                    }
                    return (
                        <div className="portfolioCard donarList" key={i}>
                            <div className="portfolioCardTop donarList">
                                <div className="PortfolioCovetTop">
                                    <div className="portfolioCardHeader donarList">
                                        <img src={portfolio.image} alt="" />
                                        <span className="order_lebel">{orderText}</span>
                                    </div>
                                    <div className="portfolioCardBody donarList">
                                        <div className="portfolioBodyTopper donarList">
                                            <div className="portfolioBodyTop">
                                                <h4>{portfolio.name}</h4>
                                                <p>{portfolio.designation}</p>
                                            </div>
                                            <div className="portfolioDetails">
                                                {portfolio.details}
                                                <Button variant="primary">Go somewhere</Button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* cover image */}
                                    <div className="allDonar_cover">
                                        <img src={portfolio.image} alt="" />
                                        <span className="order_lebel">{orderText}</span>
                                        <div className="profileCover_title">
                                            <h4>{portfolio.name}</h4>
                                            <p>{portfolio.designation}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolioCardFooter donarList">
                                    <ul className="social_ul">
                                        <li><Link to=""><Icofont icon="facebook" /></Link></li>
                                        <li><Link to=""><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link to=""><i className="fa fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            
                            
                        </div>
                    )  
                })}
            </OwlCarousel>
    )
}

export default AllDonar
