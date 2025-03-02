import React, { useState } from "react";
import { ReactComponent as IconInfoColored } from "../assets/images/icon-info-colored.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UploadIcon from "../assets/images/icon-upload.svg";
// import InfoIcon from "../assets/images/icon-info.svg";

export default function FormDesign({ onGenerateTicket }) {
  const [fileInputElement, setFileInputElement] = useState(null);
  const [fileError, setFileError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    // watch,
  } = useForm();

  const navigate = useNavigate();

  const onFormSubmit = (data) => {
    navigate("/ticket", { state: { formData: data } });
    onGenerateTicket();
  };

  const onErrors = (errors) => {
    console.log(errors);
  };

  const handleDivClick = () => {
    if (fileInputElement) {
      fileInputElement.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.size > 500 * 1024) {
        setFileError("File too large. Please upload a photo under 500KB.");
        setValue("imageUpload", null);
      } else {
        setFileError("");
        setValue("imageUpload", event.target.files);
      }
    }
  };

  const ticketGenerationOptions = {
    imageUpload: {
      required: "File too large. Please upload a photo under 500KB.",
    },
    fullName: {
      required: true,
    },
    emailAddress: {
      required: "Please enter a valid email address",
    },
    githubUsername: {
      required: true,
    },
  };

  return (
    <div>
      <h1>
        Your Journey to Coding Conf <br /> 2025 Starts Here!
      </h1>

      <p>Secure your spot at next year's biggest coding conference</p>

      <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <label>
          Upload Avatar
          <div
            className={`upload ${
              errors.imageUpload || fileError ? "error" : ""
            }`}
            tabIndex={0}
            name="imageUpload"
            onClick={handleDivClick}
          >
            <img className="upload-icon" src={UploadIcon} alt="upload" />

            <p className="upload-text">Drag and Drop or click to upload</p>
          </div>
          <input
            type="file"
            ref={(el) => setFileInputElement(el)}
            className="upload-file"
            {...register("imageUpload", ticketGenerationOptions.imageUpload)}
            onChange={handleFileChange}
          />
          <p className={fileError ? "upload-error" : "upload-plain"}>
            <IconInfoColored
              src={IconInfoColored}
              alt="info-icon-email"
              className="info-icon-email"
            />
            {fileError ? (
              <span>{fileError}</span>
            ) : (
              <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
            )}
          </p>
        </label>

        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            {...register("fullName", ticketGenerationOptions.fullName)}
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="emailAddress"
            {...register("emailAddress", ticketGenerationOptions.emailAddress)}
            placeholder="example@email.com"
            className={`email-input ${errors.emailAddress ? "error" : ""}`}
          />
          {errors.emailAddress && (
            <p className="email-error">
              {" "}
              <IconInfoColored
                src={IconInfoColored}
                alt="info-icon-email"
                className="info-icon-email"
              />
              {errors.emailAddress.message}
            </p>
          )}
        </label>

        <label>
          GitHub Username
          <input
            type="text"
            name="githubUsername"
            {...register(
              "githubUsername",
              ticketGenerationOptions.githubUsername
            )}
            placeholder="@yourusername"
          />
        </label>

        <div>
          <button type="submit">Generate My Ticket</button>
        </div>
      </form>
    </div>
  );
}
