import React from "react";

function Addmember() {
  return <div> <div className="page-heading header-text">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Add Members</h1>
          <span>feel free to send us a message now!</span>
        </div>
      </div>
    </div>
  </div>
  <div className="callback-form contact-us mt-0">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Send us a <em>message</em></h2>
            <span>Suspendisse a ante in neque iaculis lacinia</span>
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact-form">
            <form id="contact" action method="get">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required />
                  </fieldset>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="email" type="text" className="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required />
                  </fieldset>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your Message" required defaultValue={""} />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="filled-button">Send Message</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="partners contact-partners">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="owl-partners owl-carousel">
            <div className="partner-item">
              <img src="assets/images/client-01.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
;
}

export default Addmember;
