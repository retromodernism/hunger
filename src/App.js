import "./App.scss";
import AboutUs from "./components/aboutUs";
import Booking from "./components/booking";
import Header from "./components/header";
import Team from "./components/team";
import Specialties from "./components/specialties";
import Menu from "./components/menu";
import PrivateEvents from "./components/privateEvents";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Map from "./components/map";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Team />
      <Booking />
      <Specialties />
      <Menu />
      <PrivateEvents />
      <Gallery />
      <Contact />
      <Map
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `475px`, maxWidth: `1920px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
