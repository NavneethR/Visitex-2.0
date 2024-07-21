import { useEffect, useState } from "react";
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
    phoneNumber: "919498653630",
  });

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

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
    console.log(currentPage);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
    console.log(currentPage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
      <div>
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
          <button
            className="btn btn-primary"
            type="submit"
            onClick={currentPage === 3 ? handleSubmit : handleNext}
          >
            {currentPage === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
