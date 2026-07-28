import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { ArrowRight, Download } from "lucide-react";
import profile from "../../assets/profile.jpeg"; // Replace with your image

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-blur hero-blur-1"></div>
      <div className="hero-blur hero-blur-2"></div>

      <Container>

        <div className="hero-wrapper">

          {/* LEFT */}

          <div className="hero-left">

            <div className="availability">
              <span className="availability-dot"></span>
              <span>Available for Work</span>
            </div>

            <p className="hero-small">
              HI, I'M
            </p>

            <h1>
              Rakshit <br />
              <span>Gautam.</span>
            </h1>

            <p className="hero-title">
              Product Designer crafting thoughtful digital experiences.
            </p>

            <p className="hero-description">
              I design intuitive mobile and web experiences through user
              research, interaction design, and scalable design systems.
              My goal is to transform complex problems into simple,
              meaningful experiences that people genuinely enjoy using.
            </p>

            <div className="hero-buttons">

              <Button>
                <a href="#work">View Projects</a>
                <ArrowRight size={18} />
              </Button>

              <Button>
                <Download size={18} />
                Resume
              </Button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="hero-right">

            <div className="hero-image-wrapper">

              <img
                src={profile}
                alt="Rakshit Gautam"
                className="hero-image"
              />

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Hero;