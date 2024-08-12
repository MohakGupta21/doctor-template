import React from "react";
import axios from "axios";

function TemplateCard({ value, index }) {
//   const navigate = useNavigate();
  const confirmDelete = async (e) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/template/${value.id}`
      );
      console.log(response);
      alert("Entry deleted successfully!");
      window.location.reload();

    } catch (error) {
      console.error("Error fetching data:", error); // Handle any errors
    }
  };
  return (
    <div key={index} className="m-5 mt-0 py-3">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Template</th>
            <th scope="col">{value.random_id}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Patient Name</td>
            <td>{value.patient_name}</td>
          </tr>
          <tr>
            <td>Patient Age</td>
            <td>{value.patient_age}</td>
          </tr>
          <tr>
            <td>Patient Gender</td>
            <td>{value.patient_gender}</td>
          </tr>
          <tr>
            <td>Medication Name</td>
            <td>{value.medication_name}</td>
          </tr>
          <tr>
            <td>Medication Dosage</td>
            <td>{value.medication_dosage}</td>
          </tr>
          <tr>
            <td>Medication Frequency</td>
            <td>{value.medication_frequency}</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>{value.duration}</td>
          </tr>
          <tr>
            <td>Instructions</td>
            <td>{value.instructions}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>{value.date}</td>
          </tr>
          <tr>
            <td>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteTemplate"
            >
                <i className="bi bi-archive-fill"></i>
              </button>
            </td>
            <td>
              <a className="btn btn-warning" href={"templates/"+value.id}>
                <i className="bi bi-pencil-fill"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        className="modal fade"
        id="deleteTemplate"
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

export default TemplateCard;
