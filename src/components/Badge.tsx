import React, { FC } from "react";
import { Badge as MaterialBadge } from "@material-ui/core";

interface Props {
  value: number;
}

const Badge: FC<Props> = ({ value, children }) => {
  return <MaterialBadge badgeContent={value}>{children}</MaterialBadge>;
};

export { Badge };
