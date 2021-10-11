import React, { Component } from 'react'
import LectureView from "../Lectures/LectureView";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class GroupUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lectures: [],
            group: this.props.group,
            lecture: {}
        }
        this.getlectures = this.getlectures.bind(this)
        this.handleLecture = this.handleLecture.bind(this)
    }

    componentDidMount() {
        this.state.group.lecturesId.map(id => this.getlectures(id))

    }


    handleLecture(obj) {
        this.setState({
            lecture: obj
        })
    }

    
    getlectures(id) {
        axios.get(`http://localhost:8000/lecture/${id}`)
            .then((data) => {
                var lecturecopy = [...this.state.lectures]
                lecturecopy.push(data.data)
                this.setState({
                    lectures: lecturecopy
                })
            })

    }



    render() {
        return (
            <Router>
                <Switch>

                    <Route path="/viewLecture">
                        <LectureView lecture={this.state.lecture} />
                        
                    </Route>
                    <Route path="/">
                    <div id="lgx-services" class="lgx-blog lgx-banner ">
          <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            <div class="row">
              <div class="col-sm-6 col-md-3">
                <div class="lgx-single-service">
                 
                  <h1 class="title">{this.props.group.name}</h1>
                  
                 
                </div>
              </div>
              <div class="col-sm-6 col-md-3">
                <div class="lgx-single-service">
                
                  <div>
                 <h1 class='title'>Lectures</h1> 
                  <br></br>
                  <br></br>
                    {this.state.lectures.map((lec, key) => (
                      <Link
                        to="/viewLecture"
                        onClick={() => this.handleLecture(lec)}
                        key={key}
                      >
                         <p >{lec.name}</p>
                     
                        <br></br>
                         
                      </Link>
                      
                    ))}
                  </div>{" "}
                </div>
              </div>
             
              
            </div>
            </div>
                        
                    </Route>
                </Switch>
            </Router>
        )
    }

}