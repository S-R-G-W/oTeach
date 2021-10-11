import React from "react";

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
                <h1>{lecture.name}</h1>
                  <h3 class="subtitle"> {lecture.description}</h3>
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
