import './Team.css'
import TeamItem from './TeamItem'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import team1 from '../../../assets/img/person/person-m-12.webp'
import team2 from '../../../assets/img/person/person-m-7.webp'
import team3 from '../../../assets/img/person/person-f-4.webp'
import team4 from '../../../assets/img/person/person-f-8.webp'
import team5 from '../../../assets/img/person/person-f-2.webp'
import team6 from '../../../assets/img/person/person-f-9.webp'



const teamData = [
  {
    id: 1,
    img: team1,
    name: "Brian Doe",
    job: "Marketing",
    description:
      "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
    social: [
      "bi bi-facebook",
      "bi bi-twitter-x",
      "bi bi-linkedin",
      "bi bi-youtube",
    ],
    delay: 100,
  },
  {
    id: 2,
    img: team3,
    name: "Sarah Jhonson",
    job: "Product Manager",
    description:
      "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
    social: [
      "bi bi-facebook",
      "bi bi-twitter-x",
      "bi bi-linkedin",
      "bi bi-youtube",
    ],
    delay: 200,
  },
  {
    id: 3,
    img: team2,
    name: "Walter White",
    job: "Chief Executive Officer",
    description:
      "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
    social: [
      "bi bi-facebook",
      "bi bi-twitter-x",
      "bi bi-linkedin",
      "bi bi-youtube",
    ],
    delay: 300,
  },
  {
    id: 4,
    img: team4,
    name: "Amanda Jepson",
    job: "Accountant",
    description:
      "Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur",
    social: [
      "bi bi-facebook",
      "bi bi-twitter-x",
      "bi bi-linkedin",
      "bi bi-youtube",
    ],
    delay: 400,
  },
  {
    id: 5,
    img: team5,
    name: "Lili Anderson",
    job: "CTO",
    description:
      "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
    social: [
      "bi bi-facebook",
      "bi bi-twitter-x",
      "bi bi-linkedin",
      "bi bi-youtube",
    ],
    delay: 500,
  },
  {
    id: 6,
    img: team6,
    name: "Josepha Palas",
    job: "Operation",
    description:
      "Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel",
    social: [
      "bi bi-facebook",
      "bi bi-twitter-x",
      "bi bi-linkedin",
      "bi bi-youtube",
    ],
    delay: 600,
  },
];

function Team (){
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
        })
    }, [])
    return (
      <>
        {/* Start Team Section */}
        <section className="teams">
          <div className="container">
            <span className="team-text">TEAM</span>
            <h1 className="team-title mb-5">Check Our Team</h1>
            <div className="row gy-4">
              {
                teamData.map((item) => (
                  <TeamItem key={item.id} {...item} />
                ))
              }
            </div>
          </div>
        </section>
      </>
    // End Team Section
    );
}

export default Team;