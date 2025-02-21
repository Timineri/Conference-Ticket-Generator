import React from "react";
import Logo from "../assets/images/logo-full.svg";

export default function HeaderLogo() {
  return (
    <header>
      <img src={Logo} alt="full-logo" className="logo" />
    </header>
  );
}
