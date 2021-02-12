import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }
  render() {
    // we havn't determined which component should be visible
    let currentlyVisibleState = null;
    let addItemButton = null;
    //access any property in this state
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm />;
    } else {
      currentlyVisibleState = <ItemList />;
      addItemButton = <button onClick={this.handleClick}>Add Item</button>;
    }
    return (
      <>
      {currentlyVisibleState}
      {addItemButton}
      </>
    );
  }
}

export default TicketControl;
