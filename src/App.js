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
    WooCommerce.getAsync('products').then(function(result) {
      this.setState({
        productos: JSON.parse(result.toJSON().body)
      })
    }.bind(this));
    console.log(this.state.productos);
  }
  render() {
    let productos = this.state.productos.map((prod, index) => {
      return(
        <div key={index}>
          <img style={{width:'300px'}} src={prod.images[0].src} alt={prod.id}/>
          <h2>{prod.name}</h2>
           <h3>{prod.price}</h3>
           <p>{prod.description}</p>
        </div>
      )
    })
    return (
      <div className="App">
        {productos}
      </div>
    );
  }
}

export default App;
