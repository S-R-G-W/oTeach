import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Lecture from "../groupadmin/createLecture/Lecture"
import LectureView from '../Lectures/LectureView';


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

    }

    handleLecture(obj) {
        console.log(obj)
        this.setState({
            lecture: obj
        })
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
    // getrequests() {
    //     var requestsarr = []
    //     this.state.group.requestsId.map((requestId) => {
    //         axios.get(`http://localhost:8000/user/${requestId}`)
    //             .then((data) => requestsarr.push(data.data))
    //     })
    //         .then(() => this.setState({
    //             requests: requestsarr
    //         }))
    // }



    render() {
        return (
            <Router>
                <Switch>

                    <Route path="/createLecture">

                        <Lecture group={this.props.group} />
                        <Link to="/">back to group</Link>
                    </Route>
                    <Route path="/viewLecture">
                        <LectureView lecture={this.state.lecture} />
                        <Link to="/">back to group</Link>
                    </Route>
                    <Route path="/">
                        <div className='App'>
                            <h1>{this.props.group.name}</h1>
                            <Link to="/createLecture">create lecture</Link>
                            <div>
                                
                                    {this.state.lectures.map((lec, key) =>
                                        <Link to="/viewLecture" onClick={() => this.handleLecture(lec)} key={key}>{lec.name}</Link>
                                    )}
                                

                            </div>
                        </div>
                    </Route>

                </Switch>

            </Router >

        )
    }
}
