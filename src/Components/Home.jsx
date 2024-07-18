import React from "react";

function Home() {
  return <div>



<div className="main-banner header-text" id="top">
        <div className="Modern-Slider">
          {/* Item */}
          <div className="item item-1">
            <div className="img-fill">
              <div className="text-content">
                <h4>
                  Welcome to
                  <br />
                  <p style={{ fontWeight: "bold" }}>
                    UNNATI-FINACE PERSONAL LOAN &amp; BUSINNES LOAN{" "}
                  </p>
                </h4>
                <p>
                  Instant Loan Eligibility in 2 mins
                  <br />
                  Find Lowest rate and Best Deals! <br />
                  Compare &amp; Choose from Top Banks
                </p>
                <a href="contact.html" className="filled-button">
                  contact us
                </a>
              </div>
            </div>
          </div>
          {/* // Item */}
          {/* Item */}
          <div className="item item-2">
            <div className="img-fill">
              <div className="text-content">
                <h4>Why Unnati Finserv use ?</h4>
                <p>
                  {" "}
                  Less Paperwork
                  <br />
                  Easy Application Process <br />
                  Fast Approval
                  <br />
                  Competitive Rates
                  <br />
                  Doorsteps Services
                </p>
                <a href="contact.html" className="filled-button">
                  contact us
                </a>
              </div>
            </div>
          </div>
          {/* // Item */}
        </div>
      </div>
      <a href="" type="button" class="filled-button banner-popup" data-toggle="modal" data-target="#exampleModal">Enquire Now</a>
  <div><div className="modal fade banner-popup-box" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Enquire here</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body callback-form mt-0 ">
            <div className="contact-form">
              <form id="contact" action method="post">
                <div className="row">
                  <div className="col-12">
                    <fieldset>
                      <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required />
                    </fieldset>
                  </div>
                  <div className="col-12">
                    <fieldset>
                      <input name="email" type="text" className="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required />
                    </fieldset>
                  </div>
                  <div className="col-12">
                    <fieldset>
                      <input name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number" required />
                    </fieldset>
                  </div>
                  <div className="col-12">
                    <fieldset>
                      <textarea name="message" rows={2} className="form-control" id="message" placeholder="Your Message" required defaultValue={""} />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="border-button">Submit</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Financial <em>Services</em></h2>
              <span>Aliquam id urna imperdiet libero mollis hendrerit</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src="assets/images/service_01.jpg" alt />
              <div className="down-content">
                <h4>Personal Loan</h4>
                <p>Get Instant Loan | Choose Your Amount | Enjoy the Best Rate | Decide Your Tenure</p>
                <a href className="filled-button">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src="assets/images/service_02.jpg" alt />
              <div className="down-content">
                <h4>Business Loan</h4>
                <p>Quick approvals| Competitive interest rates| Extended loan Tenure| Hassle-Free</p>
                <a href className="filled-button">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src="assets/images/home-loa.jpg" alt />
              <div className="down-content">
                <h4>Home Loan</h4>
                <p>Competitive Rates | Flexible Tenure | Doorstep Service | 100% Transparency </p>
                <a href className="filled-button">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
  <div className="Bank-Network"><h2>Bank in our <em>Network</em></h2>
    <div className="partners">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="owl-partners owl-carousel">
              <div className="partner-item">
                <img src="assets/images/Adhar-finnace.png" title={1} alt={1} />
              </div>
              <div className="partner-item">
                <img src="assets/images/bajaj.png" title={2} alt={2} />
              </div>
              <div className="partner-item">
                <img src="assets/images/bob.png" title={3} alt={3} />
              </div>
              <div className="partner-item">
                <img src="assets/images/Canera.png" title={4} alt={4} />
              </div>
              <div className="partner-item">
                <img src="assets/images/city-bank.png" title={5} alt={5} />
              </div>
              <div className="partner-item">
                <img src="assets/images/dcb-bank.png" title={5} alt={5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="fun-facts mt-0">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="left-content">
            <span>Lorem ipsum dolor sit amet</span>
            <h2>Our solutions for your <em>business growth</em></h2>
            <p>Pellentesque ultrices at turpis in vestibulum. Aenean pretium elit nec congue elementum. Nulla luctus laoreet porta. Maecenas at nisi tempus, porta metus vitae, faucibus augue. 
              <br /><br />Fusce et venenatis ex. Quisque varius, velit quis dictum sagittis, odio velit molestie nunc, ut posuere ante tortor ut neque.</p>
            <a href className="filled-button">Read More</a>
          </div>
        </div>
        <div className="col-md-6 align-self-center">
          <div className="row">
            <div className="col-md-6">
              <div className="count-area-content">
                <div className="count-digit">945</div>
                <div className="count-title">Work Hours</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="count-area-content">
                <div className="count-digit">1280</div>
                <div className="count-title">Great Reviews</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="count-area-content">
                <div className="count-digit">578</div>
                <div className="count-title">Projects Done</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="count-area-content">
                <div className="count-digit">26</div>
                <div className="count-title">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="more-info">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="more-info-content">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image">
                  <img src="assets/images/more-info.jpg" alt />
                </div>
              </div>
              <div className="col-md-6 align-self-center">
                <div className="right-content">
                  <span>Who we are</span>
                  <h2>Get to know about <em>our company</em></h2>
                  <p>Curabitur pulvinar sem a leo tempus facilisis. Sed non sagittis neque. Nulla conse quat tellus nibh, id molestie felis sagittis ut. Nam ullamcorper tempus ipsum in cursus<br /><br />Praes end at dictum metus. Morbi id hendrerit lectus, nec dapibus ex. Etiam ipsum quam, luctus eu egestas eget, tincidunt</p>
                  <a href="#" className="filled-button">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="testimonials">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>What they say <em>about us</em></h2>
            <span>testimonials from our greatest clients</span>
          </div>
        </div>
        <div className="col-md-12">
          <div className="owl-testimonials owl-carousel">
            <div className="testimonial-item">
              <div className="inner-content">
                <h4>George Walker</h4>
                <span>Chief Financial Analyst</span>
                <p>"Nulla ullamcorper, ipsum vel condimentum congue, mi odio vehicula tellus, sit amet malesuada justo sem sit amet quam. Pellentesque in sagittis lacus."</p>
              </div>
              <img src="http://placehold.it/60x60" alt />
            </div>
            <div className="testimonial-item">
              <div className="inner-content">
                <h4>John Smith</h4>
                <span>Market Specialist</span>
                <p>"In eget leo ante. Sed nibh leo, laoreet accumsan euismod quis, scelerisque a nunc. Mauris accumsan, arcu id ornare malesuada, est nulla luctus nisi."</p>
              </div>
              <img src="http://placehold.it/60x60" alt />
            </div>
            <div className="testimonial-item">
              <div className="inner-content">
                <h4>David Wood</h4>
                <span>Chief Accountant</span>
                <p>"Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique."</p>
              </div>
              <img src="http://placehold.it/60x60" alt />
            </div>
            <div className="testimonial-item">
              <div className="inner-content">
                <h4>Andrew Boom</h4>
                <span>Marketing Head</span>
                <p>"Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis."</p>
              </div>
              <img src="http://placehold.it/60x60" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="callback-form">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Request a <em>call back</em></h2>
            <span>Etiam suscipit ante a odio consequat</span>
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact-form">
            <form id="contact" action method="post">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="email" type="text" className="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="location" type="text" className="form-control" id="location" placeholder="Location" required />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <fieldset>
                    <select className="form-control" id="loan_type" name="loan_type" required="required">
                      <option value>Please Select Loan*</option>
                      <option selected="selected">Personal Loan</option>
                      <option>Business Loan</option>
                      <option>Home Loan</option>
                      <option>Credit Card</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <fieldset>
                    <input name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number" required />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <fieldset>
                    <textarea name="message" rows={2} className="form-control" id="message" placeholder="Your Message" required defaultValue={""} />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="border-button">Send Message</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="partners">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="owl-partners owl-carousel">
            <div className="partner-item">
              <img src="assets/images/client-01.png" title={1} alt={1} />
            </div>
            <div className="partner-item">
              <img src="assets/images/client-01.png" title={2} alt={2} />
            </div>
            <div className="partner-item">
              <img src="assets/images/client-01.png" title={3} alt={3} />
            </div>
            <div className="partner-item">
              <img src="assets/images/client-01.png" title={4} alt={4} />
            </div>
            <div className="partner-item">
              <img src="assets/images/client-01.png" title={5} alt={5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
;
}

export default Home;
