import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Product from "../pages/Product";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";

interface Props {}

const Navigator: FC<Props> = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/catalog" component={Catalog} />
      <Route exact path="/cart" component={Cart} />
      <Route path="/products/:id" component={Product} />
    </Switch>
  </Router>
);

export { Navigator };
