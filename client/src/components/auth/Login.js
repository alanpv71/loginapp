import React, {Component}  from "react";
import axios from 'axios';

class Login extends Component {
    state = {
      
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
            
            email:this.state.email,
            password:this.state.password
        };
        axios.post('/api/users/login',newUser).then(res=>this.props.history.push('/dashboard')).catch(err=> this.setState({
            error : err.response.data
        })
        );
         };
     
   
    render(){
        const {email,password,error} = this.state;
        return (
            
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h2 className="mt-5 text-center mb-0">Login Here</h2>
                            <form onSubmit={this.handleSubmit}>
                                
                                <div className="form-group">
                                    <input type="email" name="email" value = {email} onChange={this.handleChange} className={error.type ==="email" ? "is-invalid form-control" : "form-control"} placeholder="Email"/><span className="invalid-feedback">{error.msg}</span>
                                    
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" value={password} onChange={this.handleChange} className={error.type ==="password" ? "is-invalid form-control" : "form-control"} placeholder="Password"/><span className="invalid-feedback">{error.msg}</span>
                                    </div>  
                                    <input type="submit" className="btn btn-primary justify-content-center d-flex w-100" value="Login"/>
                                
                            </form>
                        </div>
                    </div>
                </div>
    
            </React.Fragment>
        );
    }
    }
    

export default Login;