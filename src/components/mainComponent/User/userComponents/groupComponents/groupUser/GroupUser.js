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
                        <div>
                            <section>
                                <div class="lgx-blog lgx-banner ">
                                    <div class="lgx-inner">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-xs-12 col-md-8 col-md-offset-2">
                                                    <div class="lgx-registration-area">
                                                        <div class="lgx-registration">
                                                        <div  class="lgx-single-service lgx-single-service"> 

                                                            <h1 class='title'>{this.props.group.name}</h1>
                                                           </div>
                                                        
                                                            
                                                            <div class="form-group"></div>

                                                            <div>
                                                                {this.state.lectures.map((lec, key) => (
                                                                    
                                                                    <Link
                                                                        to="/viewLecture"
                                                                        onClick={() => this.handleLecture(lec)}
                                                                        key={key}
                                                                    >
                                                                     <button   class="lgx-btn lgx-btn-registration">   {lec.name}</button> <br></br>
                                                                    </Link>
                                                                   
                                                                ))}
                                                            </div>
                                                            <div>


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

                    </Route>
                </Switch>
            </Router>
        )
    }

}