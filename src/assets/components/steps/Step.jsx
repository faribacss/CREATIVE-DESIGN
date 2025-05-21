import "./Step.css";
import StepItem from "./StepItem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const steps = [
  {
    id: 1,
    icon: "bi bi-lightbulb",
    step: "STEP 01",
    title: "Initial Consultation",
    description:
      "Conducting thorough discovery sessions to understand your business requirements and objectives. Our expert team analyzes your needs to create a customized approach.",
    delay: 200,
  },
  {
    id: 2,
    icon: "bi bi-gear",
    step: "STEP 02",
    title: "Planning & Strategy",
    description:
      "Developing comprehensive strategies and detailed project plans based on the initial consultation. We create actionable roadmaps with clear milestones and deliverables.",
    delay: 300,
  },
  {
    id: 3,
    icon: "bi bi-bar-chart",
    step: "STEP 03",
    title: "Development Phase",
    description:
      "Executing the planned strategies with precision and agility. Our team implements solutions while maintaining constant communication and progress updates.",
    delay: 400,
  },
  {
    id: 4,
    icon: "bi bi-check2-circle",
    step: "STEP 04",
    title: "Launch & Support",
    description:
      "Ensuring smooth deployment and providing ongoing support for implemented solutions. We monitor performance and make necessary adjustments for optimal results.",
    delay: 500,
  },
];
function Step() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="step-section">
      <div className="container mt-5" data-aos="fade-up" data-aos-delay="100">
        <span className="step-title">STEPS</span>
        <h1 className="step-heading mb-5">How We Work</h1>
      </div>
      {/* End of title section */}
      {/* Start of step section */}
      <div className="container steps">
        <div className="step-wrapper">
          {steps.map((step) => (
            <StepItem key={step.id} {...step} />
          ))}
        </div>
      </div>
    </div>
    // End of step section
  );
}

export default Step;
