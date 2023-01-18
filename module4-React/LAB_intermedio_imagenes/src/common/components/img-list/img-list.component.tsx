import { PictureInfoVM } from "@/common/models";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import scss from "./img-list.styles.scss";

interface Props {
  list: PictureInfoVM[];
  title: string;
  onCheckPicture: (event, checked) => void;
}

export const ImgListComponent: React.FC<Props> = ({ list, title, onCheckPicture }) => {
  return (
    <main>
      <Typography variant="h6">{title}</Typography>
      <section className={scss.picturesContainer}>
        {list.map((item) => (
          <article key={item.id}>
            <img className={scss.pictureImg} src={item.picUrl} alt={item.title} />
            <h1 className={scss.pictureSubheader}>
              <Typography variant="button">{item.title}</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    id={item.id}
                    checked={item.selected}
                    onChange={onCheckPicture}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Buy"
              />
            </h1>
          </article>
        ))}
      </section>
    </main>
  );
};
