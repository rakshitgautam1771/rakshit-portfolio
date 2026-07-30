import "./hero.css";

import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import Resume from "../../assets/Rakshit Gautam Resume.pdf";
import ProfileImage from "../../assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero-wrapper">
          {/* Left Content */}
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot"></span>
              Available for Full-Time Opportunities
            </div>

            <p className="hero-subtitle">UI / UX DESIGNER</p>

            <h1 className="hero-title">
              Designing Digital
              <br />
              Experiences That
              <span> People Love.</span>
            </h1>

            <p className="hero-description">
              I'm Rakshit, a Product Designer passionate about creating
              intuitive, user-centered digital experiences that solve real
              problems and leave a lasting impression.
            </p>

            <div className="hero-actions">
              <Button>
                <a href="#work">View Projects</a>
              </Button>
             <a href={Resume} download="Rakshit_Gautam_Resume.pdf">
  <Button className="btn btn-secondary">
    Download Resume
  </Button>
</a>
            </div>
          </div>

          {/* Right Image */}

          <div className="hero-image-wrapper">
            <img
              src={ProfileImage}
              alt="Rakshit Gautam"
              className="hero-image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
