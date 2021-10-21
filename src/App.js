import "./styles.css";
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
  makeStyles
} from "@material-ui/core";

export default function App() {
  const classes = useStyles();
  return (
    <Container>
      <AppBar>
        <Toolbar>
          <Typography classes={classes.logoLong}>
            practice firebase authentication
          </Typography>
          <Avatar>EK</Avatar>
        </Toolbar>
      </AppBar>
      <Paper></Paper>
    </Container>
  );
}

const useStyles = makeStyles(() => {
  logoLong: {
  }
});
