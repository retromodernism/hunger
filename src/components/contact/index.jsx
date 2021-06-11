import "./index.scss";
import TextareaAutoSize from "react-textarea-autosize";

const Contact = (props) => {
  return (
    <section className="contact">
      <h2 className="contact__h2">Contact</h2>
      <p className="contact__p">
        <b className="contact__p_b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit
          maximus, molestie est a, tempor magna.
        </b>
      </p>
      <form action="" className="contact__form">
        <input
          type="text"
          className="contact__form-input contact__form-input_name"
          placeholder="Name"
        />
        <input
          type="email"
          className="contact__form-input contact__form-input_email"
          placeholder="Email"
        />
        <input
          type="phone"
          className="contact__form-input contact__form-input_phone"
          placeholder="Phone"
        />
        <TextareaAutoSize
          name="message"
          className="contact__form-textarea"
          placeholder="Message"
          minRows={5}
        ></TextareaAutoSize>
        <div className="contact__form-info">
          <div className="contact__form-info-item">
            <span className="FontAwesome5free"></span>&nbsp;&nbsp;&nbsp;&nbsp;5th
            London Boulevard, U.K.
          </div>
          <div className="contact__form-info-item">
            <span className="FontAwesome5free"></span>
            &nbsp;&nbsp;&nbsp;&nbsp;+40 729 131 637/+40 726 458 782
          </div>
          <div className="contact__form-info-item">
            <span className="FontAwesome5free"></span>
            &nbsp;&nbsp;&nbsp;&nbsp;office@mindblister.com
          </div>
        </div>
        <input
          type="submit"
          value="Send message"
          className="contact__form-input contact__form-input_submit"
        />
      </form>
    </section>
  );
};

export default Contact;
