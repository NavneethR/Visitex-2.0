import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "react-otp-input";
import { CircularProgress } from "@mui/material";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/setup";

const ContactPage = ({ formData, handleChange, setFormData }) => {
  const [otpVisible, setOtpVisible] = useState(false);
  const [sendOtp, setSendOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [cursor, setCursor] = useState("pointer");
  const [otpLoaderVisible, setOtpLoaderVisible] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );
    }
  }, []);

  const signin = () => {
    const mynumber = `+${formData.phoneNumber}`;
    if (mynumber === "" || mynumber.length < 10) return;
    console.log(mynumber);

    signInWithPhoneNumber(auth, mynumber, window.recaptchaVerifier)
      .then((result) => {
        setVerificationResult(result);
        setSendOtp(true);
        setOtpVisible(true);
      })
      .catch((error) => {
        alert(error.message);
        window.location.reload();
      });
  };

  const validateOtp = () => {
    setOtpLoaderVisible(true);
    if (otp === "" || verificationResult === null) return;

    verificationResult
      .confirm(otp)
      .then((result) => {
        alert("Verification successful!");
      })
      .catch((error) => {
        alert("Invalid OTP. Please try again.");
        setOtpLoaderVisible(false);
      });
  };

  return (
    <div>
      <h5>Step 3: Contact Information</h5>
      <label htmlFor="phoneNumber" className="form-label">
        Phone Number
      </label>
      <div className="mb-3" style={{ display: "flex", gap: "0px" }}>
        <PhoneInput
          country={"in"}
          value={formData.phoneNumber}
          onChange={(value, country) => {
            setFormData({ ...formData, phoneNumber: value });
            let dotCount = (country.format.match(/\./g) || []).length;
            let digitCount = (value.match(/\d/g) || []).length;
            setOtpVisible(digitCount === dotCount);
          }}
          inputProps={{ readOnly: false }}
          disabled={sendOtp}
          enableSearch={true}
          required
        />
      </div>
      {otpVisible && sendOtp ? (
        <div className="mb-3">
          <label htmlFor="otp" className="form-label">
            Enter OTP
          </label>
          <div className="input-group mb-3" style={{ display: "flex" }}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              containerStyle={{ gap: "7px" }}
              inputStyle={{ height: "2.5em", width: "2.5em" }}
              renderInput={(props) => <input {...props} />}
            />
            <button
              className="btn btn-primary"
              style={{
                marginLeft: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "7px",
                borderRadius: "5px",
              }}
              type="button"
              onClick={validateOtp}
              disabled={otpLoaderVisible}
            >
              {otpLoaderVisible && (
                <CircularProgress style={{ height: "20px", width: "20px" }} />
              )}
              <div>Verify</div>
            </button>
          </div>
          <div>
            <div>
              Wrong Number?
              <a
                style={{
                  textDecoration: "underline",
                  color: "blue",
                  cursor: cursor,
                }}
                onClick={() => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    phoneNumber: "",
                  }));
                  setSendOtp(false);
                  setOtpVisible(false);
                }}
                onMouseUp={() => setCursor("default")}
                onMouseDown={() => setCursor("pointer")}
              >
                {" "}
                Change Number
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <i>*You will get an OTP on this number</i>
          <br />
          <button
            className="btn btn-primary"
            onClick={signin}
            disabled={!otpVisible}
          >
            Send OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
