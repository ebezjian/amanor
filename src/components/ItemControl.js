import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: []
    };
  }

  //this is a method that has to be called on an instance of ItemControl class
  handleClick = () => {
    //setState takes an object as an argument this already handles bind
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  };

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem.masterItemList);
    this.setState({
      masterItemList: newMasterItemList,
      FormVisibleOnPage: false
    });
  }
  render() {
    // we havn't determined which component should be visible
    let currentlyVisibleState = null;
    let buttonText = null;
    //access any property in this state
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.masterItemList} />;
      //this is a local state for the refactoring of buttons(and the one in return)
      buttonText = "Add Item";
    }
    return (
      <>
      {currentlyVisibleState}
      
      <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default ItemControl;
