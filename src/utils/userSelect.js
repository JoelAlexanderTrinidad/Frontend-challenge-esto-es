import users from "../data/users/users.json";

export const userToSelect = () => {
  const defaultOption = [{ value: "", label: "Select person" }];
  const managerOptions = users.map((user) => ({
    value: String(user.name),
    label: user.name,
  }));
  return [...defaultOption, ...managerOptions];
};
