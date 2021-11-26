import React, { useEffect, useState } from 'react';
import Showreview from '../Showreview/Showreview';
import './Allreviews.css'

const Allreviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="container">
            <div className="allreviews-section ">
                <div className=" my-5 pb-4">
                    <div className="mb-5 text-center">
                        <h5 className="your-reviews">Customer Opinions</h5>
                    </div>

                    <div className="row row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                        {
                            reviews.map(review => <Showreview
                                key={review._id}
                                review={review}
                            ></Showreview>)
                        }

                    </div>
                </div>

            </div>

        </div >
    );
};

export default Allreviews;