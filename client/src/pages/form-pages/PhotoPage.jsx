import { useRef, useCallback } from "react";
import Webcam from "react-webcam";

const PhotoPage = ({ formData, setFormData }) => {
  const webcamRef = useRef(null);

  const capture = useCallback(async () => {
    const imageSrc = await webcamRef.current.getScreenshot();
    setFormData({ ...formData, photo: imageSrc });
  }, [webcamRef]);

  const retake = () => {
    setFormData({ ...formData, photo: "" });
  };

  return (
    <div>
      <h5>Step 4: Photo</h5>
      <label htmlFor="phoneNumber" className="form-label">
        Please take your Photo
      </label>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        {formData.photo === "" ? (
          <Webcam
            style={{ width: "100%", height: "110%" }}
            mirrored={true}
            ref={webcamRef}
          />
        ) : (
          <img style={{ width: "100%" }} src={formData.photo} />
        )}
        <button
          className="btn btn-primary"
          style={{
            position: "absolute",
            alignItems: "center",
            marginBottom: "20px",
            borderRadius: "20px",
          }}
          onClick={formData.photo === "" ? capture : retake}
        >
          {formData.photo === "" ? "capture" : "retake"}
        </button>
      </div>
    </div>
  );
};

export default PhotoPage;
