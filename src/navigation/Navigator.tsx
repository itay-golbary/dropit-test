import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Product from "../pages/Product";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";

interface Props {}

const NavigatorAsRoute: FC = () => (
  <div>
    <Switch>
      <Route path="/catalog">
        <Catalog />
      </Route>
      <Route exact path="/catalog/cart">
        <Cart />
      </Route>
    </Switch>
  </div>
);

const Navigator: FC<Props> = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/catalog">
        <NavigatorAsRoute />
      </Route>
      {/*<Route path="/products/:id" component={Product} />*/}
    </Switch>
  </Router>
);

export { Navigator };
