import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.681 7.165a1.5 1.5 0 00-1.362 0l-5.5 2.805A1.5 1.5 0 005 11.306V18a3 3 0 003 3h.86c.63 0 1.14-.51 1.14-1.14V17a2 2 0 114 0v2.86c0 .63.51 1.14 1.14 1.14H16a3 3 0 003-3v-6.694a1.5 1.5 0 00-.819-1.336l-5.5-2.805z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.106 8.447a1 1 0 001.341.447L12 5.118l7.553 3.776a1 1 0 10.894-1.789l-8-4a1 1 0 00-.894 0l-8 4a1 1 0 00-.447 1.342z"
      />
    </Svg>
  );
};

export default Icon;
