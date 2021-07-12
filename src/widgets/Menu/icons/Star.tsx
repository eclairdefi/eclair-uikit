import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M10.609 2.938c.505-1.252 2.277-1.252 2.782 0l1.937 4.802a.5.5 0 00.423.311l4.867.397c1.319.108 1.862 1.747.868 2.622l-3.692 3.247a.5.5 0 00-.159.483l1.181 5.367c.295 1.341-1.216 2.34-2.335 1.544l-4.191-2.984a.5.5 0 00-.58 0l-4.191 2.985c-1.119.796-2.63-.204-2.335-1.545l1.18-5.367a.5.5 0 00-.158-.483L2.514 11.07c-.994-.875-.451-2.514.868-2.622l4.867-.397a.5.5 0 00.423-.311l1.937-4.802z"
      />
    </Svg>
  );
};

export default Icon;
