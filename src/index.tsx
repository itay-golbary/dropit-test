import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";

import { store } from "./redux";
import { Navigator } from "./navigation";

const App: FC = () => {
  return (
    <div>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
