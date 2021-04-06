import P from "prop-types";

const Button = ({ text, backgroundColor, color }) => (
  <button className={`py-2.5 px-5 text-${color} bg-${backgroundColor} font-semibold shadow-lg`} type="button">{text}</button>
);

Button.propTypes = {
  text: P.string,
  color: P.string,
  backgroundColor: P.string,
};

Button.defaultProps = {
  text: "Teste",
  color: "white",
  backgroundColor: "blue",
};

export default Button;
