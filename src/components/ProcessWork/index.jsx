const ProcessWork = ({
  image, title, link, text,
}) => (
  <div>
    <img src={image} width="200px" alt="Computer" />
    <div className="relative -top-1/4 -right-2/3">
      <img src="line-with-arrow.svg" alt="Arrow" />
    </div>
    <h5 className="flex text-xl items-center font-bold mb-2">
      <span className="flex justify-center px-5 py-2 mr-2 py-0 bg-grayWhite font-bold text-purple text-center rounded-full">1</span>
      {" "}
      {title}
    </h5>
    <p className="text-grayBlack font-medium">
      Install Cipi on your server running
      <br />
      <a href="https://cipi.sh/#" className="text-blue hover:underline">wget -O - https://cipi.sh/go.sh | bash</a>
      <br />
      in a fresh installation of Ubuntu 20.04.
    </p>
  </div>
);

export default ProcessWork;
