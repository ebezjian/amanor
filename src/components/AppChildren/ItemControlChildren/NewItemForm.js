import React from 'react';
import { v4 } from 'uuid';

function NewItemForm(props) {
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

export default NewItemForm;