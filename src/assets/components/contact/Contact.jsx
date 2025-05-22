import "./Contact.css";
import ContactItem from "./ContactItem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const contactItems = [
  {
    id: 1,
    icon: "bi bi-geo-alt",
    title: "Our Address",
    address: "1842 Maple Avenue, Portland, Oregon 97204",
    delay: "200",
  },
  {
    id: 2,
    icon: "bi bi-envelope",
    title: "Email Address",
    address: "info@example.com <br /> contact@example.com",
    delay: "400",
  },
  {
    id: 3,
    icon: "bi bi-headset",
    title: "Hours of Operation",
    address: "Sunday-Fri: 9 AM - 6 PM <br /> Saturday: 9 AM - 4 PM",
    delay: "600",
  },
];

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div data-aos="fade-up" data-aos-delay="100">
            <span>CONTACT</span>
            <h2>LET`S CONNECT</h2>
          </div>
          <div className="row d-flex flex-wrap justify-content-center">
            {contactItems.map((item) => (
              <ContactItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96779.56628236092!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center!5e0!3m2!1sen!2sus!4v1747921967235!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <section className="contact-form">
        <div className="container">
          <form>
            <div className="row">
              <div className="map-overlay">
                <h1>Get in Touch</h1>
                <div className="form-items">
                  <div className="col-md-12 name-email">
                    <div className="name-email-item">
                      <i className="bi bi-person"></i>
                      <input type="text" placeholder="First name" />
                    </div>
                    <div className="name-email-item">
                      <i className="bi bi-envelope"></i>
                      <input type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-md-12 subject">
                    <i className="bi bi-text-left"></i>
                    <input type="text" placeholder="Subject" />
                  </div>
                  <div className="col-md-12 message">
                    <i className="bi bi-chat-dots"></i>
                    <textarea placeholder="Message" rows={5}></textarea>
                  </div>
                  <button type="submit" className="btn-submit">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
    // End of Contact Section
  );
}

export default Contact;
