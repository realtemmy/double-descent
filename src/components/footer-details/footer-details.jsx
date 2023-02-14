import Logo from '../Logo/logo';

import './footer-details.scss';

const FooterDetails = () => {
  return (
    <div className="footer-details">
      <div className="container">
        <div className="row">
          <div className="col-12 order-md-2 col-md-6 col-lg-4 order-lg-1">
            <div className="logo">
              <Logo />
            </div>
            <p className="desc-text">
              No 1 online Store for gadgets, Phone and Phone accessories,
              Computer accessories, game consoles, cameras and accessories, etc.
            </p>
            <div className="d-flex justify-content-between mt-3 social-icons">
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="col-6 col-lg-2 order-lg-1">
            <h5>Quick links</h5>
            <div className="links">
              <div>About us</div>
              <div>Contact us</div>
              <div>Products</div>
              <div>Login</div>
              <div>Sign up</div>
            </div>
          </div>
          <div className="col-6 col-lg-2 order-lg-1">
            <h5>Customer area</h5>
            <div className="links">
              <div>My account</div>
              <div>Orders</div>
              <div>Tracking list</div>
              <div>Terms</div>
              <div>Privacy Policy</div>
              <div>My cart</div>
            </div>
          </div>
          <div className="col-12 order-md-2 col-md-6 col-lg-4 order-lg-1">
            <h5>Contact</h5>
            <div className="fw-bold my-4">
              3, Road 101, Teachers-Estate, Ibafo.
            </div>
            <div className="d-flex justify-content-around my-4 align-items-center">
              <i className="fa-solid fa-headset fs-3 opacity-75"></i>
              <div className="info">
                <span>Have you any questions?</span>
                <div className="phone-no">+234-806-677-1225</div>
              </div>
              <button className="btn fw-bold text-uppercase chat-btn">
                Live chat
              </button>
            </div>
            <div className="row download-btns">
              <div className="col">
                <button className="d-flex btn align-items-center download-btn">
                  <i className="fa-brands fa-apple fs-3"></i>
                  <div className="btn-text">
                    Download on the <span>App Store</span>
                  </div>
                </button>
              </div>
              <div className="col">
                <button className="d-flex btn align-items-center download-btn">
                  <i className="fa-brands fa-google-play fs-3"></i>
                  <div className="btn-text">
                    Download on the <span>Google play</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterDetails;
