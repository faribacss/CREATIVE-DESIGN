function Items({star, desc, img, name, job}) {
    return (
      <>
        <div className="first-item col-lg-2" role="group">
          <div className="first-item-star">
            {star.map((item, index) => (
              <i key={index} className={`bi bi-star-${item}`}></i>
            ))}
            <i className="bi bi-star-half"></i>
          </div>
          <div className="first-desc">
            <p>{desc}</p>
          </div>
          <div className="first-item-img">
            <img
              src={img}
              className="img-fluid"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
            <div className="first-item-name">
              <h3>{name}</h3>
              <p>{job}</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Items;