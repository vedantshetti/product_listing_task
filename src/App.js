import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  return (
    <div className="App">
      <Router>
        <Header setSearchTerm={setSearchTerm} /> {/* Pass the search term handler */}
        <Switch>
          <Route path="/" exact>
            <ProductListing searchTerm={searchTerm} /> {/* Pass the search term to ProductListing */}
          </Route>
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
