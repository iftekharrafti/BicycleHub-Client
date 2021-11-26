import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="mt-5 footer-start py-5 px-5">
            <div className="row pt-3">

                <div className="col-md-3">
                    <div>
                        <h3 >BicycleHub</h3>
                        <div className="mt-5">
                            <p>BicycleHub is the world leader in selling Bicycle. No surprise that our every bikes are the most technologically advanced on the market.
                            </p>
                        </div>


                    </div>
                </div>


                <div className="col-md-3 ">
                    <h3 >Contact Us</h3>
                    <div>
                        <div className="mt-5">
                            <span><i className="fas fa-phone pe-3"></i></span>
                            <span>0190000000 , </span>
                            <span>0170000000</span>
                        </div>
                        <div className="mt-3">
                            <span><i className="fas fa-envelope pe-3"></i></span>
                            <span> info@gmail.com ,</span>

                        </div>

                        <div className="mt-3">
                            <span><i className="fas fa-map-marker-alt pe-3"></i></span>
                            <span>13/D Colony Road,</span>

                            <span> GSE, Chittagong</span>
                        </div>
                    </div>
                </div>


                {/* payment method */}

                <div className="col-md-3 ">

                    <h3 >Sell On BicycleHub</h3>
                    <div className="mt-3 pt-4">
                        <h5>Sell Show Room</h5>
                        <h5>Sell Online</h5>
                        <h5>Sell Privately</h5>
                    </div>


                </div>
                <div className="col-md-3 ">

                    <div>
                        <h5 className="follow">Follow Us</h5>
                        <div className="pt-3">
                            <i class="fab social-icon fa-facebook-f pe-3"></i>
                            <i class="fab social-icon  fa-instagram pe-3"></i>
                            <i class="fab social-icon  fa-twitter pe-3"></i>
                            <i class="fab social-icon  fa-youtube pe-3"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;