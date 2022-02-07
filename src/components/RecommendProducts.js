import Image from "./common/Image";
import {
  RecommendWrapp,
  ItemWrapper,
  RecommendTitle,
  List,
  ProductTitle,
  RecommendImage,
  RecommendDescription,
  RowRecommend,
  RecommendParagraph,
  AddButton,
} from "./../style";
import PropTypes from "prop-types";

const RecommendProducts = ({
  recommedProducts,
  removeRecommendItem,
  currency,
  handleAddProduct,
}) => {
  const list = recommedProducts.map((item) => (
    <ItemWrapper key={item.id}>
      <RecommendImage>
        <Image image={item.image} />
      </RecommendImage>
      <RecommendDescription>
        <ProductTitle>{item.product_name}</ProductTitle>
        <RowRecommend>
          <RecommendParagraph>
            {currency}
            {item.price.current_price}
          </RecommendParagraph>
          <AddButton
            onClick={() => {
              handleAddProduct(item);
              removeRecommendItem(item.id);
            }}
          >
            add
          </AddButton>
        </RowRecommend>
      </RecommendDescription>
    </ItemWrapper>
  ));

  return (
    <RecommendWrapp>
      <RecommendTitle>Recommended Products:</RecommendTitle>

      <List>{list}</List>
    </RecommendWrapp>
  );
};
RecommendProducts.propTypes = {
  recommedProducts: PropTypes.array,
  removeRecommendItem: PropTypes.func,
  currency: PropTypes.string,
  handleAddProduct: PropTypes.func,
};
export default RecommendProducts;
