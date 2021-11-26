import React from 'react';
import './Showreview.css'

const Showreview = (props) => {
    const { bikename, Customer, description } = props.review;
    return (
        <div >

            <div class="card showreview-section">
                <div class="card-body">
                    <h5 class="card-title">Bikename: {bikename}</h5>
                    <h6>Customer: {Customer}</h6>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Showreview;