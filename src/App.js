import React from 'react';
import './App.css';
import ListItems from './ListItems'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }

  render() {

    const { currentItem, items } = this.state;

    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter task" value={currentItem.text} onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
          <p>{items.text}</p>

          <ListItems theseItems={items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />

        </header>
      </div>
    );
  }
}


export default App;
