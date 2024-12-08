import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './Header';
import { HomeLazy } from './pages/HomeLazy';
import { AboutLazy } from './pages/AboutLazy';
import { ServicesLazy } from './pages/ServicesLazy';
import { LegalLazy } from './pages/LegalLazy';
import { CareersLazy } from './pages/CareersLazy';
import { ContactLazy } from './pages/ContactLazy';
import { Error404Lazy } from './pages/Error404Lazy';

function RouteInfo() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomeLazy />} />
                <Route path="/about" element={<AboutLazy />} />
                <Route path="/services" element={<ServicesLazy />} />
                <Route path="/legal" element={<LegalLazy />} />
                <Route path="/careers" element={<CareersLazy />} />
                <Route path="/contact" element={<ContactLazy />} />
                <Route path="*" element={<Error404Lazy />} />
            </Routes>
        </Router>
    );
}

export default RouteInfo;
