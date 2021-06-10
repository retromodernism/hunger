import "./App.scss";
import AboutUs from "./components/aboutUs";
import Booking from "./components/booking";
import Header from "./components/header";
import Team from "./components/team";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Team />
      <Booking />
    </div>
  );
}

export default App;
