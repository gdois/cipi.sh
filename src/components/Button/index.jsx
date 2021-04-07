import P from "prop-types";

const Button = ({
  text, icon, backgroundColor, color, click, marginSize,
}) => (
  <button onClick={click} className={`flex items-center ${marginSize} py-2.5 px-5 text-${color} ${backgroundColor} font-semibold shadow-lg rounded`} type="button">
    {!!icon && <div className="mr-2">{icon}</div>}
    {" "}
    {text}
  </button>
);

Button.propTypes = {
  text: P.string,
  color: P.string,
  icon: P.string,
  click: P.func,
  marginSize: P.string,
  backgroundColor: P.string,
};

Button.defaultProps = {
  text: "",
  color: "white",
  icon: "",
  click: () => {},
  marginSize: "",
  backgroundColor: "bg-purple",
};

export default Button;
