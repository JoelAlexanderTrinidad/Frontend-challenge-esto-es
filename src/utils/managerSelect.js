import projectManagers from "../data/users/projectManager.json";

export const ProjectManagersToSelect = () => {
  const defaultOption = [{ value: "", label: "Select person" }];
  const managerOptions = projectManagers.map((manager) => ({
    value: String(manager.name),
    label: manager.name,
  }));
  return [...defaultOption, ...managerOptions];
};
