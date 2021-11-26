import React from 'react';
import './ManageOrder.css'
const ManageOrder = (props) => {
    console.log(props)
    const { name, address, bike, phone } = props.order;

    return (
        <div>
            <div className="card service-img order-description mx-3 shadow-lg p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <h4 className="card-title">Customer: {name}</h4>
                    <h5 className="card-title">Bike: {bike}</h5>
                    <h6>Phone: {phone}</h6>
                    <p>Address: {address}</p>





                </div>
            </div>

        </div>
    );
};

export default ManageOrder;