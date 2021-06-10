import "./index.scss";
import Select from "react-select";
import ImageComponent from "../imageComponent";
import bookingImg from "./src/booking-img.png";
import InputMask from "react-input-mask";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

const peopleOptions = [];
for (let i = 1; i < 6; i++) {
  peopleOptions.push({
    value: i,
    label: i,
  });
}
const timeOptions = [];
for (let i = 0; i < 48; i += 1) {
  const time = `${Math.floor(i / 2)}:${i % 2 ? "30" : "00"}`;
  timeOptions.push({
    value: time,
    label: time,
  });
}

const Booking = (props) => {
  return (
    <section className="booking">
      <form action="() => alert('Форма отправлена!')" className="booking__form">
        <h2 className="booking__form-h2">Book a table</h2>
        <input
          type="text"
          className="booking__form-input booking__form-input-name"
          placeholder="Name"
        />
        <input
          type="email"
          className="booking__form-input booking__form-input-email"
          placeholder="Email"
        />
        <input
          type="phone"
          className="booking__form-input booking__form-input-phone"
          placeholder="Phone"
        />
        <Select
          className="booking__form-input booking__form-input-people"
          options={peopleOptions}
          placeholder="People"
        />
        <InputMask
          type="text"
          className="booking__form-input booking__form-input-date"
          placeholder="Date (mm/dd)"
          mask="99/99"
        ></InputMask>
        <Select
          className="booking__form-input booking__form-input-time"
          options={timeOptions}
          placeholder="Time"
        />
        <input
          type="submit"
          className="booking__form-input booking__form-input-submit"
          value="Book now"
        />
      </form>
      <ImageComponent src={bookingImg} />
      <div className="booking__working-time">
        Mon - Fri: <b className="booking__working-time_b">8PM - 10PM</b>, Sat -
        Sun: <b className="booking__working-time-time_b">8PM - 3AM</b>, Phone:
        <b className="booking__working-time-time_b">
          +40 729 131 637/+40 726 458 782
        </b>
      </div>
    </section>
  );
};

export default Booking;
