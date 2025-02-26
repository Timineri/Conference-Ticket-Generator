import { useState } from "react";
import FormDesign from "./components/FormDesign";
import HeaderLogo from "./components/HeaderLogo";
import TicketDesign from "./components/TicketDesign";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleGenerateTicket = () => {
    return setCurrentPage("Ticket");
  };

  return (
    <div className="background-container">
      <div className="container">
        <div className="bg-general"></div>

        <div className="bg-squiggly squiggly1"></div>
        <div className="bg-squiggly squiggly2"></div>

        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>

        <div className="bg-straight-line"></div>

        <div className="content">
          <HeaderLogo />
          <div>
            {currentPage === "Home" ? (
              <FormDesign onGenerateTicket={handleGenerateTicket} />
            ) : (
              <TicketDesign />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
