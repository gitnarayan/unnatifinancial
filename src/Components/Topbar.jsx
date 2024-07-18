import React from "react";

export default function Topbar() {
  return   <div> <div className="sub-header ">
      <div className="container ">
        <div className="row">
          <div className="col-md-8 col-xs-12">
            <ul className="left-info">
              <li><a href="#"><i className="fa fa-envelope" />info@unnatifinance.in</a></li>
              <li><a href="#"><i className="fa fa-phone" />6309-04115</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="right-icons">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-behance" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


}
