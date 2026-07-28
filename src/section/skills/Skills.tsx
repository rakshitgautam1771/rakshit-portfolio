import Container from "../../components/container/Container";
import {
  Search,
  PencilRuler,
  LayoutTemplate,
  Layers3,
  MonitorSmartphone,
  GitBranch,
  Accessibility,
  Component,
} from "lucide-react";

import {
  SiFigma,
} from "react-icons/si";

const skills = [
  {
    title: "Figma",
    icon: <SiFigma size={42} color="#F24E1E" />,
  },

  {
    title: "UX Research",
    icon: <Search size={42} color="#2563EB" />,
  },
  {
    title: "UI Design",
    icon: <PencilRuler size={42} color="#8B5CF6" />,
  },
  {
    title: "Wireframing",
    icon: <LayoutTemplate size={42} color="#F59E0B" />,
  },
  {
    title: "Prototyping",
    icon: <Layers3 size={42} color="#10B981" />,
  },
  {
    title: "Design Systems",
    icon: <Component size={42} color="#EF4444" />,
  },
  {
    title: "Responsive Design",
    icon: <MonitorSmartphone size={42} color="#06B6D4" />,
  },
  {
    title: "User Flows",
    icon: <GitBranch size={42} color="#7C3AED" />,
  },
  {
    title: "Accessibility",
    icon: <Accessibility size={42} color="#14B8A6" />,
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <p className="section-tag">— SKILLS</p>

        <h2>Craft Toolkit.</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <div className="skill-icon">{skill.icon}</div>

              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;