import React, { Component } from 'react'
import "./User.css";
import UserGroups from './userComponents/userGroups/userGroups';
import { Link } from "react-router-dom";
import axios from 'axios'



export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    };
  }



  render() {
    return (
        <section>
        <div id="lgx-blog" class="lgx-blog lgx-blog-normal">
            <div class="lgx-inner">
                <div class="container">
                    <div class="row">
    
                       
                        <div class="lgx-news-single">
                           
                            <div class="text-area">
                                <h3 class="title"><a href="news-single.html">The 10 best educational websites apps to learn new stuff for free Education Issues</a></h3>
                                <p class="text">Lorem ipsum dolor sit amet, consectetuer adir elit. Aenean commodo ligula eget ...</p>
                                <div class="hits-area">
                                    <span class="date"></span>
                                </div>
                                <div class="text-bottom">
                                    <a class="date" href="#">25 July 2016</a>
                                    <a class="link" href="news-single.html"><i class="fa  fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="lgx-news-single">
                            
                            <div class="text-area">
                                <h3 class="title"><a href="news-single.html">UX Education: Designing free Online Learning Curriculum</a></h3>
                                <p class="text">Lorem ipsum dolor sit amet, consectetuer adir elit. Aenean commodo ligula eget ...</p>
                                <div class="hits-area">
                                    <span class="date"></span>
                                </div>
                                <div class="text-bottom">
                                    <a class="date" href="#">25 July 2016</a>
                                    <a class="link" href="news-single.html"><i class="fa  fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div> 
                        <div class="lgx-news-single">
                         
                            <div class="text-area">
                                <h3 class="title"><a href="news-single.html">The digital revolution in higher education has already happened</a></h3>
                                <p class="text">Lorem ipsum dolor sit amet, consectetuer adir elit. Aenean commodo ligula eget ...</p>
                                <div class="hits-area">
                                    <span class="date"></span>
                                </div>
                                <div class="text-bottom">
                                    <a class="date" href="#">25 July 2016</a>
                                    <a class="link" href="news-single.html"><i class="fa  fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div> 
                        <div class="lgx-news-single">
                            
                            <div class="text-area">
                                <h3 class="title"><a href="news-single.html">I no longer understand my PhD dissertation on Education</a></h3>
                                <p class="text">Lorem ipsum dolor amet, consectetuer adir elit. Aenean commodo ligula dolor ...</p>
                                <div class="hits-area">
                                    <span class="date"></span>
                                </div>
                                <div class="text-bottom">
                                    <a class="date" href="#">25 July 2016</a>
                                    <a class="link" href="news-single.html"><i class="fa  fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div> 
                        <div class="lgx-news-single">
                           
                            <div class="text-area">
                                <h3 class="title"><a href="news-single.html">I no longer understand my PhD dissertation on Education</a></h3>
                                <p class="text">Lorem ipsum dolor amet, consectetuer adir elit. Aenean commodo ligula dolor ...</p>
                                <div class="hits-area">
                                    <span class="date"></span>
                                </div>
                                <div class="text-bottom">
                                    <a class="date" href="#">25 July 2016</a>
                                    <a class="link" href="news-single.html"><i class="fa  fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div> 
                        <div class="lgx-news-single">
                           
                            <div class="text-area">
                                <h3 class="title"><a href="news-single.html">I no longer understand my PhD dissertation on Education</a></h3>
                                <p class="text">Lorem ipsum dolor amet, consectetuer adir elit. Aenean commodo ligula dolor ...</p>
                                <div class="hits-area">
                                    <span class="date"></span>
                                </div>
                                <div class="text-bottom">
                                    <a class="date" href="#">25 July 2016</a>
                                    <a class="link" href="news-single.html"><i class="fa  fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div> 
                        <div class="lgx-news-single">
                            
                            <div class="text-area">
                                <h3 class="title"><a href="news-single.html">UX Education: Designing free Online Learning Curriculum</a></h3>
                                <p class="text">Lorem ipsum dolor sit amet, consectetuer adir elit. Aenean commodo ligula eget ...</p>
                                <div class="hits-area">
                                    <span class="date"></span>
                                </div>
                                <div class="text-bottom">
                                    <a class="date" href="#">25 July 2016</a>
                                    <a class="link" href="news-single.html"><i class="fa  fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div> 
                        <div class="lgx-news-single">
                            
                            <div class="text-area">
                                <h3 class="title"><a href="news-single.html">The digital revolution in higher education has already happened</a></h3>
                                <p class="text">Lorem ipsum dolor sit amet, consectetuer adir elit. Aenean commodo ligula eget ...</p>
                                <div class="hits-area">
                                    <span class="date"></span>
                                </div>
                                <div class="text-bottom">
                                    <a class="date" href="#">25 July 2016</a>
                                    <a class="link" href="news-single.html"><i class="fa  fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div> 
                        <div class="lgx-news-single">
                       
                            <div class="text-area">
                                <h3 class="title"><a href="news-single.html">I no longer understand my PhD dissertation on Education</a></h3>
                                <p class="text">Lorem ipsum dolor amet, consectetuer adir elit. Aenean commodo ligula dolor ...</p>
                                <div class="hits-area">
                                    <span class="date"></span>
                                </div>
                                <div class="text-bottom">
                                    <a class="date" href="#">25 July 2016</a>
                                    <a class="link" href="news-single.html"><i class="fa  fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div> 
    
                    </div>
                </div>
            </div>
        </div>
    </section>
 )}
}



