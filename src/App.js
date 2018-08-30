import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
// import Product from './component/Product/Product'

class App extends Component {
  render() {

    // {Product}
    return (
      <div className="App">
        <Dashboard></Dashboard>
        <Form></Form>
        <Header></Header>
      </div>
    );
  }
}

export default App;
