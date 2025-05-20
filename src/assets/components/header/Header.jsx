import './Header.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import heroImage from '../../../assets/img/abstract-1.png'
function Header() {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-sine',
        })
    }, [])
    return (
      <section id="Home" className="hero-section">
        <div className="container hero-container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-up">
              <div className="content">
                <div className="agency-name">
                  <h5>OUR AGENCY</h5>
                </div>
                <div className="main-heading">
                  <h1>
                    CREATIVE
                    <br />
                    DESIGN
                  </h1>
                </div>
                <div className="devider"></div>
                <div className="description">
                  <p>
                    Discover innovative strategies for impactful visual
                    communication. We transform ideas into compelling realities,
                    ensuring your brand stands out in a crowded marketplace. Our
                    dedicated team leverages cutting-edge techniques to deliver
                    exceptional results that resonate with your audience.
                  </p>
                </div>
                <div className="cta-button">
                  <a href="#services">
                    <span>EXPLORE SERVICES</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5" data-aos="zoom-out">
              <div className="hero-image">
                <img src={heroImage} className="img-fluid" alt="hero" />
              </div>
              <div className="stats-card">
                <div className="stats-number">
                  <h1>5K</h1>
                  <a href="#portfolio">
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
                <div className="stats-label">
                  <p>Successful Campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Header;