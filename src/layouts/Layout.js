import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <>
            <nav className="menu-res hidden-lg hidden-md">
                <div className="menu-res-inner">
                    <ul>
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="business.html">BUSINESS</a></li>
                        <li><a href="reviews.html">REVIEWS</a></li>
                        <li><a href="video.html">VIDEOS</a></li>
                        <li><a href="computing.html">COMPUTING</a></li>
                        <li><a href="mobile.html">MOBILE</a></li>
                        <li><a href="tech.html">TECH</a></li>
                        <li>
                            <p>
                                <a href="#">PAGE</a>
                                <span className="open-submenu"><i className="fa fa-angle-down"></i></span>
                            </p>
                            <ul>
                                <li key="404">
                                    <a href="404.html">404</a>
                                </li>
                                <li key="contact">
                                    <a href="contact.html">Contact us</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="page">
                <div className="container">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Layout;