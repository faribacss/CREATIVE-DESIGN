function ContactItem({icon, title, address, delay}){
    return (
      <div
        className="contact-us col-lg-4 mt-5"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div className="contact-items">
          <div className="contact-icon">
            <i className={icon}></i>
          </div>
          <div className="contact-info">
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: address }} />
          </div>
        </div>
      </div>
    );
}

export default ContactItem;