import React from "react";
import "./search-bar.styles.css";
import ListItems from "../listItems/list-items.component";

class SearchBar extends React.Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
  };
  handleInputChange = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
    console.log(this.state);
  };
  deleteItem = (key) => {
    const filteredItem = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItem,
    });
  };
  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items,
    });
  };
  render() {
    return (
      <div>
        <form className="to-do-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Todo"
            value={this.state.currentItem.text}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}
export default SearchBar;
