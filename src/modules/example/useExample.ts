// (application) dependencies imports
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// (application) tools imports
import useFlag from "../../hooks/useFlag";

// (local) context imports
import {
  HandleChangeStateInt,
  HandleChangeStateString,
  HandleResetStates,
} from "./types";
import {
  resetExampleStateCopy,
  selectExampleStateCopy,
  updateExampleStateCopy,
} from "./exampleSlice";

const useExample = () => {
  // application helpers
  const dispatch = useDispatch();

  // application state
  const stateCopy = useSelector(selectExampleStateCopy());

  // (local) states
  const [stateString, setStateString] = useState(stateCopy.string);
  const [stateInt, setStateInt] = useState(stateCopy.int);
  const [
    stateBoolean,
    handleSetTrueStateBoolean,
    handleSetFalseStateBoolean,
    handleToggleStateBoolean,
  ] = useFlag(stateCopy.boolean);

  // (local) values
  const stringifyStates = useMemo(
    () =>
      `string: ${stateString},\nint: ${stateInt},\nboolean: ${stateBoolean}`,
    [stateString, stateInt, stateBoolean]
  );

  // (local) handlers
  const handleResetStates: HandleResetStates = useCallback(() => {
    dispatch(resetExampleStateCopy());
  }, [dispatch]);

  const handleChangeStateString: HandleChangeStateString = useCallback(
    (value) => {
      setStateString(value);
    },
    []
  );

  const handleChangeStateInt: HandleChangeStateInt = useCallback((value) => {
    setStateInt(value);
  }, []);

  // (local) effects
  useEffect(() => {
    dispatch(
      updateExampleStateCopy({
        string: stateString,
        int: stateInt,
        boolean: stateBoolean,
      })
    );
  }, [stateString, stateInt, stateBoolean]);

  // returns
  return {
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
  };
};

// exports
export default useExample;
