import ImageComponent from "../imageComponent";
import "./index.scss";
import teamImg from "./src/img.png";

const Team = (props) => {
  return (
    <section className="team">
      <h4 className="team__content-h4">Our team</h4>
      <ImageComponent src={teamImg} frame="left" />
      <div className="team__info">
        <h2 className="team__info-h2">Masterchef</h2>
        <p className="team__info-p">
          <b className="team__info-p_b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            velit maximus, molestie est a, tempor magna.
          </b>
        </p>
        <p className="team__info-p">
          Integer ullamcorper neque eu purus euismod, ac faucibus mauris
          posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper
          feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem.
          Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis
          semper laoreet.
        </p>
      </div>
    </section>
  );
};

export default Team;
