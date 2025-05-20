import './About.css'
import AOS from 'aos'   
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import aboutImg from '../../../../src/assets/img/about/about-portrait-1.webp'
import AboutItem from './AboutItem'
function About() {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',
        })
    }, [])
    return (
      <section id="About" className="about-section">
        <div className="container mb-5" data-aos="fade-up" data-aos-delay="100">
          <h1>About</h1>
          <p className="text-description">Learn More About Us</p>
        </div>
        {/* title and description End*/}
        <div className="container">
          <div className="row gx-5 align-items-center flex-wrap">
            <div className="col-lg-6">
              <div className="about-img" data-aos="fade-up" data-delay="200">
                <img src={aboutImg} className="img-fluid" alt="about" />
                <div className="about-img-overlay">
                  <p>20+</p>
                  <h5>Years of Experience</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-down"
                data-delay="400"
              >
                  <div>
                    <h2>Elevating Business Performance Through Innovation</h2>
                  </div>
                  <div>
                    <p className="p-1">
                      We focus on crafting bespoke strategies that navigate
                      complexity and deliver tangible results for our clients.
                    </p>
                  </div>
                  <div>
                    <p className="p-2">
                      Through a blend of sophisticated analytics and creative
                      problem-solving, we empower organizations to thrive in
                      rapidly evolving markets.
                    </p>
                  </div>
                <div className="about-content-bottom">
                  <div
                    className="col-lg-6 col-md-12 about-content-bottom-item"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  >
                    <i className="bi bi-check-circle-fill"></i>
                    <h3>Dedicated Team Support</h3>
                    <p>
                      Our highly skilled professionals are committed to
                      providing personalized service and impactful solutions on
                      every engagement.
                    </p>
                  </div>
                  <div
                    className="col-lg-6 col-md-12 about-content-bottom-item"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                  >
                    <i className="bi bi-lightbulb-fill"></i>
                    <h3>Forward-Thinking Approach</h3>
                    <p>
                      We focus on crafting bespoke strategies that navigate
                      complexity and deliver tangible results for our clients.
                    </p>
                  </div>
                </div>
                <div className="explore-link">
                  <a href="#Home">Explore Our Services</a>
                </div>
              </div>
            </div>
            <AboutItem />
          </div>
        </div>
      </section>
      //End About Section
    );
}

export default About