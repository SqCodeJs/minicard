import { HamburgerStrap, HamburgerButtonWrapp } from "../../style";
import PropTypes from "prop-types";
const HamburgerButton = ({ open, handleHamburgerToggle }) => {
  return (
    <HamburgerButtonWrapp onClick={handleHamburgerToggle}>
      <HamburgerStrap
        rotate={open ? 45 : 0}
        translate={open ? "25%,250%" : "0"}
        color={open.toString()}
      ></HamburgerStrap>
      <HamburgerStrap
        rotate={0}
        translate={open ? "0" : "0,200%"}
        open={open}
        color={open.toString()}
      ></HamburgerStrap>
      <HamburgerStrap
        rotate={open ? -45 : 0}
        translate={open ? "-25%,250%" : "0,400%"}
        color={open.toString()}
      ></HamburgerStrap>
    </HamburgerButtonWrapp>
  );
};
HamburgerButton.propTypes = {
  open: PropTypes.bool,
  handleHamburgerToggle: PropTypes.func,
};
export default HamburgerButton;
