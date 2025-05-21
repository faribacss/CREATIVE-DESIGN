import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function StepItem({icon, step, title, description, delay}) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  }, []);
  return (
    <>
        <div className="step-content" data-aos="fade-up" data-aos-delay={delay}>
          <div className="step-icon">
            <i className={icon}></i>
          </div>
          <div className="step-info">
            <span className="step-number">{step}</span>
            <h3>{title}</h3>
            <p className="step-description">
              {description}
            </p>
          </div>
        </div>
    </>
  );
}

export default StepItem