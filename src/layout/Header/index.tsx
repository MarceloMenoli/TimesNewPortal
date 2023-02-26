import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Fab,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  AccountCircle,
  HomeWorkOutlined,
  PersonPinCircle,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              gridColumnGap: "1rem",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Link to="/">
              <Fab size="small" color="default" aria-label="home">
                <HomeWorkOutlined />
              </Fab>
            </Link>
            <Link to="/about-us" >
              <Fab size="small" color="default" aria-label="aboutUs">
                <PersonPinCircle />
              </Fab>
            </Link>
          </Box>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            style={{ padding: "0" }}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Minha conta</MenuItem>
            <MenuItem onClick={handleClose}>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};
