import "./App.scss";
import AboutUs from "./components/aboutUs";
import Booking from "./components/booking";
import Header from "./components/header";
import Team from "./components/team";
import Specialties from "./components/specialties";
import Menu from "./components/menu";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Team />
      <Booking />
      <Specialties />
      <Menu />
    </div>
  );
}

export default App;
