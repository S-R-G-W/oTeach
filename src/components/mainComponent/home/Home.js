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
                      <h2 class="subtitle">O-Teach</h2>
                      <h5 class="text">
                        O-Teach is a Website for educational
                        content and resources that offers <br/>all the students
                        everything they need in one place: lectures, resources,<br/>
                        opportunities to meet and chat with other students, and
                        more.<br/> It is an excellent way for the student and
                        the teacher to monitor student progress.
                      </h5>
                      <div class="btn-area">
                        <Link to="/signup" class="lgx-btn lgx-btn-border">
                          Register
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default Home;
