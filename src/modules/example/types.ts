// states
export interface StateCopy {
  string: string;
  int: number;
  boolean: boolean;
}

// handlers
export type HandleResetStates = () => void;

export type HandleChangeStateString = (value: string) => void;

export type HandleChangeStateInt = (value: number) => void;
