const GetCipi = () => (
  <div className="lg:container lg:mx-auto px-4 py-10">
    <div className="m-auto text-center">
      <img className="mx-auto" src="programmer-male.svg" width="400px" alt="Programmer man" />
      <h3 className="text-3xl text-white text-center font-semibold mb-2">Get Cipi</h3>
      <span className="text-lg text-white">
        Run
        {" "}
        <code className="p-1 rounded bg-grayWhite text-black">wget -O - https://cipi.sh/go.sh | bash</code>
        {" "}
        in your VPS.
      </span>
    </div>
  </div>
);

export default GetCipi;
