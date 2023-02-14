import './footer-foot.scss'

const FooterFoot = () => {
  return (
    <div className="footer-foot">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4">
            <span>iNek</span>
            <span>
              <span>
                &copy; {`${new Date().getFullYear()} All right reserved`}
              </span>
            </span>
          </div>
          <div className="col-12 col-sm-8">
            <div className="d-flex payment-types">
              <div>Payment</div>
              <div className="visa">Visa</div>
              <div className="master-card">
                master <span>card</span>
              </div>
              <div className="paypal">paypal</div>
              <div className="bitcoin">bitcoin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFoot;
