import React from "react";
import Logo from "../assets/images/logo-full.svg";

export default function TicketDesign() {
  return (
    <div className="ticket-container">
      <div>
        <h1>
          Congrats,{" "}
          <span className="gradient-header-text">Jonathan Kristof!</span> <br />{" "}
          Your ticket is ready.
        </h1>
        <p>
          We've emailed your ticket to <a href="https://">jonatan@email.com</a>{" "}
          and will send updates in the run up to the event
        </p>
        <div className="ticket-main">
          <div>
            <img src={Logo} alt="full-logo" />
            <p>Jan 31, 2025 / Autin, TX</p>
          </div>
        </div>
      </div>
    </div>
  );
}
