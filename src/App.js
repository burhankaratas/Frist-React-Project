import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";

function App() {
  let productInfo = { title: "Product List" };
  let categoryInfo = { title: "Category List" };
  let naviInfo = {title: "Navi Component"}

  return (
    <div>
      <Container>
        <Row>
          <Navi info={naviInfo} />
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
