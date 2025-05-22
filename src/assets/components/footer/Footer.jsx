import './Footer.css'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-5">
          <div className="footer-top d-flex flex-wrap">
            <div className="col-lg-5 col-md-12 footer-left-title">
              <a href="#Home">Strategy</a>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </p>
              <div className="footer-left-social">
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links-title">
              <h4>Useful Links</h4>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links-title">
              <h4>Our Services</h4>
              <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphic Design</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact-title">
              <h4>Contact Us</h4>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
              <p className="mt-4">
                <strong>Phone:</strong> +1 5589 55488 55
              </p>
              <p>
                <strong>Email:</strong> info@example.com
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-items">
              <p>
                &copy; Copyright <strong>Strategy</strong>. All Rights Reserved
              </p>
              <p>
                Designed by{" "}
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;