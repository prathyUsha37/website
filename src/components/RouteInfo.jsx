import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Error404Lazy } from './pages/Error404Lazy';

function RouteInfo() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Error404Lazy />} />
            </Routes>
        </Router>
    );
}

export default RouteInfo;
