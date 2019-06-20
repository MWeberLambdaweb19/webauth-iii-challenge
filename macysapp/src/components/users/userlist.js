import React from 'react';
import axios from 'axios';
import requiresAuth from '../auth/requireAuth.js';

class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount(){
        const endpoint = '/users';
        axios.get(endpoint)
        .then(res => {
            console.log(res.data)
            this.setState({
                users: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        if (this.state.users.length === 0) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Employees of William H. Macy's Macy's</h3>
                {this.state.users.map(user =>
                    <div key={user.id}>
                        <p><strong>Employee: </strong>{user.username}</p>
                        <p><strong>Department: </strong>{user.department}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default requiresAuth(Users);