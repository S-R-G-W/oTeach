import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function LectureView({ lecture }) {
  return (
    <div class="lgx-blog lgx-banner ">
<section>
  <div id="lgx-news" class="lgx-news lgx-teacher-single">
    <div class="lgx-inner">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <article>
              <header>
                <div class="lgx-single-service">
                <div  class="lgx-single-service lgx-single-service"> 

                <h2 class='title'>{lecture.name}</h2>
                <p> {lecture.description}</p>
                </div>
                  
                  <div class="lgx-share">
                    <ul class="list-inline lgx-social">
                    <iframe
          width="420"
          height="315"
          src={lecture.videoUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
                    </ul>
                    

                        <Link to="/"><button   class="lgx-btn lgx-btn-registration">back to group</button></Link>
                        
                  </div>
                </div>
            
              </header>
              <section></section>
           
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

  );
}

export default LectureView;
