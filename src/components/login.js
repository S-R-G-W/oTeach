import React, { Component } from 'react'
import axios from 'axios'

export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    hundleLogin() {
        if (this.state.email !== '' && this.state.password !== '') {
            axios.post("http://localhost:8000/login").then((response) => { console.log(response); })
        }
    }

    render() {
        return (
            <div>

                <label>Your Email  :</label>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChange}
                />
                <br />
                <label>Your Password :</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange} />
                <br />
                <button onClick={ }>Login</button>
            </div>
        )
    }
}
