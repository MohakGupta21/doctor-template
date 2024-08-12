import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DoctorCard({ value, index }) {
  const navigate = useNavigate();
  const confirmDelete = async (e) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/doctor/${value.id}`
      );
      console.log(response);
      alert("Entry deleted successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error fetching data:", error); // Handle any errors
    }
  };
  return (
    <div key={index} className="m-5 mt-0 py-5">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header bg-warning">
          <h2 className="h2 text-center">{value.name}</h2>
          <div className="d-flex justify-content-between">
            <p className="h4">{value.field}</p>
            <p className="h4">{value.degree}</p>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">License No: {value.license_no}</h5>
          <h6 className="h6 card-title">Phone No: {value.contact_no}</h6>

          <p className="card-text">
            {value.info ? value.info : "No Additional Information"}
          </p>
          <div className="d-flex justify-content-around">
            <a
              type="button"
              href={"doctors/" + value.id}
              className="btn btn-primary"
            >
              Update
            </a>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Confirm Delete
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Are you sure you want to delete?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                onClick={(e) => confirmDelete(e)}
                className="btn btn-danger"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
