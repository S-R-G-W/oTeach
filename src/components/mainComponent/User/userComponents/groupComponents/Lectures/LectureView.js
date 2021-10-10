import React from 'react'

function LectureView({ lecture }) {
    return (
        <div>
            <h1>{lecture.name}</h1>
            <p>{lecture.description}</p>
            <iframe width="420" height="315"  
                src={lecture.videoUrl}  frameBorder="0" allowFullScreen>
            </iframe>


        </div>
    )
}

export default LectureView
