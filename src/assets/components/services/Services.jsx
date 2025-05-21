import './Services.css'
import ServiceItem from './ServiceItem'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const services = [
  {
    id: 1,
    icon: "bi bi-palette",
    title: "Creative branding",
    description:
      "Nulla facilisi. Maecenas eget magna neque. Suspendisse potenti. Curabitur eleifend nisi non magna vulputate, vel condimentum libero tempus. Proin consectetur feugiat diam.",
    delay: 100,
  },
  {
    id: 2,
    icon: "bi bi-gem",
    title: "Design systems",
    description:
      "Praesent euismod varius tellus, vel bibendum nunc interdum at. Donec vehicula diam vel metus venenatis convallis. Aliquam erat volutpat. Etiam viverra magna sit amet.",
    delay: 200,
  },
  {
    id: 3,
    icon: "bi bi-megaphone",
    title: "Marketing strategies",
    description:
      "Vivamus tempor velit id magna dictum, sed fermentum nisi faucibus. Integer nec pretium sapien. Fusce tincidunt ligula et purus consequat, ac pellentesque nulla eleifend.",
    delay: 300,
  },
  {
    id: 4,
    icon: "bi bi-code-slash",
    title: "Digital platforms",
    description:
      "Cras fermentum odio eu feugiat malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et accumsan cursus. Morbi placerat nulla vel nunc viverra accumsan.",
    delay: 400,
  },
  {
    id: 5,
    icon: "bi bi-graph-up",
    title: "Growth acceleration",
    description:
      "Aenean vel augue vel nisi bibendum posuere. Phasellus in lacus quis urna sodales dignissim. Duis aliquam libero eget risus facilisis. Quisque eget libero vel nisl fringilla.",
    delay: 500,
  },
  {
    id: 6,
    icon: "bi bi-camera-video",
    title: "Media solutions",
    description:
      "Etiam efficitur lacus in diam finibus, nec ultrices est sagittis. Maecenas elementum magna sed risus faucibus, nec commodo purus facilisis. Vestibulum accumsan magna.",
    delay: 600,
  },
];

function Services() {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',
        })
    }, [])
    return (
      <section className="services-section">
        {/* service header */}
        <div className="container mb-5" data-aos="fade-up" data-aos-delay="100">
          <span className="header-title">Services</span>
          <h1 className="main-title">Check Our Services</h1>
        </div>
        {/* service main content */}
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1 className="service-title-1">Innovative business</h1>
              <h1 className="service-title-2">performance solutions</h1>
            </div>
            <div
              className="col-lg-4 mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="service-description">
                We integrate forward-thinking strategies, creative approaches,
                and state-of-the-art technologies to deliver exceptional
                customer experiences that drive growth and engage target
                markets.
              </p>
              <div className="service-btn">
                <a href="#" className="btn-service">
                  View All Services
                </a>
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        {/* service content */}
        <div className="container">
          <div className="row gy-4 d-flex mt-5 justify-content-center">
            {
              services.map((service) => (
                <ServiceItem key={service.id} {...service} />
              ))
            }
          </div>
        </div>
      </section>
    );
}

export default Services