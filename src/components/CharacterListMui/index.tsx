import React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";

type ListItem = {
  id: number;
  title: string;
  description: string;
  tag: string;
}

type Props = {
  items: ListItem[];
}

export const CharacterListMui = ({ items }: Props) => {
  return (
    <List>
      {items.map((item: ListItem) => (
        <ListItemButton key={item.id}>
          {/* conteúdo do list item */}
          <ListItemText primary={item.title} secondary={item.description} />
          <div>{item.tag}</div>
        </ListItemButton>
      ))}
    </List>
  );
}
