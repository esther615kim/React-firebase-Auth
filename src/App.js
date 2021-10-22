
import {
  Container,
  Card,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  AppBar,
  Avatar,
  Toolbar,
} from "@mui/material";
import { styled } from '@mui/system';

export default function App() {

  return (
    <Container>
      <AppBar>
        <ToolBar>
          <LogoLong >
            firebase Auth
          </LogoLong>
          <LogoSmall>
            practice firebase authentication
          </LogoSmall>
          <Avatar>EK</Avatar>
        </ToolBar>
      </AppBar>
      <Paper></Paper>
    </Container >
  );
}

const ToolBar = styled(Toolbar)({
  display: "flex",
  color: "#212121",
  justifyContent: "space-between",
  alignItems: "center"
})

const LogoSmall = styled(Typography)(({ theme }) => ({
  display: "none",
  color: "yellow",
  [theme.breakpoints.up('sm')]: {
    display: "block"
  }
})
)

const LogoLong = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: "none"
  }
})
)