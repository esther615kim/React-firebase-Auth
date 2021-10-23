import React from 'react';
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
import Login from './components/Login';

export default function App() {

  return (
    <Container>
      <AppBar position="fixed">
        <ToolBar >
          <LogoLong >
            firebase Auth
          </LogoLong>
          <LogoSmall>
            practice firebase authentication
          </LogoSmall>
          <Avatar>EK</Avatar>
        </ToolBar>
      </AppBar>
      {/* 로그인 토큰이 있어? 없으면 사인인으로 :  */}
      <Login />
    </Container >
  );
}

const ToolBar = styled(Toolbar)({
  display: "flex",
  color: "#fff",
  background: "#212121",
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