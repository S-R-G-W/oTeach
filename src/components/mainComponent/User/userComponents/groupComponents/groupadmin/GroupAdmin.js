import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Lecture from "../groupadmin/createLecture/Lecture";
import LectureView from "../Lectures/LectureView";

export default class GroupAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lectures: [],
            members: [],
            requests: [],
            group: this.props.group,
            lecture: {}
        }
        this.getlectures = this.getlectures.bind(this)
        this.handleLecture = this.handleLecture.bind(this)
    }

    componentDidMount() {
        this.state.group.lecturesId.map(id => this.getlectures(id))
        this.state.group.membersId.map(id => this.getmembers(id))
        this.state.group.requestsId.map(id => this.getrequests(id))



    }

    handleRequest(req) {
        axios.put(`http://localhost:8000/group/group/accept/${this.state.group._id}`,{uid:req._id})
        .then((data)=>this.props.fetch())
        .catch((err)=>console.log(err))
    }

    handleLecture(obj) {
        this.setState({
            lecture: obj
        })
        console.log(this.state.lectures, this.state.requests)
    }

    getmembers(id) {
        axios.get(`http://localhost:8000/user/${id}`)
            .then((data) => {
                var memberscopy = [...this.state.members]
                memberscopy.push(data.data)
                this.setState({
                    members: memberscopy
                })
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
    getrequests(id) {


        axios.get(`http://localhost:8000/user/${id}`)
            .then((data) => {
                var requestcopy = [...this.state.requests]
                requestcopy.push(data.data)
                this.setState({
                    requests: requestcopy
                })
                console.log(this.state.requests)
            })


    }



    render() {
        return (
            <Router>
                <Switch>

                    <Route path="/createLecture">
              
                        <Lecture fetch={this.props.fetch} group={this.props.group} />
                        
                    </Route>
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
                                                           
                                                            <Link to="/createLecture"><button   class="lgx-btn lgx-btn-registration">create lecture</button></Link>
                                                            
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

                                                                {this.state.requests.map((req, key) =>
                                                                    <div >{req.username} want to join your group <Link to="/"> <button onClick={()=>this.handleRequest(req)} >accept</button></Link></div>
                                                                )}

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












