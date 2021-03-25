import React, {Component} from 'react';
import { Input } from 'reactstrap';

export default class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      inputField: ''
    }
  }

  handleChange = e => {
    this.setState({inputField: this.state.things})
  }

  searchFunction = (e) => {
    const updatedList = this.state.things.filter((items) => {
      return items.toLowerCase().search(e.target.value.toLowerCase()) !== -1
    })
    this.setState({things: updatedList})
  }  

  render() {
    return (
      <div>
        <Input type="text" onChange={this.searchFunction}/>
        <h3>Results: </h3>
        {this.state.things.map((things) => {
        return <li key={things}>{things}</li>
        })}
      </div>
    )
  }
}



