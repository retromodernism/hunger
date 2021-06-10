import "./App.scss";
import AboutUs from "./components/aboutUs";
import Booking from "./components/booking";
import Header from "./components/header";
import Team from "./components/team";
import Specialties from "./components/specialties";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Team />
      <Booking />
      <Specialties />
    </div>
  );
}

export default App;
