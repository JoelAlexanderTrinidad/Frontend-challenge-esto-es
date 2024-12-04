import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProjectManager } from "./pages/ProjectManager";
import { Logo } from "./components/ui/Logo";
import { AddProject } from "./pages/AddProject";
import { EditProject } from "./pages/EditProject";
import { ProjectProvider } from "./context/ProjectProvider";


function App() {
  return (
    <ProjectProvider>
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path="/" element={<ProjectManager />} />
          <Route path="/addProject" element={<AddProject />} />
          <Route path="/editProject/:projectId" element={<EditProject />} />
        </Routes>
      </BrowserRouter>
    </ProjectProvider>
  );
}

export default App;
