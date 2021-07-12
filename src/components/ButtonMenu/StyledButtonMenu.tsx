import styled, { DefaultTheme } from "styled-components";
import { Variants, variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variants;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const StyledButtonMenu = styled.div<{ variant: Variants }>`
  background-color: ${getBackgroundColor};
  border-radius: 6px 6px 0 0;
  display: inline-flex;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }

  & > button:first-child,
  & > a:first-child {
    border-top-left-radius: 6px;
  }

  & > button:last-child,
  & > a:last-child {
    border-top-right-radius: 6px;
  }
`;

export default StyledButtonMenu;
