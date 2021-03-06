import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M3 14.5a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0z" />
      <path
        d="M9.29 5.613c-.122.163.007.387.21.387a8.5 8.5 0 018.5 8.5c0 .204.224.332.387.21A6.5 6.5 0 109.29 5.613z"
      />
    </Svg>
  );
};

export default Icon;
