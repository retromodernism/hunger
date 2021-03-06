import "./index.scss";
import aboutImg from "./src/about-img.png";
import ImageComponent from "./../imageComponent";

const AboutUs = (props) => {
  return (
    <section className="aboutUs" name="About Us">
      <div className="aboutUs__info">
        <h2 className="aboutUs__info-h2">About Us</h2>
        <p className="aboutUs__info-p">
          <b className="aboutUs__info-p_b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            velit maximus, molestie est a, tempor magna.
          </b>
        </p>
        <p className="aboutUs__info-p">
          Integer ullamcorper neque eu purus euismod, ac faucibus mauris
          posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper
          feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem.
          Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis
          semper laoreet.
        </p>
      </div>
      <ImageComponent src={aboutImg} />
    </section>
  );
};

export default AboutUs;
