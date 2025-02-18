import MainForm from "./components/MainForm";
import FullLogo from "./components/FullLogo";

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
          <FullLogo />
          <MainForm />
        </div>
      </div>
    </div>
  );
}

export default App;
