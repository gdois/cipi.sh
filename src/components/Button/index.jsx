import P from "prop-types";

const Button = ({
  text, icon, background, color, click, margin,
}) => (
  <button onClick={click} className={`flex items-center ${margin} py-2.5 px-5 ${color} ${background} font-semibold shadow-lg rounded`} type="button">
    {!!icon && <div className="mr-2">{icon}</div>}
    {" "}
    {text}
  </button>
);

Button.propTypes = {
  text: P.string,
  color: P.string,
  icon: P.object,
  click: P.func,
  margin: P.string,
  background: P.string,
};

Button.defaultProps = {
  text: "",
  color: "text-white",
  icon: [],
  click: () => {},
  margin: "",
  background: "bg-purple",
};

export default Button;
