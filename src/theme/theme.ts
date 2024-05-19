import { PaletteColor, PaletteColorOptions, createTheme } from "@mui/material";
import { blue, red, green } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    incomeColor: PaletteColor;
    expenseColor: PaletteColor;
    balanceColor: PaletteColor;
  }

  interface PaletteOptions {
    incomeColor: PaletteColorOptions;
    expenseColor: PaletteColorOptions;
    balanceColor: PaletteColorOptions;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#DCD98D",
    },
    secondary: {
      main: "#3f51b5",
    },
    incomeColor: {
      main: blue[500],
      light: blue[100],
      dark: blue[700],
    },
    expenseColor: {
      main: red[500],
      light: red[100],
      dark: red[700],
    },
    balanceColor: {
      main: green[500],
      light: green[100],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: 'Noto Sans JP, Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
