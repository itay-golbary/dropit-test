import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  id: string;
}

const Product: FC<RouteComponentProps<MatchParams>> = ({
  match: {
    params: { id },
  },
}) => {
  return <div>product id: {id}</div>;
};

export default Product;
