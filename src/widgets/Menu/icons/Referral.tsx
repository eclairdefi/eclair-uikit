import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M9 14a5 5 0 00-5 5 3 3 0 003 3h10a3 3 0 003-3 5 5 0 00-5-5H9zM12 2a5 5 0 100 10 5 5 0 000-10z"
      />
    </Svg>
  );
};

export default Icon;
