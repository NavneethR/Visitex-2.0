import { useEffect, useState } from "react";
import VisitorDetailsPage from "./form-pages/VisitorDetailsPage";
import CompanyDetailsPage from "./form-pages/CompanyDetailsPage";
import ContactPage from "./form-pages/ContactPage";
import PhotoPage from "./form-pages/PhotoPage";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    visitorName: "",
    employeeName: "",
    reason: "",
    companyName: "",
    companyAddress: "",
    phoneNumber: "",
    photo: "",
  });
  const [verify, setVerify] = useState(false);

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
    let res = Object.values(formData);
    if (formData.photo === "") {
      toast.error("Please take your photo");
      return;
    } else if (res.includes("")) {
      toast.error("Please go back and fill in other details");
      return;
    } else if (verify === false) {
      toast.error("Please verify your phone number.");
      return;
    }
    setCurrentPage(0);
    toast.success("Thank you for your submission");
  };

  return (
    <div
      className="container m-auto mt-5 mb-5 card border-primary p-4"
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
            setVerify={setVerify}
          />
        )}
        {currentPage === 3 && (
          <PhotoPage formData={formData} setFormData={setFormData} />
        )}
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
