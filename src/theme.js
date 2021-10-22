import { createTheme } from '@mui/material/styles';//코어에서!!
import { indigo, teal } from '@mui/material/colors';
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
