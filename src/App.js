import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";

export default class App extends Component {

  state = {currentCategory:""}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    let naviInfo = { title: "Navi Component" };

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
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
