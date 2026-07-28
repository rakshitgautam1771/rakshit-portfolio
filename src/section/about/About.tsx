import "./about.css";

import Container from "../../components/container/Container";

const About = () => {
    return (
        <section id="about" className="about">

            <Container>

                <div className="section-header">

                    <p className="section-tag">
                        ABOUT ME
                    </p>

                    <h2>
                        Passionate About Building
                        Beautiful User Experiences
                    </h2>

                </div>

                <div className="about-wrapper">

                    {/* Left */}

                    <div className="about-content">

                        <p>
                            I'm Rakshit Gautam, a Product Designer passionate
                            about creating intuitive and visually engaging
                            digital experiences.
                        </p>

                        <p>
                            My focus is on solving real user problems through
                            research, interaction design, and clean visual
                            interfaces. I enjoy transforming complex ideas into
                            simple, meaningful products.
                        </p>

                        <p>
                            Currently I'm building case studies, improving my
                            design process, and exploring design systems,
                            accessibility, and modern product thinking.
                        </p>

                    </div>

                    {/* Right */}

                    <div className="about-cards">

                        <div className="about-card">

                            <h3>1</h3>

                            <span>
                               Project
                            </span>

                        </div>

                        <div className="about-card">

                            <h3>15+</h3>

                            <span>
                                UI Screens
                            </span>

                        </div>

                        <div className="about-card">

                            <h3>100%</h3>

                            <span>
                                User Focused
                            </span>

                        </div>

                        <div className="about-card">

                            <h3>∞</h3>

                            <span>
                                Learning Every Day
                            </span>

                        </div>

                    </div>

                </div>

            </Container>

        </section>
    );
};

export default About;