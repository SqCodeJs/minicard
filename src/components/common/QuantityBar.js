import React, { useState, useEffect } from "react";
import { QuantityWrapp, Button, QuantityField } from "../../style";
import PropTypes from "prop-types";
const QuantityBar = ({ qty, id, productUpdate }) => {
  const [quantity, setQuantity] = useState(qty);
  useEffect(() => {
    productUpdate(id, quantity);
  }, [quantity]);
  return (
    <QuantityWrapp>
      <Button
        disabled={quantity === 0}
        onClick={() => setQuantity((prev) => prev - 1)}
      >
        -
      </Button>
      <QuantityField
        type="text"
        value={quantity}
        onChange={(e) => {
          if (Number.isInteger(+e.target.value)) {
            if (+e.target.value > 10) {
              setQuantity(10);
              return;
            }
            setQuantity(+e.target.value);
          } else setQuantity((prev) => prev);
        }}
      />
      <Button
        disabled={quantity === 10}
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        +
      </Button>
    </QuantityWrapp>
  );
};
QuantityBar.propTypes = {
  qty: PropTypes.number,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  productUpdate: PropTypes.func,
};
export default QuantityBar;
