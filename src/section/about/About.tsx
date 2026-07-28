import Container from "../../components/container/Container";

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <p className="section-tag">— ABOUT</p>

        <h2>
          Designing with <span>empathy</span>, shipping with clarity.
        </h2>

        <div className="about-content">
          <p>
            I'm Rakshit — a product designer who believes great design is
            invisible. I care about the small details: the tap target that
            feels right, the copy that removes doubt, and the flow that saves a
            minute.
          </p>

          <p>
            My philosophy is simple — start with people, question every screen,
            and let research and clean visual craft do the heavy lifting.
          </p>
        </div>

        <div className="about-cards">
          <div className="card">
            <h4>Location</h4>
            <p>India</p>
          </div>

          <div className="card">
            <h4>Role</h4>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;