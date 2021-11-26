import React from 'react';
import './Banner.css';
import byke1 from '../../../Images/by1.jpg';
import byke2 from '../../../Images/by2.jpg';
import byke3 from '../../../Images/by3.jpg';
import byke4 from '../../../Images/by4.jpg';

const Banner = () => {
    return (
        <div>
            <div >
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner ">
                        <div className="carousel-item active slide-section">
                            <img src={byke1} className="d-block w-100 banner-img " alt="..." />
                            <div className="carousel-caption banner-title d-none d-md-block">
                                <h5>Latest Bicycle Collections </h5>
                                <span className="banner-cycle">Start Your cycling adventure</span>
                            </div>
                        </div>
                        <div className="carousel-item slide-section">
                            <img src={byke2} className="d-block  banner-img w-100" alt="..." />
                            <div className="carousel-caption banner-title d-none d-md-block">
                                <h5>Latest Bicycle Collections </h5>
                                <span className="banner-cycle">Start Your cycling adventure</span>
                            </div>
                        </div>
                        <div className="carousel-item slide-section">
                            <img src={byke3} className="d-block  banner-img w-100" alt="..." />
                            <div className="carousel-caption banner-title d-none d-md-block">
                                <h5>Latest Electric Bicycle </h5>
                                <span className="banner-cycle">Start Your cycling adventure</span>
                            </div>
                        </div>
                        <div className="carousel-item slide-section">
                            <img src={byke4} className="d-block banner-img w-100" alt="..." />
                            <div className="carousel-caption banner-title d-none d-md-block">
                                <h5>Latest Mountain Bicycle  </h5>
                                <span className="banner-cycle">Start Your cycling adventure</span>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;