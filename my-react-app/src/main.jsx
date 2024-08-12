import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Doctor from "./components/Doctor.jsx";
import Template from "./components/Template.jsx";
import NoPage from "./components/NoPage.jsx";
import DoctorDetails from "./components/DoctorDetails.jsx";
import TemplateDetails from "./components/TemplateDetails.jsx";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="add/doctor" element={<Doctor />} />
          <Route path="add/template" element={<Template />} />
          <Route path="*" element={<NoPage />} />
          <Route path="doctors/:id" element={<DoctorDetails />} />
          <Route path="templates/:id" element={<TemplateDetails />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

