import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import "../../css/responsive.scss"
import logo from "../../Images/logo.jpg"
const Header = () => {
    return (
        <>
            <header id="header" class="header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-12">
                            <div class="logo"> <a href="index.html"> <img src={logo} alt="" /> </a> </div>
                        </div>
                        <div class="col-md-9 col-sm-12 header-right">
                            <div class="ad-banner float-right"> <a href="#"><img src="images/banner-ads/ad-top-header.png" class="img-fluid" alt="" /></a> </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="utf_main_nav_area clearfix utf_sticky">
                <div class="container">
                    <div class="row">
                        <nav class="navbar navbar-expand-lg col">
                            <div class="utf_site_nav_inner float-left">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                                <div id="navbarSupportedContent" class="collapse navbar-collapse navbar-responsive-collapse">
                                    <ul class="nav navbar-nav">
                                        <li class="nav-item dropdown active"> <NavLink to="/" class="nav-link" >Trang chủ </NavLink>
                                        </li>
                                        <li > <NavLink to="/ctxh" class="nav-link " data-toggle="dropdown"
                                            role="button" aria-haspopup="true" aria-expanded="false">Chính trị-Xã hội </NavLink>

                                        </li>
                                        <li>  <NavLink to="/giadinh">Gia đình</NavLink> </li>
                                        <li class="dropdown nav-item utf_mega_dropdown"> <NavLink to="/cssk" class="nav-link " data-toggle="dropdown">Chăm sóc sức khỏe </NavLink>
                                        </li>
                                        <li> <NavLink to="/chamsoctre">Chăm sóc trẻ</NavLink> </li>
                                        <li> <NavLink to="/ldvl">Lao động việc làm <i class="fa fa-angle-down"></i></NavLink>
                                        </li>
                                        <li > <NavLink to="/giaitri">Giải trí <i class="fa fa-angle-down"></i></NavLink>
                                        </li>
                                        <li > <a href="#" data-toggle="dropdown">Pháp luật <i class="fa fa-angle-down"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header