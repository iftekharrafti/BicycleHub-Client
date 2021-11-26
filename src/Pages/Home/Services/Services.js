import React, { useEffect, useState } from 'react';
import './Services.css'
import Someservices from '../SomeServices/Someservices';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, [])
    return (
        <div className="Service-section">
            <div className=" my-5 pb-4">
                <div className="mb-5 text-center">
                    <h5 className="sevices-title">Our Some Services</h5>
                </div>

                <div className="row row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                    {
                        services.map(service => <Someservices
                            key={service._id}
                            service={service}
                        ></Someservices>)
                    }

                </div>

            </div>

        </div >
    );
};

export default Services;