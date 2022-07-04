import "../App.css";

const About = () => {
  return (
    <>
      <div className="ml-5 shadow rounded mr-5 mt-1 container flex flex-col w-auto justify-items-center text-xl text-plat-num bg-rich-green font-bold">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
          nulla urna. Pellentesque placerat, eros quis fringilla sodales, ante
          velit porta lectus, nec varius lacus leo vel justo. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Aliquam quis purus et ligula
          laoreet posuere. Maecenas aliquet elit luctus, semper sem a, bibendum
          risus. Mauris ultricies convallis mi, nec dictum mi tempus non.
          Integer at dolor sit amet mauris dapibus euismod. Quisque congue
          convallis nunc et lacinia. Mauris fringilla commodo ex ac ullamcorper.
          Integer quis molestie lorem. Nunc eget semper justo. Donec ac nunc
        </p>
      </div>
      <div className="container flex flex-row mt-3 mb-5">
        <img
          className="container flex h-68 w-96"
          src={require("../images/newspaper-pic.jpeg")}
        />
        <img
          className="container flex h-68 w-80"
          src={require("../images/grocery-station-store-front.jpeg")}
        />
      </div>
    </>
  );
};

export default About;
