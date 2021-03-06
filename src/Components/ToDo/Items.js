import React, {Component} from 'react';

export default class Items extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}