import React from "react";
import UploadIcon from "../assets/images/icon-upload.svg";
import InfoIcon from "../assets/images/icon-info.svg";

export default function FormDesign({
  handleFullName,
  handleEmail,
  handleGithubUsername,
  onGenerateTicket,
}) {
  return (
    <div>
      <h1>
        Your Journey to Coding Conf <br /> 2025 Starts Here!
      </h1>
      <p>Secure your spot at next year's biggest coding conference</p>
      <form>
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
          <input type="text" onChange={handleFullName} />
        </label>

        <label>
          Email Address
          <input
            type="email"
            onChange={handleEmail}
            placeholder="example@email.com"
          />
        </label>

        <label>
          GitHub Username
          <input
            type="text"
            onChange={handleGithubUsername}
            placeholder="@yourusername"
          />
        </label>

        <div>
          <button onClick={onGenerateTicket}>Generate My Ticket</button>
        </div>
      </form>
    </div>
  );
}
