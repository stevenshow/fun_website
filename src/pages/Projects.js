import { useEffect, useState } from 'react';
import { useAPI } from '../utils/useAPI';
import './Projects.scss';

const Projects = () => {
  const api = useAPI();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await api.get('/cards/projects');
      setProjects(res.data);
    };
    getData();
  }, [api]);

  return (
    <>
      {projects.length > 1 && (
        <div className="projects">
          <div className="project-holder">
            {projects.map((project, i) => (
              <div className="project" key={i}>
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
      )}
    </>
  );
};

export default Projects;
