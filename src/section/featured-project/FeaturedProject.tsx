import "./featuredProject.css";

import Button from "../../components/button/Button";
import Container from "../../components/container/Container";

import TripNest from "../../assets/Project.png";

const FeaturedProject = () => {
    return (
        <section id="work" className="featured-project">

            <Container>

                <div className="section-header">

                    <p className="section-tag">
                        FEATURED PROJECT
                    </p>

                    <h2>
                        Selected Work
                    </h2>

                    <p className="section-description">
                        A product I've designed from research to high-fidelity UI,
                        focusing on usability, aesthetics, and real-world problem solving.
                    </p>

                </div>

                <div className="project-card">

                    <div className="project-image">

                        <img
                            src={TripNest}
                            alt="TripNest UI Design"
                        />

                    </div>

                    <div className="project-content">

                        <span className="project-badge">
                            Case Study
                        </span>

                        <h3>
                            TripNest
                        </h3>

                        <p className="project-role">
                            Product Design • UX Research • UI Design
                        </p>

                        <p className="project-description">
                            TripNest is a travel planning platform that allows users
                            to organize trips, manage itineraries, collaborate with
                            friends, and track expenses—all from a single application.
                        </p>

                        <div className="project-tags">

                            <span>Figma</span>
                            <span>Design System</span>
                            <span>User Research</span>
                            <span>Prototype</span>

                        </div>

                        <div className="project-buttons">

                         
                                <a href="https://www.behance.net/gallery/253357555/TripNest-Travel-Planning-App-UIUX-Case-Study"><button className="btn">
                                    View Case Study
                                    </button></a>
                         

                         
                        </div>

                    </div>

                </div>

            </Container>

        </section>
    );
};

export default FeaturedProject;