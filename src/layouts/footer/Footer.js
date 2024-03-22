import React from 'react'

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4  col-sm-4 col-xs-12">
                        <div class="about">
                            <a href="#" class="logo">
                                <img alt="" src="images/logo_footer.png" />
                            </a>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-md-offset-1 col-sm-4 col-xs-12">
                        <h3>HOT CATEGORIES</h3>
                        <ul class="list-category">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="business.html">Chính trị - xã hội</a></li>
                            <li><a href="business.html">Gia đình</a></li>
                            <li><a href="reviews.html">Chăm sóc sức khoẻ</a></li>
                            <li><a href="video.html">Chăm sóc trẻ</a></li>
                            <li><a href="computing.html">Lao động việc làm</a></li>
                            <li><a href="mobile.html">Giải trí</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-md-offset-1 col-sm-4 col-xs-12">
                        <h3>HOT TAGS</h3>

                        <div class="list-tags">
                            <a href="#">iPhone 7</a>
                            <a href="#">News</a>
                            <a href="#">Sport</a>
                            <a href="#">Apple</a>
                            <a href="#">Alcatel</a>
                            <a href="#">Pixi 4</a>
                            <a href="#">Elon Musk </a>
                            <a href="#">Smart phone</a>
                            <a href="#">Nexus</a>
                            <a href="#">Canvas</a>

                        </div>
                    </div>
                </div>
                <div class="allright">
                    <div class="row">
                        <div class="col-sm-6 col-xs-12">
                            <p>    © 2016 <a href="#">TECH NEWS</a>. All rights reserved.</p>
                        </div>

                        <div class="col-sm-6 col-xs-12">
                            <ul class="list-social-icon list-social-icon-footer">
                                <li>
                                    <a href="#" class="facebook">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="twitter">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="google">
                                        <i class="fa fa-google"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="youtube">
                                        <i class="fa fa-youtube-play"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="pinterest">
                                        <i class="fa fa-pinterest-p"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="rss">
                                        <i class="fa fa-rss"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer