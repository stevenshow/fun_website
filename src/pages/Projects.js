import "./Projects.scss";

const projects = [
  {
    name: "Cat Fact Generator",
    id: 1,
    language: "Python",
    description:
      "This project was one that I started because my wife loves anything and everything about cats. I decided to create a program that would run on my Raspberry Pi that would gather a cat photo and a cat fact from two APIs each morning, attach them both to an email and send them to my wife each morning.",
    takeaway: "Consume an API, Cron scheduling",
  },
  {
    name: "Local Weather Data Gatherer",
    id: 2,
    language: "Python",
    description:
      "I had recently learned about data collection in a python course I was taking, and decided I would gather my own. I created a program that runs everyday, on the hour, and collects weather data from a local weather station's API. I then store that in a CSV file for consumption.",
    takeaway: "File Output",
  },
  {
    name: "Recipe Database",
    id: 3,
    language: "mySQL",
    description:
      "I created a database to store recipes that my wife could then utilize to easily locate what she wanted. I focused on allowing it to be searchable by food type, cook time, ingredients needed, etc.",
    takeaway: "Properly set up database, Query database",
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
                <div>Language:</div>
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
