import './AboutItem.css'
import { useEffect } from 'react'
import AOS from 'aos'   
import 'aos/dist/aos.css'
import img1 from '../../../assets/img/person/person-f-1.webp'
import img2 from '../../../assets/img/person/person-f-2.webp'
import img3 from '../../../assets/img/person/person-f-3.webp'
import img4 from '../../../assets/img/person/person-f-4.webp'
import Items from './Items'

const data = [
    {
        id: 1,
        star: ['fill', 'fill', 'fill', 'fill'],
        desc: "Their dedication to delivering superior solutions and their meticulous attention to detail have profoundly impacted our corporate growth trajectory.",
        img: img1,
        name: "Eleanor Vance",
        job: "Operations Manager"
    },
    {
        id: 2,
        star: ['fill', 'fill', 'fill', 'fill'],
        desc: "Their dedication to delivering superior solutions and their meticulous attention to detail have profoundly impacted our corporate growth trajectory.",
        img: img2,
        name: "Eleanor Vance",
        job: "Operations Manager"
    },
    {
        id: 3,
        star: ['fill', 'fill', 'fill', 'fill'],
        desc: "Their dedication to delivering superior solutions and their meticulous attention to detail have profoundly impacted our corporate growth trajectory.",
        img: img3,
        name: "Eleanor Vance",
        job: "Operations Manager"
    },
    {
        id: 4,
        star: ['fill', 'fill', 'fill', 'fill'],
        desc: "Their dedication to delivering superior solutions and their meticulous attention to detail have profoundly impacted our corporate growth trajectory.",
        img: img4,
        name: "Eleanor Vance",
        job: "Operations Manager"
    }
]

function AboutItem() {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',
        })
    }, [])
    return (
      <section className="rolling-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about-item-scroll" data-aos="fade-down" data-aos-delay="700">
                <h2>Our Clients Speak Highly</h2>
                <p>
                  Hear directly from those who have experienced the impact of
                  our partnership and achieved their strategic goals.
                </p>
                <div className="icons">
                  <i className="bi bi-arrow-left"></i>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex gap-5 scroll-item position-relative">
              {data.map((item) => (
                <Items key={item.id} {...item}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutItem