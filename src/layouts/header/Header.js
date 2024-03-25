import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header class="header">
                <div class="row">
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <a href="#" class="logo">
                            <img alt="Logo" src="http://127.0.0.1:5500/www.cizthemes.com/template/teznews/images/logo.png" />
                        </a>
                    </div>
                    <div class="col-md-6 col-md-offset-3 col-sm-8  text-right col-xs-12 hidden-xs">
                    </div>
                </div>
            </header>
            <nav class="menu font-heading">
                <div class="menu-icon hidden-lg hidden-md">
                    <i class="fa fa-navicon"></i>
                    <span>MENU</span>
                </div>
                <ul class="hidden-sm hidden-xs">
                    <li>
                        <NavLink to="/" style={{ color: "white" }}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ctxh" style={{ color: "white" }}>
                            Chính trị - xã hội
                        </NavLink>
                    </li>
                    <li class="mega">
                        <a href="reviews.html">Gia đình<span></span></a>
                        <div class="mega-menu">
                            <h3>
                                Latest Post
                            </h3>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="mega-col">
                                        <div class="mega-item">
                                            <div class="mega-item-img">
                                                <a href="article.html">
                                                    <img alt="" src="images/product/3.jpg" />
                                                </a>
                                                <a href="#" class="cate-tag">Business</a>
                                            </div>
                                            <p><a href="article.html">Donald Trump suggests the DNC was hacked...</a></p>
                                            <div class="meta-post">
                                                <a href="#">
                                                    Sue	Benson
                                                </a>
                                                <em></em>
                                                <span>
                                                    22 Sep 2016
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mega-col">
                                        <div class="mega-item">
                                            <div class="mega-item-img">
                                                <a href="article.html">
                                                    <img alt="" src="images/product/4.jpg" />
                                                </a>
                                                <a href="#" class="cate-tag">Computing</a>
                                            </div>
                                            <p>
                                                <a href="article.html">
                                                    Six big ways MacOS Sierra is going to change your Apple experience
                                                </a>
                                            </p>
                                            <div class="meta-post">
                                                <a href="#">
                                                    Marion	Craig
                                                </a>
                                                <em></em>
                                                <span>
                                                    21 Sep 2016
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mega-col">
                                        <div class="mega-item">
                                            <div class="mega-item-img">
                                                <a href="article.html">
                                                    <img alt="" src="images/product/5.jpg" />
                                                </a>
                                                <a href="#" class="cate-tag">Tech</a>
                                            </div>
                                            <p><a href="article.html">Messenger Bots Are Overhyped,  Growing like Crazy</a></p>
                                            <div class="meta-post">
                                                <a href="#">
                                                    Super User
                                                </a>
                                                <em></em>
                                                <span>
                                                    26 Sep 2016
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mega-col">
                                        <div class="mega-item">
                                            <div class="mega-item-img">
                                                <a href="article.html">
                                                    <img alt="" src="images/product/6.jpg" />
                                                </a>
                                                <a href="#" class="cate-tag">Business</a>
                                            </div>
                                            <p><a href="article.html">7 essential lessons from agency marketing to startup growth</a></p>
                                            <div class="meta-post">
                                                <a href="#">
                                                    Ashley Ford
                                                </a>
                                                <em></em>
                                                <span>
                                                    26 September 2016
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="video.html">Chăm sóc sức khoẻ </a>
                    </li>
                    <li>
                        <a href="computing.html">Chăm sóc trẻ</a>
                    </li>
                    <li>
                        <a href="mobile.html">Lao động việc làm</a>
                    </li>
                    <li>
                        <a href="tech.html">Giải trí </a>
                    </li>
                    <li>
                        <a href="#">Page <span></span></a>
                        <ul class="submenu">
                            <li>
                                <a href="404.html">404</a>
                            </li>
                            <li>
                                <a href="contact.html">Contact us</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="search-icon">
                    <div class="search-icon-inner">
                        <i class="fa fa-search"></i>
                    </div>
                    <div class="search-box">
                        <input type="text" placeholder="Search..." />
                        <button>Search</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header