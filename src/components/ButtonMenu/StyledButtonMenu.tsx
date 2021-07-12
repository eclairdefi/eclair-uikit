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
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  & > button:first-child,
  & > a:first-child {
    border-top-left-radius: 6px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  & > button:last-child,
  & > a:last-child {
    border-top-right-radius: 6px;
  }
`;

export default StyledButtonMenu;
