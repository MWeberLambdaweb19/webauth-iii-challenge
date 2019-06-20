import React from 'react';
import axios from 'axios';
import '../../App.css';

class Signup extends React.Component {
    state = {
        username: "",
        password: "",
        department: "",
    }

    handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const endpoint = '/auth/register';
        axios.post(endpoint, this.state)
        .then(res => {
            console.log(res.data)
            this.props.history.push('/login');
        })
        .catch(err => {
            console.log(err)
        })
        this.setState({
            username: "",
            password: "",
            department: "",
        })
    }

    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <div><label htmlFor="username">Create a username<span className="redStar">*</span></label><input onChange={this.handleChanges} id="username" name="username" placeholder="username" value={this.state.username} type="text"/></div>
            <div><label htmlFor="password">Create a password<span className="redStar">*</span></label><input onChange={this.handleChanges} id="password" name="password" placeholder="password" value={this.state.password} type="password"/></div>
            <div><label htmlFor="department">Choose a department<span className="redStar">*</span></label><input onChange={this.handleChanges} id="department" name="department" placeholder="department" value={this.state.department} type="text"/></div>
            <div><p><span className="redStar">* includes required fields</span></p></div>
            <div><button type="submit">Sign up!</button></div>
        </form>
        )
    }
}

export default Signup;