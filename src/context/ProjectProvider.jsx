import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ProjectContext = createContext(null);

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");

    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  }, [projects]);

  const deleteProject = (projectId) => {
    setProjects((prevProjects) => prevProjects.filter(project => project.id !== projectId));
  };

  const contextValue = {
    projects,
    setProjects,
    deleteProject
  };

  return (
    <ProjectContext.Provider value={contextValue}>
      {children}
    </ProjectContext.Provider>
  );
};

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProjectContext, ProjectProvider };
