import "../App.css";
import Home from "../routes/home";
import Carousel from "react-bootstrap/Carousel";

const HomeCarousel = () => {
  return (
    <div className="mt-4 container justify-content-center w-full mb-2">
      <Carousel
        indicators={false}
        prevIcon={false}
        nextIcon={false}
        interval={2500}
        className="container"
      >
        <Carousel.Item>
          <img
            className="pt-1 pb-1 container object-scale-down h-60 w-96"
            src={require("../images/grocery-station-store-front.jpeg")}
            alt="First Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pt-1 pb-1 container object-scale-down h-60 w-96 "
            src={require("../images/group-pic.jpeg")}
            alt="Second Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pt-1 pb-1 container object-scale-down h-60 w-96 "
            src={require("../images/newspaper-pic.jpeg")}
            alt="Forth Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pt-1 pb-1 container object-scale-down h-60 w-96 "
            src={require("../images/meatball-sandwich.jpeg")}
            alt="Third Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pt-1 pb-1 container object-scale-down h-60 w-96 "
            src={require("../images/rub-sandwich.jpeg")}
            alt="Sixth Slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
