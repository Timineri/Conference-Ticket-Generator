import React from "react";
import { useLocation } from "react-router-dom";
import backgroundImage from "../assets/images/pattern-ticket.svg";
import Logo from "../assets/images/logo-full.svg";
import Avatar from "../assets/images/image-avatar.jpg";
import GitHubLogo from "../assets/images/icon-github.svg";

export default function TicketDesign({
  fullName,
  email,
  githubUsername,
  imageUpload,
}) {
  const location = useLocation();
  const formData = location.state?.formData || {};
  return (
    <div className="ticket-container">
      <div>
        <h1 className="ticket-header-text">
          Congrats, <span className="gradient-text">{formData.fullName}!</span>{" "}
          <br /> Your ticket is ready.
        </h1>

        <p className="email-ticket">
          We've emailed your ticket to <br />{" "}
          <a href="/" className="email">
            {formData.emailAddress}{" "}
          </a>
          and will send updates in <br /> the run up to the event
        </p>

        <div>
          <div className="ticket-wrapper">
            <img
              src={backgroundImage}
              alt=""
              className="background-ticket-image"
            />
            <div className="ticket-main">
              <div className="ticket-header">
                <img src={Logo} alt="full-logo" className="ticket-logo" />
                <p className="date-location">Jan 31, 2025 / Austin, TX</p>
              </div>

              <div className="ticket-footer">
                <div>
                  <img src={Avatar} alt="avatar" className="avatar" />
                </div>
                <div className="profile-info">
                  <h2 className="profile-name">{formData.fullName}</h2>

                  <div className="profile-github">
                    <img src={GitHubLogo} alt="github-logo" />
                    <p className="github-username">{formData.githubUsername}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
