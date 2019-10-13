import React, {Component}  from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";




class Dashboard extends Component{

  

  submit = () => {
        
    var start = document.getElementById("start").selectedIndex;
     var end = document.getElementById("end").selectedIndex;
     if (start == end) {
      
      window.alert("Ending Place Cannot be same as Starting Place");
     }else{
      this.props.history.push('/selectbus');
      
     }}
  



    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: "Journey Date"
        });
      };
          
 
render(){
  

    return (
        
       
            
            <div className="container">
                <div className="row">
                   
                    <div className="col-md-8 m-auto">
                        <h2 className="mt-5 text-center mb-0">Welcome</h2>
						<h1> </h1>
                    </div>
                    
                                      
                    </div>
                    <div class="book-form" id="register">
			<p>Plan Your Trip</p>
			   <form action="#" method="post">
					<div class="col-md-3 form-time-w3layouts">
							<label> Starting Point </label>
							<select class="startplace" id="start">
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
							<select class="endplace"  id="end">
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
						  <button type="button" onClick={this.submit} value="Search">Search
                              </button></div>
                              </form>
				</div>
        </div>
			
        

      
    );
}
}


export default Dashboard;