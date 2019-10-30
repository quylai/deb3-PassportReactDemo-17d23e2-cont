import React, {Component} from 'react';
import axios from 'axios';

class RegisterForm extends Component {

    constructor(props) {
			super(props);
			this.state = {
				username: '',
				password: '',
				email: '',
				first_name: '',
				last_name: ''
			}
    }

    loginSubmit = (event) => {
        event.preventDefault();
        this.setState({
            "username": event.currentTarget.username,
            "password": event.currentTarget.password,
            "email": event.currentTarget.password,
            "first_name": event.currentTarget.password,
            "last_name": event.currentTarget.password
        });
        axios.post('/api/testUserSignup', {
            'username': this.state.username,
						'password': this.state.password,
						'email': this.state.email,
						'first_name': this.state.first_name,
						'last_name': this.state.last_name
        }).then((response) => {
            console.log(response);  //t
        });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    render() {
        return(
					<div className="row">
						<div className="col-8 offset-2">
							<form>

								<div className="form-group">
									<label htmlFor="username">Username</label>
									<input type="text" className="form-control" name="username" 
													id="username" onChange={this.handleChange} 
													value={this.state.username}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="password">Password</label>
									<input type="password" className="form-control" name="password" 
													id="password" onChange={this.handleChange}
													value={this.state.password}
									/>
								</div>

								{/* ---- */}

								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input type="text" className="form-control" name="email" 
													id="email" onChange={this.handleChange} 
													value={this.state.email}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="first_name">First Name</label>
									<input type="text" className="form-control" name="first_name" 
													id="first_name" onChange={this.handleChange} 
													value={this.state.first_name}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="last_name">Last Name</label>
									<input type="text" className="form-control" name="last_name" 
													id="last_name" onChange={this.handleChange} 
													value={this.state.last_name}
									/>
								</div>

								<button 
									type="submit" className="btn btn-primary" 
									onClick={this.loginSubmit}>
										Submit 
								</button>

							</form>
						</div>
					</div>
        );
    }
}

export default RegisterForm;
