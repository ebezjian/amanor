import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewItemForm(props) {
  //this function will triger when the form is submitted
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      brand: event.target.brand.value,
      color: event.target.color.value,
      price: event.target.price.value,
      description: event.target.description.value,
      id: v4()});
  }
  return (
    <>
    <form onSubmit={handleNewItemFormSubmission}>
      <input
        type='text'
        name='brand'
        placeholder='Brand Name' />
      <input
        type='text'
        name='color'
        placeholder='Item color' />
      <input
        type='text'
        name='price'
        placeholder='Item price' />
      <textarea
        name='description'
        placeholder='describe item' />  
    <button type='submit'>Add new item</button>
    </form>    
    </>
  );
}

NewItemForm.propTypes = {
  onNewItemCreate: PropTypes.func
};

export default NewItemForm;