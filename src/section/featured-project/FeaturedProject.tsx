import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import  Project from "../../assets/Project.png";

const FeaturedProject = () => {
  return (
    <section className="featured-project" id="work">

      <Container>

        <p className="section-tag">
          — FEATURED PROJECT
        </p>

        <h2>
          Selected Work.
        </h2>

        <div className="project-card">

          <div className="project-content">

            <p className="project-year">
              CASE STUDY • 2026
            </p>

            <h3>
              TripNest
            </h3>

            <p className="project-subtitle">
              All-in-One Travel Planning App
            </p>

            <p className="project-description">
              TripNest is a travel planning platform that combines destination
              discovery, itinerary planning, budgeting, bookings, saved places,
              trip memories and collaboration into one seamless experience.
            </p>

            <Button>
            <a href="https://www.behance.net/gallery/253357555/TripNest-Travel-Planning-App-UIUX-Case-Study">   View Case Study</a>
            </Button>

          </div>

          <div className="project-image">

             <img
                src={Project}
                alt="Rakshit Gautam"
                className="hero-image"
              />

          </div>

        </div>

      </Container>

    </section>
  );
};

export default FeaturedProject;