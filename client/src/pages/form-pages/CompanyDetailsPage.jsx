import React from "react";

const CompanyDetailsPage = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Step 2: Company Information</h5>
      <div className="mb-3">
        <label htmlFor="additionalInfo" className="form-label">
          Company Name
        </label>
        <input
          type="text"
          className="form-control"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="What is the name of the comapny you work with?"
        />
      </div>
      <label htmlFor="additionalInfo" className="form-label">
        Company Address
      </label>
      <input
        type="text"
        className="form-control"
        id="companyAddress"
        name="companyAddress"
        value={formData.companyAddress}
        onChange={handleChange}
        placeholder="What is it's Address?"
      />
    </div>
  );
};

export default CompanyDetailsPage;
