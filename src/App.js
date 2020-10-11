import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Header.jsx";
import AddProduct from "./components/AddProduct.jsx";
import ListProduct from "./components/ListProduct";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header></Header>
        <AddProduct />
        <ListProduct />
      </div>
    </Provider>
  );
}

export default App;
