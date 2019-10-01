import React, {Component}  from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";




class Dashboard extends Component{
    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
 
render(){
  

    return (
        
        <React.Fragment>
            
            <div className="container">
                <div className="row">
                   
                    <div className="col-md-8 m-auto">
                        <h2 className="mt-5 text-center mb-0">Welcome</h2>
                    </div>
                    
                                      
                    </div>
                    <div class="book-form" id="register">
			<p>Pick your destination</p>
			   <form action="#" method="post">
					<div class="col-md-3 form-time-w3layouts">
							<label> Starting Point </label>
							<select class="form-control">
								<option>From</option>
								<option>Bangalore</option>
								<option>Mysore</option>
								<option>S.Bathery</option>
								<option>Nilambur</option>
								<option>Kozhikode</option>
							</select>
					</div>
					<div class="col-md-3 form-left-agileits-w3layouts ">
							<label> Destination</label>
							<select class="form-control">
                            <option>To</option>
								<option>Bangalore</option>
								<option>Mysore</option>
								<option>S.Bathery</option>
								<option>Nilambur</option>
								<option>Kozhikode</option>
							</select>
					</div>
					<div class="col-md-3 form-date-w3-agileits">
						        <label>Departure Date</label>
									<DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      /></div>
					<div class="col-md-3 form-left-agileits-submit">
						  <input type="submit" value="Search">
                              </input></div>
                              </form>

			
			
			







</div>
                </div>
            

        </React.Fragment>
    );
}
}


export default Dashboard;