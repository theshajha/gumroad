import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      responseData: null
    }
  }

  fetchAllProducts = () => {
    axios.get('/api/products/') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API
      this.setState({
        message: 'Loaded All Products',
        responseData: response.data // Update the state with the actual data
      });

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  fetchCategoryProducts = () => {
    axios.get('/api/products/category/software-development/') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API
      this.setState({
        message: 'Loaded Category Products',
        responseData: response.data // Update the state with the actual data
      });

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    })
  }

  fetchRecommendedProducts = () => {
    axios.get('/api/products/recommended/') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API
      this.setState({
        message: 'Loaded Recommended Products',
        responseData: response.data // Update the state with the actual data
      });

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    })
  }

  fetchAllCategories = () => {
    axios.get('/api/categories/') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API
      this.setState({
        message: 'Loaded All Categories',
        responseData: response.data // Update the state with the actual data
      });

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    })
  }

  render() {
    return (
        <div className="App">
          <h1>{this.state.message}</h1>
          <button onClick={this.fetchAllProducts}>
            Get All Products
          </button>
          <button onClick={this.fetchAllCategories}>
            Get All Categories
          </button>
          <button onClick={this.fetchRecommendedProducts}>
            Get Recommended Products
          </button>
          <button onClick={this.fetchCategoryProducts}>
            Get Products in a category
          </button>
          <button onClick={this.fetchData}>
            Get Staff Picked Products
          </button>
          <div className="response-data">
            {this.state.responseData &&
                <pre>{JSON.stringify(this.state.responseData, null, 2)}</pre>}
          </div>
        </div>
    );
  }
}

export default App;
