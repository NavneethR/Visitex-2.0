import React from "react";

const VisitorDetailsPage = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Step 1: Visitor Information</h5>
      <div className="mb-3">
        <label htmlFor="visitorName" className="form-label">
          Visitor Name
        </label>
        <input
          type="text"
          className="form-control"
          id="visitorName"
          name="visitorName"
          value={formData.visitorName}
          onChange={handleChange}
          placeholder="What's your name?"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="employeeName" className="form-label">
          Employee Name
        </label>
        <input
          type="text"
          className="form-control"
          id="employeeName"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleChange}
          placeholder="Who do you want to visit?"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reason" className="form-label">
          Reason
        </label>
        <textarea
          className="form-control"
          id="reason"
          name="reason"
          placeholder="What's the reason behind this visit?"
          value={formData.reason}
          onChange={handleChange}
          style={{ height: "5em" }}
          required
        />
      </div>
      <p>
        Already registered before? <a href="login">Login now</a>
      </p>
    </div>
  );
};

export default VisitorDetailsPage;
