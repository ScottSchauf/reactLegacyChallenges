import React, { Component } from 'react';

export default class Fetch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
        this.submitChange = this.submitChange.bind(this)
    }

    componentDidMount() {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            this.setState({
                img: data.message
            })
            console.log(data.message);
         })
         .catch((error) => {
             console.log(error);
         })
    }

    submitChange() {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            this.setState({
                img: data.message
            })
            console.log(data.message);
         })
         .catch((error) => {
             console.log(error);
         })
    }

    render() {
        return (
            <div>
                <h1>Random Dog Photo</h1>
                <button onClick={this.submitChange}>Fetch New Dog!</button>
                <br/>
                <br/>
                <img src={this.state.img} alt="dog" />
            </div>
        )
    }
}