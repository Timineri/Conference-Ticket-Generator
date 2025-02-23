import React from "react";
import Logo from "../assets/images/logo-full.svg";
import Avatar from "../assets/images/image-avatar.jpg";
import GitHubLogo from "../assets/images/icon-github.svg";

export default function TicketDesign() {
  return (
    <div className="ticket-container">
      <div>
        <h1 className="ticket-header-text">
          Congrats, <span className="gradient-text">Jonathan Kristof!</span>{" "}
          <br /> Your ticket is ready.
        </h1>
        <p className="email-ticket">
          We've emailed your ticket to <br />{" "}
          <a href="/" className="email">
            jonatan@email.com
          </a>{" "}
          and will send updates in <br /> the run up to the event
        </p>
        <div className="ticket-main">
          <div>
            <img src={Logo} alt="full-logo" className="ticket-logo" />
            <p className="date-location">Jan 31, 2025 / Austin, TX</p>
          </div>
          <div className="ticket-footer">
            <div>
              <img src={Avatar} alt="avatar" className="avatar" />
            </div>
            <div className="profile-info">
              <h2>Jonathan Kristof</h2>
              <div className="profile-github">
                <img src={GitHubLogo} alt="github-logo" />
                <p className="github-username">@jonatankristoff0101</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
