import React, { Component } from 'react';

class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.cats.map((cats) => {
          return <Breeds passingCats={cats}/>
        })}
      </div>
    )
  }
}

const Breeds = (props) => {
  return (
    <div>
      <li>{props.passingCats}</li>
    </div>
  )
}

export default CatList;
