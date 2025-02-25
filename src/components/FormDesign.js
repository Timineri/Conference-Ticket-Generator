import React from "react";
import { useForm } from "react-hook-form";
import UploadIcon from "../assets/images/icon-upload.svg";
import InfoIcon from "../assets/images/icon-info.svg";

export default function FormDesign({
  handleFullName,
  handleEmail,
  handleGithubUsername,
  onGenerateTicket,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
    onGenerateTicket();
  };
  const onErrors = (errors) => {
    console.log(errors);
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
          <div className="upload" tabIndex={0}>
            <img className="upload-icon" src={UploadIcon} alt="upload" />
            <p className="upload-text">Drag and Drop or click to upload</p>
          </div>
          <p className="upload-condition">
            <img src={InfoIcon} alt="info-icon" className="info-icon" /> Upload
            your photo (JPG or PNG, max size: 500KB).
          </p>
        </label>

        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            {...register("fullName")}
            onChange={handleFullName}
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="emailAddress"
            {...register("emailAddress")}
            onChange={handleEmail}
            placeholder="example@email.com"
          />
        </label>

        <label>
          GitHub Username
          <input
            type="text"
            name="githubUsername"
            {...register("githubUsername")}
            onChange={handleGithubUsername}
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
