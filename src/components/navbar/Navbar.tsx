import Button from "../button/Button";
import Container from "../container/Container";

const Navbar = () => {
  return (
    <header>
      <Container>
        <nav>
          <div className="logo">
           <a href="#home"> Portfolio</a>
          </div>

          <ul className="nav-links">
            <li>
              <a href="#work">Work</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <a href="#contact">
            <Button>
              Let's Talk
            </Button>
          </a>

        </nav>
      </Container>
    </header>
  );
};

export default Navbar;