// (application) dependencies imports
import React, { FC } from "react";

// (local) context imports
import useExample from "./useExample";
import useStylesExample from "./useStylesExample";

// (local) interfaces and types
interface Props {}

const Example: FC<Props> = ({ children }) => {
  // contexts
  const {
    // states
    stateString,
    stateInt,
    stateBoolean,

    // values
    stringifyStates,

    // handlers
    handleResetStates,
    handleChangeStateString,
    handleChangeStateInt,
    handleSetTrueStateBoolean,
    handleSetFalseStateBoolean,
    handleToggleStateBoolean,
  } = useExample();

  const classes = useStylesExample();

  return <div className={classes.container}>{children}</div>;
};

export default Example;
