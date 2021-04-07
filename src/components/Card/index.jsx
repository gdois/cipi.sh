import P from "prop-types";

const Card = ({ icon, title, text }) => (
  <div className="grid p-6 m-4 bg-white rounded shadow-md">
    <div className="flex justify-center p-5 bg-grayWhite text-purple w-16 text-center rounded-full text-2xl">
      {icon}
    </div>
    <h5 className="text-xl font-semibold mt-3 mb-3">{title}</h5>
    <p className="text-grayBlack">{text}</p>
  </div>
);

Card.propTypes = {
  title: P.string,
  text: P.string,
  icon: P.object,
};

Card.defaultProps = {
  title: "",
  text: "",
  icon: {},
};

export default Card;
