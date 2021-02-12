import React from 'react';
import Item from './Item';
import PropTypes from "prop-types";

function ItemList(props) {
  //passing props to ticket.js
  return (
    <>
    {props.itemList.map((item, index) =>
      <Item
        brand={item.brand}
        color={item.color}
        price={item.price}
        description={item.description}
        key={index}/>
      )}
    </>
  );
}
ItemList.propTypes = {
  itemList: PropTypes.array
};
export default ItemList;