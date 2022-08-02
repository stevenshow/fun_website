import { useEffect, useState } from 'react';
import { useAPI } from '../utils/useAPI';
import Error from '../components/Error';
import './Projects.scss';

const Projects = () => {
  const api = useAPI();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState({ code: undefined, message: undefined });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get('/cards/projects');
        setProjects(res.data);
      } catch (e) {
        setError({ code: e.code, message: e.message });
      }
    };
    getData();
  }, [api]);

  return (
    <>
      {projects.length > 0 ? (
        <div className="projects">
          <div className="project-holder">
            {projects.map((project, i) => (
              <div className="project" key={i}>
                <div className="project-title">{project.name}</div>
                <ul>
                  <ul className="language">
                    <div>Languages:</div>
                    <li>{project.language}</li>
                  </ul>
                  <ul className="takeaway">
                    <div>Takeaways:</div>
                    <li>{project.takeaway}</li>
                  </ul>
                  <ul className="description">
                    <div>Description:</div>
                    <li>{project.description}</li>
                  </ul>
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      {error['code'] != null && <Error errorMessage={error} />}
    </>
  );
};

export default Projects;
