import ImageComponent from "../imageComponent";
import "./index.scss";
import leftImg from "./src/events-left.png";
import rightImg from "./src/events-right.png";

const PrivateEvents = (props) => {
  return (
    <section className="privateEvents">
      <h4 className="privateEvents__h4">Private Events</h4>
      <ImageComponent src={leftImg} frame="left" />
      <ImageComponent src={rightImg} />
      <div className="privateEvents__contact-information">
        For private events please call: +40 729 131 637/+40 726 458 782 or use
        the contact form.
      </div>
    </section>
  );
};

export default PrivateEvents;
