import { PictureInfo } from "@/common/models";
import { Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import scss from "./checkout.styles.scss";
interface Props {
  cartList: PictureInfo[];
}

export const CheckOutComponent: React.FC<Props> = ({ cartList }) => {
  return (
    <>
      <div className={scss.root}>
        <List>
          <Typography variant="h6" color="primary">
            Check Out Page
          </Typography>
          <Button variant="contained" color="primary">
            Click to buy
          </Button>
          {cartList.map((picture) => (
            <ListItem key={`item-${picture.id}`}>
              <img className={scss.img} src={picture.picUrl} alt="" />
              <ListItemText primary={picture.title} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};
