import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FF7A00",
  primaryBright: "#c3aa51",
  primaryDark: "#827033",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#200a00",
  input: "#200a00",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#2d2321",
  borderColor: "#E9EAEB",
  card: "#29150beb",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#3e3718",
  background: "#FFFFFF",
  backgroundDisabled: "#2b2a2a",
  contrast: "#FFFFFF",
  invertedContrast: "#FFFFFF",
  input: "#FFFFFF",
  primaryDark: "##0d0e0e",
  tertiary: "#2f2523eb",
  text: "#85989F",
  textDisabled: "#666171",
  textSubtle: "#24536B",
  borderColor: "#E2EAEE",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

