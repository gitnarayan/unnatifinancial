import React from "react";

function Contactus() {
  return <div>
     <div className="page-heading header-text">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Contact Us</h1>
          <span>feel free to send us a message now!</span>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-information">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="contact-item">
            <i className="fa fa-phone" />
            <h4>Phone</h4>
            <a href="#">+91 6309-04115</a><br />
            <a href="#">+91 97133-58678 </a><br />
            <a href="#">+91 95847-28466</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-item">
            <i className="fa fa-envelope" />
            <h4>Email</h4>
            <p>Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec cursus augue.</p>
            <a href="#">info@unnatifinance.in</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-item">
            <i className="fa fa-map-marker" />
            <h4>Location</h4>
            <p>49-A Rantalok Colony Near Hotel Grand Giriraj, 
              Vijay Nagar Indore. M.P. 452010 </p>
            <a href="#">View on Google Maps</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="callback-form contact-us">
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
  <div id="map">
    {/* How to change your own map point
1. Go to Google Maps
2. Click on your location point
3. Click "Share" and choose "Embed map" tab
4. Copy only URL and paste it within the src="" field below
*/}
    <iframe src="https://maps.google.com/maps?q=Av.+Lúcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="500px" frameBorder={0} style={{border: 0}} allowFullScreen />
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
  </div>
</div>
;
}

export default Contactus;
