import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Template() {
  const [doctors, setDoctors] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState(1);
  const [patientGender, setPatientGender] = useState("");
  const [medicationName, setMedicatioName] = useState("");
  const [medicationDosage, setMedicationDosage] = useState(1);
  const [medicationFrequency, setMedicationFrequency] = useState(1);
  const [duration, setDuration] = useState(1);
  const [instructions, setInstructions] = useState("");
  const [date, setDate] = useState("");
  const [doctorid,setDoctorId] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
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
  const generatePrescription = async(e)=>{
    e.preventDefault();
    try {
      const req = {
        patient_name:patientName,
        patient_age:patientAge,
        patient_gender:patientGender,
        medication_name:medicationName,
        medication_dosage:medicationDosage,
        medication_frequency:medicationFrequency,
        duration:duration,
        instructions:instructions,
        date:date,
        doctor:doctorid
      }
      const res = await axios.post('http://127.0.0.1:8000/api/templates',req);
      console.log(res.data);
      alert("Prescription Added Successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error fetching data:", error); // Handle any errors
      alert(error);
    }
  }
  return (
    <div className="container py-5">
      <h2 className="bg-light">Doctor's Prescription Form</h2>
      <form onSubmit={(e)=>generatePrescription(e)}>
        {/* <!-- Patient's Information --> */}
        <div className="mb-3">
          <label for="patientName">Patient's Name</label>
          <input
            className="form-control"
            type="text"
            id="patientName"
            name="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label for="patientAge">Patient's Age</label>
          <input
            className="form-control"
            type="number"
            id="patientAge"
            name="patientAge"
            min={1}
            max={130}
            value={patientAge}
            onChange={(e) => setPatientAge(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label for="patientGender">Patient's Gender</label>
          <input
            className="form-control"
            type="text"
            id="patientGender"
            name="patientGender"
            value={patientGender}
            onChange={(e) => setPatientGender(e.target.value)}
            required
          />
        </div>

        {/* <!-- Prescription Details --> */}
        <div className="mb-3">
          <label for="medicationName">Medication Name</label>
          <input
            className="form-control"
            type="text"
            id="medicationName"
            name="medicationName"
            value={medicationName}
            onChange={(e) => setMedicatioName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label for="dosage">Dosage (e.g., 500mg)</label>
          <input
            className="form-control"
            type="number"
            min="5"
            id="dosage"
            name="dosage"
            value={medicationDosage}
            onChange={(e) => setMedicationDosage(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label for="frequency">Frequency (e.g., twice a day)</label>
          <input
            className="form-control"
            type="number"
            min="1"
            max="5"
            id="frequency"
            name="frequency"
            value={medicationFrequency}
            onChange={(e) => setMedicationFrequency(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label for="duration">Duration (e.g., 7 days)</label>
          <input
            className="form-control"
            type="number"
            min="1"
            id="duration"
            name="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label for="instructions">Additional Instructions</label>
          <textarea
            className="form-control"
            id="instructions"
            name="instructions"
            rows="4"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>

        {/* <!-- Pre-filled Signature Section --> */}
        <div className="mb-3">
          <select name="doctor" className="form-select" aria-label="Default select example" onChange={(e)=>setDoctorId(e.target.value)}>
            <option selected disabled>Open this select menu</option>
            {/* <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option> */}
            {
              doctors.map((value,index)=>(
                <option key={index} value={value.id}>{value.name} - {value.field}</option>
              ))
            }
          </select>
        </div>
        <div className="mb-3">
          <label for="dateOfSignature">Date of Signature</label>
          <input
            className="form-control"
            type="date"
            id="dateOfSignature"
            name="dateOfSignature"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Generate Prescription
        </button>
      </form>
    </div>
  );
}

export default Template;
