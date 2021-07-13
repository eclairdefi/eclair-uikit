import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 26" {...props}>
      <image width={48} height={26} href="/images/egg/9.png"/>
    </Svg>
  );
};

export default Icon;
