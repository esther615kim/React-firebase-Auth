import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
