import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="flex justify-center items-center h-[100vh] bg-[#01141f]">
            <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>

};

export default PrivateRoutes;