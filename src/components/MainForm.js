import React from "react";
import UploadIcon from "../assets/images/icon-upload.svg";

export default function MainForm() {
  return (
    <div>
      <h1>
        Your Journey to Coding Conf <br /> 2025 Starts Here!
      </h1>
      <p>Secure your spot at next year's biggest coding conference</p>
      <form>
        <label>
          Upload Avatar
          <div className="upload">
            <img className="upload-icon" src={UploadIcon} alt="upload" />
            <p className="upload-text">Drag and Drop or click to upload</p>
          </div>
        </label>

        <label>
          Full Name
          <input type="text" />
        </label>

        <label>
          Email Address
          <input type="email" />
        </label>

        <label>
          GitHub Username
          <input type="text" />
        </label>

        <div>
          <button>Generate My Ticket</button>
        </div>
      </form>
    </div>
  );
}
