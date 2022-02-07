import { Img } from "../../style";
import PropTypes from "prop-types";
const Image = ({ image }) => {
  return <Img src={image}></Img>;
};
Image.propTypes = {
  image: PropTypes.string,
};
export default Image;
