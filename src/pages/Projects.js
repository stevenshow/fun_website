import "./Projects.css";

const projects = [
  {
    name: "Cat Fact Generator",
    id: 1,
    language: "Python",
    description: "This is the description This is the description This is the description This is the description This is the description This is the description",
    takeaway: "Another takeaway",
  },
  {
    name: "Local Weather Data Gatherer",
    id: 2,
    language: "Python",
    description: "This is the description",
    takeaway: "This is a takeaway",
  },
];

// TODO remove image and focus on the content of what I did, what I learned, and what I struggled with.
const Projects = () => {
  return (
    <div className="projects">
      <div className="project-holder">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="project-title">{project.name}</div>
            <ul>
              <li className="language">
                <div>Languages:</div>
                <li>{project.language}</li>
              </li>
              <li className="takeaway">
                <div>Takeaway:</div>
                <li>{project.takeaway}</li>
              </li>
              <li className="description">
                <div>Description:</div>
                <li>{project.description}</li>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
