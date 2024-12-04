import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { CardProyect } from "../components/ui/cardProyect";
import useProjects from "../hooks/ProyectsProvider";

export const ProjectManager = () => {
  const { projects, deleteProject } = useProjects();

  console.log("projects: ", projects);

  return (
    <>
      <div className="flex px-5 justify-between border-y-2 border-b-8 bg-white">
        <h1 className="py-3 bg-white lg:text-2xl lg:text-neutral-800">
          My projects
        </h1>
        <Button>
          <Link className="bg-red-500" to={"/addProject"}>
            <i className="fa-solid fa-plus bg-red-500"></i> Add project
          </Link>
        </Button>
      </div>
      <div className="lg:bg-[#e5e7eb] lg:h-screen">
        <div className="lg:w-10/12 lg:mx-auto lg:bg-white">
          <ul className="w-full divide-y divide-gray-200">
            <li className="hidden lg:flex font-bold justify-between text-neutral-700 py-3 px-4">
              <span className="w-52">Project Info</span>
              <span className="w-32">Project Manager</span>
              <span className="w-36">Assigned To</span>
              <span className="">Status</span>
              <span className="">Actions</span>
            </li>
          </ul>
          {projects.map((project) => (
            <CardProyect
              key={project.id}
              id={project.id}
              name={project.name}
              date={project.date}
              assignedTo={project.assignedTo}
              projectManager={project.projectManager}
              status={project.status}
              deleteProject={deleteProject}
            />
          ))}
        </div>
      </div>
    </>
  );
};
