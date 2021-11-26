import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import './DashBoard.css'
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../AdminRoute/AdminRoute';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddData from '../../AddData/AddData'
import ManageProduct from '../ManageProduct/ManageProduct';
import Reviews from '../../Home/Reviews/Reviews';
import Pay from '../Pay/Pay';
import UseAuth from '../../../Hooks/UseAuth';



const DashBoard = () => {

    let { path, url } = useRouteMatch();
    const { admin, logOut } = UseAuth();
    return (
        <div className="dashboard-part">
            <div className="header-file">
                <nav className="navbar navbar-expand-lg navbar-dark    ">
                    <div className="container-fluid">

                        <Link to="/dashboard" className="nav-link active company-name"> Dashboard</Link>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon  "></span>
                        </button>
                        <div className="collapse navbar-collapse navbar-link" id="navbarScroll">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >


                                <Link to="/home" className="pe-5   nav-link active">Home</Link>












                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
            <div className="row">

                {/* dashboard sidevar */}
                <div className="col-md-3 sidebar-section ps-5">


                    {
                        !admin && <>


                            <div>
                                <Link to={`${url}/reviews`} className="   nav-link active">Review</Link>
                            </div>
                            <div>
                                <Link to={`${url}/pay`} className="   nav-link active">payment</Link>
                            </div>



                            <div>
                                <Link to="/home" onClick={logOut} className=" nav-link ">Log out</Link>
                            </div>

                        </>
                    }




                    {
                        admin && <>

                            <div>
                                <Link to={`${url}/manageorders`} className="   nav-link active">Manage  Orders</Link>
                            </div>
                            <div>
                                <Link to={`${url}/addnewproduct`} className="   nav-link active">Add New Product</Link>
                            </div>
                            <div>
                                <Link to={`${url}/makeadmin`} className="   nav-link active">Make Admin</Link>
                            </div>
                            <div>
                                <Link to={`${url}/manageProduct`} className="   nav-link active">Manage all Products</Link>
                            </div>
                            <div>
                                <Link to="/home" onClick={logOut} className=" nav-link ">Log out</Link>
                            </div>

                        </>
                    }

                </div>















                <div className="col-md-9">

                    <Switch>

                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>

                        <AdminRoute path={`${path}/manageorders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>

                        <AdminRoute path={`${path}/addnewproduct`}>
                            <AddData></AddData>
                        </AdminRoute>

                        <AdminRoute path={`${path}/manageProduct`}>
                            <ManageProduct></ManageProduct>
                        </AdminRoute>

                        <Route path={`${path}/reviews`}>
                            <Reviews></Reviews>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>


                    </Switch>
                </div>

            </div>
        </div>
    );
};

export default DashBoard;