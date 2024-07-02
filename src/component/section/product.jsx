import { Component } from "react";
import Rating from "./rating";
import { Link } from 'react-router-dom';

const subtitle = "bigamer t-shirt’s";
const title = "explore our products";


let ProductListContent = [
    {
        imgUrl: 'assets/images/main-points/DEPOSIT.png',
        imgAlt: 'MIN. DEPOSIT INR 100',
        title:'MIN. DEPOSIT INR 100',
    },
    {
        imgUrl: 'assets/images/main-points/WITHDRAWAL.png',
        imgAlt: 'MIN. WITHDRAWAL INR 100',
        title:'MIN. DEPOSIT INR 100',
    },
    {
        imgUrl: 'assets/images/main-points/SUPPORT.png',
        imgAlt: 'SUPPORT 24/7',
        title:'MIN. DEPOSIT INR 100',
    },
    {
        imgUrl: 'assets/images/main-points/MIN REFILL.png',
        imgAlt: 'MIN REFILL INR 100',
        title:'MIN. DEPOSIT INR 100',
    },
    {
        imgUrl: 'assets/images/main-points/PROCESS TIME.png',
        imgAlt: 'PROCESS TIME INSTANTLY',
        title:'MIN. DEPOSIT INR 100',
    },
    {
        imgUrl: 'assets/images/main-points/WORKING DAYS.png',
        imgAlt: 'WORKING DAYS 365',
        title:'MIN. DEPOSIT INR 100',
    }
]

class ProductSection extends Component {
    render() { 
        return (
            <div className="product-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center">
                            {ProductListContent.map((val, i) => (
                                <div className="col-xl-3 col-md-4 col-sm-6 col-12" key={i}>
                                    <div className="product-item">
                                        <div className="product-inner">
                                            <div className="product-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                            </div>
                                            <div className="product-content text-center p-3">
                                                <Link to="/shop-single"><h5 className="product-title">{val.title}</h5></Link>
                                                <h5 className="product-price">{val.price}</h5>
                                                <div className="rating">
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProductSection;