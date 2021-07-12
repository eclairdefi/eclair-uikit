import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 11a3 3 0 100-6 3 3 0 000 6zm3 10a4 4 0 100-8 4 4 0 000 8z"
      />
      <path d="M21 8a5 5 0 11-10 0 5 5 0 0110 0z" />
    </Svg>
  );
};

export default Icon;
