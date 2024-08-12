import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Doctor() {
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [field, setField] = useState("");
  const [degree, setDegree] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = {
        name:name,
        contact_no:contactNo,
        license_no:licenseNo,
        field:field,
        degree:degree,
        info:info
      };
      console.log("Request",req);
      const response = await axios.post("http://localhost:8000/api/doctors", req);
      navigate('/');
      console.log(response);

    } catch (error) {
      console.error("Error fetching data:", error); // Handle any errors
      alert(error);
    }
   

  };
  return (
    <div className="row-lg container mt-5">
      <div className="col-lg-2"></div>
      <div className="col-lg-8 card p-0">
        <div className="card-header bg-primary text-light">
          <h2 className="text-center p-1.4">Add Doctor</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                aria-describedby="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contact No
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                size={10}
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="license_no" className="form-label">
                License No
              </label>
              <input
                type="text"
                className="form-control"
                id="license_no"
                name="license_no"
                value={licenseNo}
                onChange={(e) => setLicenseNo(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="field" className="form-label">
                Field
              </label>
              <input
                type="text"
                className="form-control"
                id="field"
                name="field"
                value={field}
                onChange={(e) => setField(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="degree" className="form-label">
                Degree
              </label>
              <input
                type="text"
                className="form-control"
                id="degree"
                name="degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="info" className="form-label">
                Information
              </label>
              <textarea
                type="text"
                className="form-control"
                id="info"
                name="info"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
  );
}

export default Doctor;
