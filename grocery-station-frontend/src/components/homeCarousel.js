import "../App.css";
import Home from "../routes/home";
import Carousel from "react-bootstrap/Carousel";

const HomeCarousel = () => {
  return (
    <div className="mt-2 container border justify-content-center w-1/2 mb-2">
      <Carousel
        indicators={false}
        prevIcon={false}
        nextIcon={false}
        interval={4000}
        className="container"
      >
        <Carousel.Item>
          <img
            className="pt-1 pb-1 container object-scale-down h-60 w-96 "
            src={require("../images/grocery-station-store-front.jpeg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pt-1 pb-1 container object-scale-down h-60 w-96 "
            src={require("../images/group-pic.jpeg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pt-1 pb-1 container object-scale-down h-60 w-96 "
            src={require("../images/meatball-sandwich.jpeg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pt-1 pb-1 container object-scale-down h-60 w-96 "
            src={require("../images/newspaper-pic.jpeg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pt-1 pb-1 container object-scale-down h-60 w-96 "
            src={require("../images/turkey-delight-sandwich.jpeg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="pt-1 pb-1 container object-scale-down h-60 "
            src={require("../images/rub-sandwich.jpeg")}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
