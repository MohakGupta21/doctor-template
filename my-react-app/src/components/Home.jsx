import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorCard from "./DoctorCard";
import TemplateCard from "./TemplateCard";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const getTemplates = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/templates");
        console.log("Templates", response.data);
        setTemplates(response.data); // Handle the response data
      } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
      }
    };
    getTemplates();
    const getDoctors = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/doctors");
        console.log("Doctors", response.data); // Handle the response data
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
      }
    };
    getDoctors();
  }, []);

  return (
    <div>
      <div className="py-2 bg-light">
        <ul
          className="bg-light nav nav-tabs justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#doctor-tab"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              View All Doctors
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#template-tab"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              View All Templates
            </button>
          </li>
        </ul>
      </div>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="doctor-tab"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          <div className="d-md-flex p-2 justify-content-start">
            {doctors.map((value, index) => (
              <DoctorCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="template-tab"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          {templates.map((value, index) => (
            <TemplateCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
