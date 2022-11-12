import { styled } from "../stitches.config";

export const TabLink = styled("a", {
  position: "relative",
  flexShrink: 0,
  height: "$spacing$13",
  display: "inline-flex",
  lineHeight: 1,
  fontSize: "$fontSize$3",
  px: "$spacing$9",
  userSelect: "none",
  outline: "none",
  alignItems: "center",
  justifyContent: "center",
  color: "$slate11",
  textDecoration: "none",
  "@hover": {
    "&:hover": {
      color: "$hiContrast",
    },
  },
  "&:focus": {
    boxShadow: "inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8",
  },

  variants: {
    active: {
      true: {
        color: "$hiContrast",
        cursor: "default",
        "&::after": {
          position: "absolute",
          content: '""',
          left: 0,
          bottom: 0,
          width: "100%",
          height: 2,
          backgroundColor: "$blue9",
        },
      },
    },
  },
});
