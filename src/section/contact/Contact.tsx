import "./contact.css";

import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import {
  Mail,
  MapPin,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>

        <div className="contact-card">

          <div className="contact-left">

            <p className="section-tag">CONTACT</p>

            <h2>Let's Work Together.</h2>

            <p className="contact-text">
              I'm a UI/UX Designer passionate about designing meaningful
              digital experiences. I'm currently open to internships,
              freelance work, and full-time opportunities.
            </p>

            <div className="contact-info">

              <div className="info-item">
                <Mail size={20} />
                <span>rakshit1771@gmail.com</span>
              </div>

           

              <div className="info-item">
                <MapPin size={20} />
                <span>India</span>
              </div>

            </div>

          </div>

          <div className="contact-right">

            <a href="mailto:rakshit1771@gmail.com">
              <Button>
                <Mail size={18} />
                Send Email
              </Button>
            </a>

            <div className="social-links">

              <a
                href="https://www.linkedin.com/in/rakshit-gautam-62036a306"
                target="_blank"
                rel="noopener noreferrer"
              >
               <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="#0A66C2"
>
  <path d="M20.447 20.452H16.89V14.87c0-1.331-.027-3.043-1.854-3.043-1.854 0-2.137 1.448-2.137 2.944v5.681H9.342V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM7.119 20.452H3.555V9h3.564v11.452z"/>
</svg>
                <span>LinkedIn</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://www.behance.net/rakshitgautam6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Briefcase size={20} />
                <span>Behance</span>
                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Contact;