import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from './AddItem';
import DeleteLastItem from './DeleteLastItem';
import ItemList from './ItemList';
class App extends React.Component {
  state = {
    //value: '',
    items: [],
  };

  handleAddItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };
   // addItem = event => {
    //event.preventDefault();
   // this.setState(oldState => ({
   //   items: [...oldState.items, this.state.value],
   // }));
  //};

  //deleteLastItem = event => {
  //  this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  //};
  handleDeleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };
  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };
  //noItemsFound = () => {
  //  return this.state.items.length === 0;
  //};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
    	<AddItem onAddItem={this.handleAddItem} />
  
        <DeleteLastItem
          onDeleteLastItem={this.handleDeleteLastItem}
          buttonDisabled={this.noItemsFound()}
        />

        <p className="items">Items</p>
         <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
