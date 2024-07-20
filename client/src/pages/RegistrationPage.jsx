import { useState } from "react";
import VisitorDetailsPage from "./form-pages/VisitorDetailsPage";
import CompanyDetailsPage from "./form-pages/CompanyDetailsPage";
import ContactPage from "./form-pages/ContactPage";

const RegisterPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    visitorName: "a",
    employeeName: "a",
    reason: "a",
    companyName: "a",
    companyAddress: "a",
    phoneNumber: "",
  });
  const [otpVisible, setOtpVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`${formData.phoneNumber}`);
  };

  return (
    <div
      className="container m-auto mt-5 card border-primary p-4"
      style={{ width: "35%" }}
    >
      <h3 style={{ margin: "5px" }}>
        <center>Visitor Registration</center>
      </h3>
      <hr />
      <form onSubmit={currentPage === 3 ? handleSubmit : handleNext}>
        {currentPage === 0 && (
          <VisitorDetailsPage formData={formData} handleChange={handleChange} />
        )}
        {currentPage === 1 && (
          <CompanyDetailsPage formData={formData} handleChange={handleChange} />
        )}
        {currentPage === 2 && (
          <ContactPage
            formData={formData}
            handleChange={handleChange}
            setFormData={setFormData}
            setOtpVisible={setOtpVisible}
            otpVisible={otpVisible}
          />
        )}
        {currentPage === 3 && <div></div>}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          {currentPage > 0 ? (
            <button className="btn btn-secondary" onClick={handlePrev}>
              Previous
            </button>
          ) : (
            <div id="extra-space"></div>
          )}
          <button className="btn btn-primary" type="submit">
            {currentPage === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
