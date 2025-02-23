import { useState } from "react";
import FormDesign from "./components/FormDesign";
import HeaderLogo from "./components/HeaderLogo";
import TicketDesign from "./components/TicketDesign";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [fullName, setFullName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [githubUsername, setGithubUsername] = useState("");

  const handleGenerateTicket = () => {
    return setCurrentPage("Ticket");
  };

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleGithubUsername = (e) => {
    setGithubUsername(e.target.value);
  };

  return (
    <div className="background-container">
      <div className="container">
        {/* General Background */}
        <div className="bg-general"></div>

        {/* Squiggly Lines */}
        <div className="bg-squiggly squiggly1"></div>
        <div className="bg-squiggly squiggly2"></div>

        {/* Circles */}
        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>

        {/* Straight Lines */}
        <div className="bg-straight-line"></div>

        {/*Main Content*/}
        <div className="content">
          <HeaderLogo />
          <div>
            {currentPage === "Home" ? (
              <FormDesign
                handleFullName={handleFullName}
                handleEmail={handleEmail}
                handleGithubUsername={handleGithubUsername}
                onGenerateTicket={handleGenerateTicket}
              />
            ) : (
              <TicketDesign
                fullName={fullName}
                email={email}
                githubUsername={githubUsername}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
