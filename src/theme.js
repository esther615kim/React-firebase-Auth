import { createTheme } from "@material-ui/core"; //코어에서!!
import { indigo, teal } from "@material-ui/core";
export const theme = createTheme({
  palette: {
    primary: {
      // main: teal[300]
      main: "#4db6ac"
    },
    secondary: {
      // main: indigo[300]
      main: "#5c6bc0"
    }
  }
});
