import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 white-text center-align">
            <h4>
              <b>Book Your Tickets</b> {" "}
                      </h4>
            <p className="flow-text white-text text-darken-1">
            Trusted by Over 8 Million Indians. Get Ticket on SMS; No More Printout. Book Now. Search Buses. Live Tracking. Low Prices. Highlights: Providing Good Customer Service, Offering Low Prices.
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large black-text waves-effect waves-light hoverable orange accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect orange black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;