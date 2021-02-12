import React from 'react';
import Item from './Item';
import PropTypes from "prop-types";

function ItemList() {
  //passing props to ticket.js
  return (
    <Item 
    {props.itemList.map((item, index) =>
      <Item
      name={item.name}
      color={item.color}
      price={item.price}
      description={item.description}
      key={index}/>
      )}
    />
  );
}
ItemList.propTypes = {
  itemList: PropTypes.array
};
export default ItemList;