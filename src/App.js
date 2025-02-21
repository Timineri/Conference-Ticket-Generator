// import FormDesign from "./components/FormDesign";
import HeaderLogo from "./components/HeaderLogo";
import TicketDesign from "./components/TicketDesign";

function App() {
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
          {/* <FormDesign /> */}
          <TicketDesign />
        </div>
      </div>
    </div>
  );
}

export default App;
