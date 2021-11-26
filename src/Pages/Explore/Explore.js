import React, { useEffect, useState } from 'react';
import Explores from '../Explores/Explores';

const Explore = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="explore-section">
            <div className=" my-3 pb-4">
                <div className="mb-5 text-center">
                    <h3 className="bicycle-services">Our All Services</h3>
                </div>

                <div className="row row row-cols-1 row-cols-md-2 row-cols-lg- g-2">

                    {
                        services.map(service => <Explores
                            key={service._id}
                            service={service}
                        ></Explores>)
                    }

                </div>

            </div>

        </div >
    );
};

export default Explore;