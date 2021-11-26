import React from 'react';
import bykes1 from '../../Images/by10.jpg';
import bykes2 from '../../Images/by11.jpg';
import bykes3 from '../../Images/by12.jpg';
import './Upcoming.css';

const Upcoming = () => {
    return (
        <div className="container">
            <div className="text-center mt-4 ">
                <h3 className="upcoming-title">Upcoming Surprise Collections </h3>
            </div>
            <div className="row mt-5  g-4">
                <div className="col-md-4">
                    <div>
                        <img className="img-fluid " alt="bykes" src={bykes1} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="img-fluid " alt="bykes" src={bykes2} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="img-fluid " alt="bykes" src={bykes3} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="img-fluid " alt="bykes" src={bykes3} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="img-fluid " alt="bykes" src={bykes1} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="img-fluid " alt="bykes" src={bykes2} />
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Upcoming;