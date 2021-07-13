import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 197 93" {...props}>
      <image width={197} height={93} href="/images/egg/9.png"/>
    </Svg>
  );
};

export default Icon;
