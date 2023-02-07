import { MyContext } from "@/common/context";
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import scss from "./tool-bar.styles.scss";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { switchRoutes } from "@/core/router/routes";

export const ToolBarComponent: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const [anchorEl, open] = React.useState(null);
  const handleClick = (event) => {
    open(event.currentTarget);
  };

  const handleClose = () => {
    open(null);
  };

  return (
    <div className={scss.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={scss.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu id="Menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem component={Link} to={switchRoutes.cat}>
              Cats
            </MenuItem>
            <MenuItem component={Link} to={switchRoutes.dog}>
              Dogs
            </MenuItem>
          </Menu>
          <Typography variant="h6" className={scss.title}>
            Pictures List
          </Typography>
          <IconButton
            edge="start"
            className={scss.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => myContext.setCartVisible(!myContext.cartVisible)}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
