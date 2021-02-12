import React from 'react';
import Item from './Item';

function ItemList() {
  //passing props to ticket.js
  return (
    <Item 
    {masterItemList.map((item, index) =>
      <Item 
      brand={item.brand}
      color={item.color}
      price={item.price}
      description={item.description}
      key={index}/>
      )}
    />
  );
}

export default ItemList;