import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }

    handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const endpoint = '/auth/login';
        axios.post(endpoint, this.state)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/userlist');
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <div><label htmlFor="username"></label><input onChange={this.handleChanges} id="username" name="username" placeholder="username" value={this.state.username} type="text"/></div>
            <div><label htmlFor="password"></label><input onChange={this.handleChanges} id="password" name="password" placeholder="password" value={this.state.password} type="password"/></div>
            <div><button type="submit">Log in!</button></div>
        </form>
        )
    }
}

export default Login