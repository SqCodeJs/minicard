import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { device } from "./device";
const GlobalStyles = createGlobalStyle`
* {
	margin:0;
	padding:0;
    box-sizing: border-box;
}
`;
const Img = styled.img`
  width: 100px;
  height: 75px;
`;
const QuantityWrapp = styled.div`
  display: flex;
  margin: 5%;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #6969d1;
  background-color: ${(props) =>
    props.disabled === true ? "#dddddd" : "#6969d1"};
  color: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #5050ba;
  }
  &:nth-child(1) {
    border-radius: 4px 0 0 4px;
  }
  &:nth-child(3) {
    border-radius: 0 4px 4px 0;
  }
`;
const QuantityField = styled.input`
  width: 50px;
  text-align: center;
  border: none;
  &:focus {
    outline: none;
  }
`;
const Strap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 90%;
  transform: ${(props) => `rotate(${props.rotate}deg)`}
    ${(props) => `translate(${props.translate})`};
  background-color: #333333;
`;
const ButtonWrapp = styled.button`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover ${Strap} {
    background-color: rgb(0, 0, 0);
  }
`;
const ItemWrapp = styled.div`
  width: 100%;
  padding: 2% 0 4%;
  display: flex;
  flex-direction: column;

  border: 1px solid #dddddd;
`;
const ImageWrapp = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Row = styled.div`
  width: 100%;
  padding: 2%;
  display: flex;
  justify-content: flex-end;
  align-items: stratch;

  &:nth-child(2) {
    padding: 0 2%;
  }
`;
const Description = styled.div`
  width: 55%;

  display: flex;
  flex-direction: column;
`;
const RemoveButtonWrapp = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-end;
`;
const Title = styled.h2`
  font-family: arial;
  font-weight: 100;
  font-size: 22px;
`;
const Paragrath = styled.p`
  padding: 1%;
  font-family: arial;
  font-weight: 100;
  font-size: 14px;
`;
const Span = styled.span`
  color: #b9b9ed;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 0 1%;
  @media ${device.laptop} {
    width: 65%;
  }
`;
const QuantityWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PriceWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    flex-direction: column;
  }
`;
const Price = styled.span`
  margin: 1%;
  padding: 0 2%;
  &:nth-child(1) {
    text-decoration: line-through;
    color: #b9b9ed;
  }
`;
const Square = styled.div`
  width: 50%;
  display: flex;

  justify-content: flex-start;
  align-items: flex-start;
  @media ${device.mobileL} {
    width: 40%;
  }
  @media ${device.tablet} {
    width: 30%;
  }
  @media ${device.laptop} {
    width: 40%;
  }
`;
const EmptyListStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EmptyListMessage = styled.h1`
  font-family: arial;
  font-weight: 100;
`;
const HamburgerStrap = styled.div`
  position: absolute;
  display: ${(props) => (props.open ? "none" : "block")};
  left: 0;
  right: 0;
  top: 0;
  bottom: 90%;
  transform: ${(props) => `rotate(${props.rotate}deg)`}
    ${(props) => `translate(${props.translate})`};
  background-color: ${(props) => (props.color ? "#333" : "#FFFFFF")};
`;
const HamburgerButtonWrapp = styled.button`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;

  z-index: 2;
  &:hover ${HamburgerStrap} {
    background-color: rgb(0, 0, 0);
  }
`;
const Hamburger = styled.div`
  position: absolute;
  display: flex;
  width: 30px;
  height: 30px;
  right: 1%;
  top: 2%;
`;
const PageWrapp = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #5050ba;
`;
const CardWrapp = styled.div`
  width: 100%;
  @media ${device.laptop} {
    width: 36%;
    min-width: 460px;
    max-width: 520px;
  }
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  display: ${(props) => (props.open === true ? "flex" : "none")};
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  border: 1px solid #dddddd;
  transition: 0.5s;
`;
const CardTitleWrapp = styled.div`
  width: 100%;
  padding: 2%;

  border: 1px solid #dddddd;
`;
const CardTitle = styled.h1`
  font-family: arial;
  font-size: 28px;
`;
const Checkout = styled.div`
  width: 100%;
  padding: 2%;
  font-family: arial;

  border: 1px solid #dddddd;
`;
const CardButton = styled.button`
  width: 100%;
  padding: 3%;
  font-size: 22px;
  color: #fff;
  background-color: #b9b9ed;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #6969d1;
    cursor: pointer;
  }
`;
const ShippingParagrah = styled.p`
  font-size: 14px;
`;
const TotalOrderParagrah = styled(ShippingParagrah)`
  font-size: 22px;
  font-weight: bold;
`;
const CheckoutRow = styled.div`
  width: 100%;
  padding: 1%;
  display: flex;
  justify-content: space-between;
`;
const CardList = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: felx-start;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const RecommendWrapp = styled.div`
  width: 100%;

  padding: 1%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #b9b9ed;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 1%;

  margin: 1%;
  background-color: #fff;
  @media ${device.laptop} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const RecommendTitle = styled.h1`
  margin: 2% 4%;
  font-size: 14px;

  font-family: arial;
`;
const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stratch;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
const ProductTitle = styled.h2`
  font-size: 14px;
  font-weight: 100;
  font-family: arial;
  padding: 1%;
`;
const RecommendImage = styled.div`
  width: 40%;
  padding: 4%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RecommendDescription = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const RowRecommend = styled.div`
  width: 100%;
  padding: 2%;
  display: flex;

  justify-content: space-between;
  align-items: flex-end;
  flex-grow: 1;
`;
const RecommendParagraph = styled.p`
  padding: 2%;
  font-size: 14px;
  font-weight: 100;
  font-family: arial;
`;
const AddButton = styled.button`
  width: 40%;
  padding: 2%;
  font-size: 14px;
  color: #fff;
  border: none;
  background-color: #6969d1;
  border-radius: 4px;
  cursor: pointer;
`;
export {
  GlobalStyles,
  Img,
  QuantityWrapp,
  Button,
  QuantityField,
  Strap,
  ButtonWrapp,
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
  EmptyListStyled,
  EmptyListMessage,
  HamburgerStrap,
  HamburgerButtonWrapp,
  Hamburger,
  PageWrapp,
  CardWrapp,
  CardTitleWrapp,
  CardTitle,
  CardList,
  Checkout,
  CardButton,
  ShippingParagrah,
  TotalOrderParagrah,
  CheckoutRow,
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
};
