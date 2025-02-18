import React from "react";
import UploadIcon from "../assets/images/icon-upload.svg";

export default function MainForm() {
  return (
    <div>
      <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
      <p>Secure your spot at next year's biggest coding conference</p>
      <form>
        <div>
          <label>Upload Avatar</label>
          <img src={UploadIcon} alt="upload" />
          <p>Drag and Drop or click to upload</p>
        </div>
        <div>
          <label>Full Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" />
        </div>
        <div>
          <label>GitHub Username</label>
          <input type="text" />
        </div>
        <div>
          <button>Generate My Ticket</button>
        </div>
      </form>
    </div>
  );
}
