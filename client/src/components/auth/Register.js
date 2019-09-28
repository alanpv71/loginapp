import React, {Component}  from "react";
import axios from 'axios';

class Register extends Component {
    state = {
        username  :"",
        email  : "",
        password : "",
        error : {}
    };
    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit= e =>{
        e.preventDefault();
        const newUser = {
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        };
        axios.post('/api/users/register',newUser).then(res=>this.props.history.push('/login')).catch(err=> this.setState({
            error : err.response.data
        })
        );
         };
     
   
    render(){
        const {username,email,password,error} = this.state;
        return (
            
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h2 className="mt-5 text-center mb-0">Register Here</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" name="username" value ={username} onChange={this.handleChange} className={error.type ==="username" ? "is-invalid form-control" : "form-control"} placeholder="Username"/><span className="invalid-feedback">{error.msg}</span>
    
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" value = {email} onChange={this.handleChange} className={error.type ==="email" ? "is-invalid form-control" : "form-control"} placeholder="Email"/><span className="invalid-feedback">{error.msg}</span>
                                    
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" value={password} onChange={this.handleChange} className={error.type ==="password" ? "is-invalid form-control" : "form-control"} placeholder="Password"/><span className="invalid-feedback">{error.msg}</span>
                                    </div>  
                                    <input type="submit" className="btn btn-primary justify-content-center d-flex w-100" value="Register"/>
                                
                            </form>
                        </div>
                    </div>
                </div>
    
            </React.Fragment>
        );
    }
    }
    

export default Register;