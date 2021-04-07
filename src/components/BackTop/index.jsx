import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const BackTop = () => (
  <Link
    className="rounded bg-grayWhite"
    activeClass="active"
    to="process"
    spy
    smooth
    offset={-70}
    duration={500}
  >
    <FaArrowUp className="fixed left-full top-full z-100 text-grayDark" />
  </Link>
);

export default BackTop;
