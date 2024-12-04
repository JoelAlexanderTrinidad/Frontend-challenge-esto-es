import { Link, useNavigate, useParams } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { Button } from "../components/ui/Button";
import { ProjectManagersToSelect } from "../utils/managerSelect";
import { userToSelect } from "../utils/userSelect";
import status from "../data/users/status.json";
import { useState } from "react";
import { formatDate } from "../utils/formatDate";
import useProjects from "../hooks/ProyectsProvider";

export const EditProject = () => {
  const { projectId } = useParams(); 
  const { projects, setProjects } = useProjects();
  const navigate = useNavigate();

  const projectToEdit = projects.find(project => project.id === parseInt(projectId));

  const initialFormData = projectToEdit
    ? {
        name: projectToEdit.name,
        description: projectToEdit.description,
        projectManager: projectToEdit.projectManager,
        assignedTo: projectToEdit.assignedTo,
        status: projectToEdit.status,
        date: projectToEdit.date,
      }
    : {
        name: "",
        description: "",
        projectManager: "",
        assignedTo: "",
        status: "",
        date: "",
      };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = formatDate(new Date());

    const updatedProject = {
      ...projectToEdit,
      ...formData,
      date: formattedDate,
    };

    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectToEdit.id ? updatedProject : project
      )
    );

    navigate('/');
  };

  const managerOptions = ProjectManagersToSelect();
  const usersOptions = userToSelect();
  const statusOptions = status.map((item) => ({
    value: String(item.status),
    label: item.status,
  }));

  return (
    <>
      <div className="flex px-4 justify-between border-y-2 border-b-8">
        <h1 className="py-3 text-3xl">
          <Link className="text-sm text-neutral-500" to={"/"}>
            <i className="fa-solid fa-arrow-left "></i>
            <span className="mx-2 ">Back</span>
          </Link>
          Edit project
        </h1>
      </div>
      <form
        className="max-w-md mx-auto mt-3 p-4 border-gray-300 rounded-md shadow-md lg:max-w-lg lg:bg-white"
        onSubmit={handleSubmit}
      >
        <Input
          label="Project name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="Description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          type="text"
        />

        <Select
          label="Project manager"
          id="projectManager"
          value={formData.projectManager}
          onChange={handleChange}
          options={managerOptions}
        />

        <Select
          label="Assigned to"
          id="assignedTo"
          value={formData.assignedTo}
          onChange={handleChange}
          options={usersOptions}
        />

        <Select
          label="Status"
          id="status"
          value={formData.status}
          onChange={handleChange}
          options={statusOptions}
        />

        <Button>Update project</Button>
      </form>
    </>
  );
};