import React from 'react';
//only import this dependecy when we need proptypes so it's not global
import PropTypes from 'prop-types';

function Item(props) {
  return(
    <>
    <h1>item placeholder</h1>
    </>
  );
}
//do not capitalize propTypes always lowercase/camelcase
Item.propTypes = {
  //PropTypes is uppercase because it is imported library
  brand: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default Item;