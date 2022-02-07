import Image from "./common/Image";
import RemoveButton from "./common/RemoveButton";
import QuantityBar from "./common/QuantityBar";
import PropTypes from "prop-types";

import {
  ItemWrapp,
  ImageWrapp,
  Row,
  Description,
  RemoveButtonWrapp,
  Title,
  Paragrath,
  Span,
  Wrapper,
  QuantityWrapper,
  PriceWrapp,
  Price,
  Square,
} from "../style";

const CardItem = ({ product, currency, productUpdate, removeItem }) => {
  return (
    <ItemWrapp>
      <Row>
        <ImageWrapp>
          <Image image={product.image} />
        </ImageWrapp>
        <Description>
          <Title>{product.product_name}</Title>

          {product.product_options.length > 0 &&
            product.product_options.map((element) => (
              <Paragrath key={element.id}>
                {`${element.name}: `}
                <Span>{element.value}</Span>
              </Paragrath>
            ))}
        </Description>
        <RemoveButtonWrapp>
          <Square>
            <RemoveButton handleRemove={() => removeItem(product.id)} />
          </Square>
        </RemoveButtonWrapp>
      </Row>
      <Row>
        <Wrapper>
          <QuantityWrapper>
            <Paragrath>Qty:</Paragrath>
            <QuantityBar
              qty={product.qty}
              id={product.id}
              productUpdate={productUpdate}
            />
          </QuantityWrapper>
          <PriceWrapp>
            <Price>
              {product.price.old_price && currency}
              {product.price.old_price}
            </Price>
            <Price>
              {currency}
              {product.price.current_price}
            </Price>
          </PriceWrapp>
        </Wrapper>
      </Row>
    </ItemWrapp>
  );
};
CardItem.propTypes = {
  product: PropTypes.object,
  currency: PropTypes.string,
  productUpdate: PropTypes.func,
  removeItem: PropTypes.func,
};
export default CardItem;
