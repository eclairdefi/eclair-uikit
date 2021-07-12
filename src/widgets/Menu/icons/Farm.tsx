import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M4.22 13.383L12.849 2.39c.62-.79 1.887-.275 1.78.723L14 9h5.004a1 1 0 01.787 1.618L11.15 21.62c-.62.79-1.887.275-1.78-.724L10 15H5.006a1 1 0 01-.786-1.617z"
      />
    </Svg>
  );
};

export default Icon;
