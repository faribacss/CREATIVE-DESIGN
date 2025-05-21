import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function Items({star, desc, img, name, job}) {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',
        })
    }, [])
    return (
      <>
        <div
          className="first-item col-md-5 col-sm-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div>
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
        </div>
      </>
    );
}

export default Items;