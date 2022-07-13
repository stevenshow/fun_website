import "./Projects.css";
import catfact from "../img/cat-fact-email.png";

const projects = [
  {
    name: "Cat Fact Generator",
    alt: "cat fact email screenshot",
    image: catfact,
    id: 1,
    language: "Language: Python",
    difficulty: "",
    content: `Linux is the best-known and most-used open source operating system. As an operating system, Linux is software that sits underneath all of the other software on a computer, receiving requests from those programs and relaying these requests to the computer’s hardware.`,
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-holder">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="title">{`> ${project.name}`}</div>
            <img
              className="project-image"
              src={project.image}
              alt={project.alt}
            />
            <div className="overview">
              <span className="language">{`${project.language}`}</span>
              <span className="difficulty">{`${project.difficulty}`}</span>
            </div>
            <div className="content">
              <p>{project.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
