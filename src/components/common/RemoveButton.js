import { Strap, ButtonWrapp } from "../../style";
import PropTypes from "prop-types";
const RemoveButton = ({ handleRemove }) => {
  return (
    <ButtonWrapp onClick={handleRemove}>
      <Strap rotate={45} translate="25%,225%"></Strap>
      <Strap rotate={-45} translate="-25%,225%"></Strap>
    </ButtonWrapp>
  );
};
RemoveButton.propTypes = {
  handleRemove: PropTypes.func,
};
export default RemoveButton;
