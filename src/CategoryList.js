import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 2, categoryName: "Condiments" },
        { categoryId: 3, categoryName: "Roblox" },
        { categoryId: 4, categoryName: "Beta Sürüm"}
      ],
    };
  }

  render() {
    return (
      <div>
        <h3> {this.props.info.title} </h3>
        <h3> {this.state.counter} </h3>
        <ListGroup>
          {
            this.state.categories.map(category => (
              <ListGroupItem onClick={()=>this.props.changeCategory(category)} key = {category.categoryId}> {category.categoryName} </ListGroupItem>
            ))
          }
        </ListGroup>
        <h4> {this.props.currentCategory} </h4>
      </div>
    );
  }
}
