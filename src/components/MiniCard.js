import React, { useEffect, useState } from "react";
import defaultProductsData from "./../defaultProductsData.json";
import CardItem from "./CardItem";
import RecommendProducts from "./RecommendProducts";
import EmptyList from "./EmptyList";
import { returnTotalPrice, isInt, fetchData } from "../helpers/helpers";
import {
  CardWrapp,
  CardTitleWrapp,
  CardTitle,
  CardList,
  Checkout,
  CardButton,
  ShippingParagrah,
  TotalOrderParagrah,
  CheckoutRow,
} from "./../style";
import PropTypes from "prop-types";

const returnUpdatedData = (data) =>
  data.map((product) => ({
    ...product,
    total_price: returnTotalPrice(product.price.current_price, product.qty),
  }));
const MiniCard = ({ open }) => {
  const [products, setProducts] = useState([]);
  const [recommedProducts, setRecommedProducts] = useState([]);
  const [currency, setCurrency] = useState("");
  const [shipping, setShipping] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);

  const totalWorth = () => {
    let total = products.length > 0 ? shipping : 0;
    products.forEach((element) => {
      total += element.total_price;
    });

    return total;
  };
  const returnListWithId = (list, startId) => {
    let id = startId;
    const listCopy = JSON.parse(JSON.stringify(list));
    const finalList = listCopy.map((item) => {
      const list = {
        id,
        product_name: item.title,
        image: item.image,
        qty: 1,
        price: { current_price: item.price },
        product_options: [],
        total_price: returnTotalPrice(item.price.current_price, 1),
      };
      id++;

      return list;
    });
    return finalList;
  };
  const getProductsFromApi = (id) => {
    fetchData("https://fakestoreapi.com/products?limit=2").then((res) => {
      setRecommedProducts(returnListWithId(res, id));
    });
  };
  useEffect(() => {
    const productsData = JSON.parse(JSON.stringify(defaultProductsData));
    const startId = productsData.items.length + 1;
    setProducts(returnUpdatedData(productsData.items));
    setCurrency(productsData.currency);
    setShipping(productsData.shipping);

    getProductsFromApi(startId);
  }, []);
  useEffect(() => {
    setTotalOrder(totalWorth());
  }, [products]);

  const productUpdate = (id, quantity) => {
    const productCopy = JSON.parse(JSON.stringify(products));
    productCopy.map((product) => {
      if (product.id === id) {
        product.qty = quantity;
        product.total_price = returnTotalPrice(
          product.price.current_price,
          quantity
        );
      }
      return product;
    });
    setProducts(productCopy);
  };

  const removeItem = (id) =>
    setProducts((products) => products.filter((item) => item.id !== id));

  const removeRecommendItem = (id) => {
    setRecommedProducts((prev) => prev.filter((item) => item.id !== id));
  };
  const handleAddProduct = (item) => {
    setProducts((prev) => [...prev, item]);
  };
  const productListRender = () =>
    products.map((product) => (
      <CardItem
        product={product}
        currency={currency}
        key={product.id}
        productUpdate={productUpdate}
        removeItem={removeItem}
      />
    ));

  return (
    <CardWrapp open={open}>
      <CardTitleWrapp>
        <CardTitle>Card ({products.length})</CardTitle>
      </CardTitleWrapp>

      <CardList>
        {products.length > 0 ? productListRender() : <EmptyList />}

        {recommedProducts.length > 0 && (
          <RecommendProducts
            recommedProducts={recommedProducts}
            currency={currency}
            handleAddProduct={handleAddProduct}
            removeRecommendItem={removeRecommendItem}
          />
        )}
      </CardList>

      <Checkout>
        <CheckoutRow>
          <ShippingParagrah>Shipping</ShippingParagrah>
          <ShippingParagrah>
            {currency}
            {products.length ? shipping : 0}
          </ShippingParagrah>
        </CheckoutRow>
        <CheckoutRow>
          <TotalOrderParagrah>Order Total:</TotalOrderParagrah>
          <TotalOrderParagrah>
            {currency}
            {isInt(totalOrder) ? `${totalOrder}.00` : totalOrder.toFixed(2)}
          </TotalOrderParagrah>
        </CheckoutRow>
        <CardButton>Checkout</CardButton>
      </Checkout>
    </CardWrapp>
  );
};
MiniCard.propTypes = {
  open: PropTypes.bool,
};
export default MiniCard;
