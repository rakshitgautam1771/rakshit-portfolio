import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

import {
  Mail,
  Briefcase,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <p className="section-tag">— CONTACT</p>

        <h2>Let's Build Something Great Together.</h2>

        <p className="contact-description">
          I'm currently looking for UI/UX internships, freelance opportunities,
          and exciting product design projects. If you think we'd be a good fit,
          let's connect.
        </p>

        <div className="contact-actions">
          <a
            href="rakshit1771@gmail.com"
            className="contact-btn"
          >
            <Button>
              <Mail size={18} />
             rakshit1771@gmail.com
            </Button>
          </a>
        </div>

        <div className="contact-links">

      <a
  href="https://www.linkedin.com/in/rakshit-gautam-62036a306?utm_source=share_via&utm_content=profile&utm_medium=member_android"
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

  <ExternalLink size={16} />
</a>

          <a
            href="https://www.behance.net/rakshitgautam6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Briefcase size={20} />
            <span>Behance</span>
            <ExternalLink size={16} />
          </a>

        </div>
      </Container>
    </section>
  );
};

export default Contact;