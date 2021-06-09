import "./index.scss";

const ImageComponent = ({ src = "#", frame = "right" }) => {
  return (
    <picture className={`imageTemplate__picture imageTemplate__picture_${frame}`}>
      <source media="(min-width: 0px)" srcSet={src} />
      <img src="#" alt="" className="imageTemplate__picture-img" />
    </picture>
  );
};

export default ImageComponent;
