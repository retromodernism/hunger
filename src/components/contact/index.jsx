import "./index.scss";

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
        />
        <input
          type="email"
          className="contact__form-input contact__form-input_email"
        />
        <input
          type="phone"
          className="contact__form-input contact__form-input_phone"
        />
        <textarea
          name="message"
          className="contact__form-textarea"
          cols="30"
          rows="10"
        ></textarea>
        <div className="contact__form-info">
          <div className="contact__form-info-item contact__form-info-address">
            5th London Boulevard, U.K.
          </div>
          <div className="contact__form-info-item contact__form-info-phone">
            +40 729 131 637/+40 726 458 782
          </div>
          <div className="contact__form-info-item contact__form-info-email">
            office@mindblister.com
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
