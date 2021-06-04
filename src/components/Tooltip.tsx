import React, { FC } from "react";
import { Tooltip as MaterialTooltip } from "@material-ui/core";
import styled from "styled-components";

const StyledTooltip = styled(MaterialTooltip)`
  width: 100%;
  //margin-inline: 40px;

  .Tooltip__container {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

interface Props {
  title: string;
}

const Tooltip: FC<Props> = ({ title, children }) => {
  return (
    <StyledTooltip title={title}>
      <div className="Tooltip__container">{children}</div>
    </StyledTooltip>
  );
};

export { Tooltip };
