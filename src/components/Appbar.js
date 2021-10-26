import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import { styled } from '@mui/system';
import {
    Container,
    Card,
    Grid,
    Paper,
    ButtonGroup,
    Typography,
    Button,
    TextField,
    AppBar,
    Avatar,
    Toolbar,
} from "@mui/material";

const Appbar = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/login" exact component={Login} />
                    <Route exact path="/signup" exact component={Signup} />
                </Switch>

                <AppBar position="fixed">
                    <ToolBar >
                        <LogoLong >
                            firebase Auth
                        </LogoLong>
                        <LogoSmall>
                            practice firebase authentication
                        </LogoSmall>
                        <Icons>
                            <ButtonGroup>
                                <Link to="/signup">
                                    <Button>Register</Button>
                                </Link>
                                <Button>Sign Out</Button>
                            </ButtonGroup>
                            <Avatar size="small" sx={{ ml: 5 }}>EK</Avatar>
                        </Icons>
                    </ToolBar>
                </AppBar>
            </Router>
        </div>
    );
}

export default Appbar;

//styles
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

const Icons = styled('div')({
    display: "flex",

})