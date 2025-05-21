function ServiceItem({icon, title, description, delay}) {
  return (
    <>
      <div
        className="col-sm-12 col-md-6 col-lg-4 mb-4 service-contents"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div className="service-content me-3">
          <div className="service-item-icon">
            <i className={icon}></i>
          </div>
          <div className="service-item-title">
            <a href="#">{title}</a>
          </div>
          <div className="service-item-description">
            {description}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceItem;
