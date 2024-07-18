import React from "react";

function Ourservices() {
  return <div>  <div className="page-heading header-text">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Our Services</h1>
          <span>We are over 20 years of experience</span>
        </div>
      </div>
    </div>
  </div>
  <div className="single-services">
    <div className="container">
      <div className="row" id="tabs">
        <div className="col-md-4">
          <ul>
            <li><a href="#tabs-1">Home Loan <i className="fa fa-angle-right" /></a></li>
            <li><a href="#tabs-2">Bussiness Loan <i className="fa fa-angle-right" /></a></li>
            <li><a href="#tabs-3">Personal Loan <i className="fa fa-angle-right" /></a></li>
            <li><a href="#tabs-4">commercial Loan <i className="fa fa-angle-right" /></a></li>
            <li><a href="#tabs-5">Ccod Loan <i className="fa fa-angle-right" /></a></li>
          </ul>
        </div>
        <div className="col-md-8">
          <section className="tabs-content">
            <article id="tabs-1">
              <img src="assets/images/home-loa.jpg" alt />
              <h4>Home Loan</h4>
              <p>Vivamus sed feugiat elit. Pellentesque pretium, massa at placerat vehicula, neque turpis pulvinar tortor, eget convallis lorem odio non tortor. Donec massa est, fermentum sit amet felis ac, maximus luctus elit. Vivamus aliquet, dolor id imperdiet imperdiet, dui diam aliquet dui, a euismod metus enim ac velit. Vivamus eu tristique odio, vel tristique quam.
                <br /><br />Proin eu molestie risus. Etiam suscipit pretium odio, at consectetur nisi. Sed ut dolor in augue cursus ultrices. Vivamus mauris turpis, auctor vel facilisis in, tincidunt vel diam. Sed vitae scelerisque orci. Nunc non magna orci. Aliquam commodo mauris ante.</p>
            </article>
            <article id="tabs-2">
              <img src="assets/images/single_service_02.jpg" alt />
              <h4>Bussiness Loan</h4>
              <p>Sed ut dolor in augue cursus ultrices. Vivamus mauris turpis, auctor vel facilisis in, tincidunt vel diam. Sed vitae scelerisque orci. Nunc non magna orci. Aliquam commodo mauris ante, quis posuere nibh vestibulum sit amet
                <br /><br />Pellentesque pretium, massa at placerat vehicula, neque turpis pulvinar tortor, eget convallis lorem odio non tortor. Donec massa est, fermentum sit amet felis ac, maximus luctus elit. Vivamus aliquet, dolor id imperdiet imperdiet, dui diam aliquet dui, a euismod metus enim ac velit. Vivamus eu tristique odio, vel tristique quam.</p>
            </article>
            <article id="tabs-3">
              <img src="assets/images/single_service_03.jpg" alt />
              <h4>Personal Loan</h4>
              <p>Mauris lobortis quam id dictum dignissim. Donec pellentesque erat dolor, cursus dapibus turpis hendrerit quis. Suspendisse at suscipit arcu. Nulla sed erat lectus. Nulla facilisi. In sit amet neque sapien. Donec scelerisque mi at gravida efficitur. Nunc lacinia a est eu malesuada. Curabitur eleifend elit sapien, sed pulvinar orci luctus eget. 
                <br /><br />Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vel ultrices nulla, ac tincidunt eros. Aenean quis tellus velit. Praesent pretium justo non auctor condimentum.</p>
            </article>
            <article id="tabs-4">
              <img src="assets/images/car.jpeg" alt />
              <h4> commercial loan </h4>
              <p>Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam.</p>
            </article>
            <article id="tabs-5">
              <img src="assets/images/ccod.jpg" alt />
              <h4> ccod</h4>
              <p>Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam.</p>
            </article>
          </section>
        </div>
      </div>
    </div>
  </div>
  <div className="callback-form callback-services">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Request a <em>call back</em></h2>
            <span>interdum nisl ac urna tempor mollis</span>
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact-form">
            <form id="contact" action method="post">
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
              <img src="assets/images/client-01.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
;
}

export default Ourservices;
