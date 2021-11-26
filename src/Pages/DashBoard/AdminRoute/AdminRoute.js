import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isloding } = UseAuth();
    if (isloding) {
        return <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;