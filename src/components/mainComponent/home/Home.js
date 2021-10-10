import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <section>
                <div class="lgx-banner">
                    <div class="lgx-banner-style">
                        <div class="lgx-inner lgx-inner-fixed">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="lgx-banner-info  lgx-banner-info-white">
                                            <h3 class="subtitle">O-Teach</h3>
                                            <p class="text">Our mission <br /> Nascetur ridiculus mus. Proin porta lectus eleifend. </p>
                                            <div class="btn-area">
                                                <Link to="/signup" class="lgx-btn lgx-btn-border" >Register</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer>
                <div id="lgx-footer" class="lgx-footer">

                    <div class="lgx-footer-middle">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="lgx-footer-single">

                                        <address>
                                            51 Francis Street, Darlinghurst <br></br>
                                            NSW 2010, United States
                                        </address>
                                        <ul class="list-unstyled lgx-address-info">
                                            <li><i class="fa fa-phone"></i>+61 1900 654 368</li>
                                            <li><i class="fa fa-envelope"></i>office@educationplus.com</li>
                                            <li><i class="fa fa-envelope"></i>office2@educationplus.com.au</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="lgx-footer-single">
                                        <h2 class="title">The Education</h2>
                                        <ul class="list-unstyled">
                                            <li><a href="#">Admision Area</a></li>
                                            <li><a href="#">Guidance Documents</a></li>
                                            <li><a href="#">Help Desk</a></li>
                                            <li><a href="#">FAQ Area</a></li>
                                            <li><a href="#">Professional Point</a></li>
                                            <li><a href="#">Courses in Education</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3">
                                    <div class="lgx-footer-single">
                                        <h2 class="title">Cources</h2>
                                        <ul class="list-unstyled">
                                            <li><a href="#">Interactive Python</a></li>
                                            <li><a href="#">Advance Oracle</a></li>
                                            <li><a href="#">Basic PHP</a></li>
                                            <li><a href="#">Electronics</a></li>
                                            <li><a href="#">Java Resources</a></li>
                                            <li><a href="#">Courses Education</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </footer>
        </div>

    );
}

export default Home;
