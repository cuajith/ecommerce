import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
import axios from 'axios'

export class Registration extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeFullName(event) {
        this.setState({
            fullName: event.target.value
        })
    }
    changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault()
        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:4000/app/signup', registered)
            .then(res => {
                if (res.data === 'success') {
                    //localStorage.setItem("token", res.data);
                    //localStorage.setItem('user', res.data)
                    console.log(res.data)
                    confirmAlert({
                        title: 'Success',
                        message: 'Thank you, Registred Successfully, please check your mail',
                        buttons: [
                            {
                                label: 'OK',
                                onClick: () => window.location.reload()
                            },
                        ]
                    })
                    //window.location.reload();           
                }
                if (res.data === 'failed-1') {
                    //localStorage.setItem("token", res.data);
                    //localStorage.setItem('user', res.data)
                    console.log(res.data)
                    confirmAlert({
                        title: 'Error',
                        message: 'Please check the data',
                        buttons: [
                            {
                                label: 'OK',
                                onClick: () => window.location.reload()
                            },
                        ]
                    })
                    //window.location.reload();           
                }
                if (res.data === 'failed') {
                    console.log(res)
                    confirmAlert({
                        title: 'Failed',
                        message: 'You are already Registred, Please contact the adminitrator',
                        buttons: [
                            {
                                label: 'OK',
                                onClick: () => window.location.reload()
                            },
                        ]
                    })
                }

            }).catch(function (res) {
                console.log(res)
            });
        

        {/*window.location ='/' */ }

        this.setState({
            fullName: "",
            username: "",
            email: "",
            password: ""
        })
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type="text"
                                placeholder='Full Name'
                                onChange={this.changeFullName}
                                pattern="[a-zA-Z]+"
                                value={this.state.fullName}
                                className="form-control form-group"
                            />

                            <input type='text'
                                placeholder='User Name'
                                onChange={this.changeUsername}
                                pattern="[a-zA-Z0-9]+"
                                value={this.state.username}
                                className='form-control form-group'
                            />

                            <input type='text'
                                placeholder='Email'
                                onChange={this.changeEmail}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                value={this.state.email}
                                className='form-control form-group'
                            />

                            <input type="text"
                                placeholder='Password'
                                onChange={this.changePassword}
                                value={this.state.password}
                                className='form-control form-group'
                            />

                            <input type="submit" className='btn btn-primary btn-block' value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration