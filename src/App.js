import React, { Component } from 'react';
import './App.css';


var WooCommerceAPI = require('woocommerce-api');

var WooCommerce = new WooCommerceAPI({
  url: 'http://bailarincosmico.com.ar/clientes/dummy', // Your store URL
  consumerKey: 'ck_725c120e481d4c640b0f56ce40e28888ed5e5a40', // Your consumer key
  consumerSecret: 'cs_1e2b0809f7a63303231eaf5b6d289e9f10243221', // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v3' // WooCommerce WP REST API version
});




class App extends Component {
  constructor(){
    super();
    this.state = {
      productos: []
    }
  }

  componentDidMount() {
    WooCommerce.get('products', function(err, data, res) {
      this.setState({
        productos: res
      })
      console.log(res);
    }.bind(this))
  }
  render() {
    let productos = this.state.productos.map((prod, index) => {
      return(
        <div key={index}>
        </div>
      );
    })
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
