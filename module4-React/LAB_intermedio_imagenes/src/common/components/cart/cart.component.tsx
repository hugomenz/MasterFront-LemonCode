import { Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import scss from "./cart.styles.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { switchRoutes } from "@/core/router/routes";
import { PictureInfo } from "../img-list";

interface Props {
  cartList: PictureInfo[];
  contextCart: string[];
  onDeleteAll: (event) => void;
  onDeleteItem: (event) => void;
}

export const CartComponent: React.FC<Props> = ({ cartList, contextCart, onDeleteAll, onDeleteItem }) => {
  return (
    <>
      <Paper className={scss.root}>
        <List>
          <Typography variant="h6">You have {cartList.length} in the cart</Typography>
          <Button color="primary" disabled={contextCart.length === 0} onClick={onDeleteAll}>
            Delete All
          </Button>
          {cartList.map((picture) => (
            <ListItem key={`item-${picture.id}`}>
              <img className={scss.img} src={picture.picUrl} alt="" />
              <ListItemText primary={picture.title} />
              <ListItemIcon>
                <IconButton edge="end" aria-label="delete" onClick={onDeleteItem} id={`item-${picture.id}`}>
                  <DeleteIcon />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          color="primary"
          disabled={contextCart.length === 0}
          component={Link}
          to={switchRoutes.checkout}
        >
          Check out
        </Button>
      </Paper>
    </>
  );
};
