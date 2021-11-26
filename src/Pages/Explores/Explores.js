import React from 'react';
import { Link } from 'react-router-dom';
import './Explores.css'
const Explores = (props) => {
    const { price, releaseDate, type, description, img, bikename, _id } = props.service;
    return (
        <div>
            <div className="card service-img card-details mx-3 shadow-lg p-3 mb-5 bg-body rounded">
                <img src={img} className="card-img-top image-size " alt="..." />
                <div className="card-body">
                    <h3 className="card-name ">{bikename}</h3>
                    <h5> {type}</h5>
                    <p>{description}</p>
                    <span> <span className="price">${price}</span></span>

                    <span><span className="releaseDate ms-5 ps-4">
                        {releaseDate}</span></span>


                    <div className=" mt-3">
                        <Link to={`/purchase/${_id}`}>
                            <button type="button" className=" details-button mt-2 py-2"> Purchase Now</button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Explores;