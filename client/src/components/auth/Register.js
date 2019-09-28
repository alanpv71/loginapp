import React, {Component}  from "react";


class Register extends Component {
    
    handleSubmit(e){
        e.preventDefault();
         };
     
   
    render(){
        return (
            
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h2 className="mt-5 text-center mb-0">Register Here</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" name="username" className="form-control" placeholder="Username"/>
    
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" placeholder="Email"/>
                                    
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control" placeholder="Password"/>
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