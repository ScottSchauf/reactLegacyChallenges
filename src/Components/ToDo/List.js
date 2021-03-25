import React, {Component} from 'react';
import Items from './Items';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['']
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

        this.setState((prevState) => {
            return {
                items: prevState.items.concat(newItem)
            };
        });

        this._inputElement.value = "";
        }

        console.log(this.state.items);
        e.preventDefault();
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input placeholder="enter task" ref={(a) => this._inputElement = a}></input>
                    <button type="submit">Add Task</button>
                </form>
                (Click item to delete a task)
                <Items entries={this.state.items} delete={this.deleteItem}/>
            </div>
        )
    }
}