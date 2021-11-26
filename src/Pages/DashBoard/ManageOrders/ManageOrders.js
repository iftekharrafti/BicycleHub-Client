import './ManageOrders.css';
import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/customers')
            .then(res => res.json())
            .then(data => setOrders(data.slice(0, 6)));
    }, [])
    return (
        <div className="allOrder-section">
            <div className=" my-5 pb-4">
                <div className="mb-5 text-center">
                    <h5 className="choose-orders">Manage All Orders</h5>

                </div>

                <div className="row row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                    {
                        orders.map(order => <ManageOrder
                            key={order._id}
                            order={order}
                        ></ManageOrder>)
                    }

                </div>

            </div>

        </div >
    );
};

export default ManageOrders;