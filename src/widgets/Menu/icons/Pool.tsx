import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 9a1 1 0 00-1-1h-1c0-.988-.013-1.506-.218-1.908a2 2 0 00-.874-.874c-.402-.205-.92-.217-1.908-.218V4a1 1 0 10-2 0v1h-4V4a1 1 0 00-2 0v1c-.988 0-1.506.013-1.908.218a2 2 0 00-.874.874C5.013 6.494 5.001 7.012 5 8H4a1 1 0 100 2h1v4H4a1 1 0 100 2h1c0 .988.013 1.506.218 1.908a2 2 0 00.874.874c.402.205.92.217 1.908.218v1a1 1 0 102 0v-1h4v1a1 1 0 102 0v-1c.988 0 1.506-.013 1.908-.218a2 2 0 00.874-.874c.205-.402.217-.92.218-1.908h1a1 1 0 100-2h-1v-4h1a1 1 0 001-1zm-10 1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2z"
      />
    </Svg>
  );
};

export default Icon;
