import { forwardRef } from "react";
import Paper, { PaperProps } from "@mui/material/Paper";
import Container from "@mui/material/Container";

export interface HeaderProps
  extends Omit<PaperProps, "elevation" | "square" | "component" | "variant"> {
  elevation?: number;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ children, elevation = 2, sx, ...props }, ref) => (
    <Paper
      ref={ref}
      component="header"
      square
      elevation={elevation}
      sx={{ padding: 2, ...sx }}
      {...props}
    >
      <Container>{children}</Container>
    </Paper>
  )
);
