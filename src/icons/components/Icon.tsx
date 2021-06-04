import React, { FC } from "react";

interface Props {
  d: string;
}

const Icon: FC<Props> = ({ d }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d={d} />
    </svg>
  );
};

export { Icon };
