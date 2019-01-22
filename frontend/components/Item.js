import React from "react";
import PropTypes from "prop-types";
import Title from "./styles";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";

class Item extends React.Component {
  static propTypes = {
    item: propTypes.object.isRequired
  };
  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        <Title>{item.title}</Title>
      </ItemStyles>
    );
  }
}

export default Item;
