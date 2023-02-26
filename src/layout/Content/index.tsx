import { Box } from "@mui/material";
import { Router } from "../../routes";
import { Header } from "../Header";

export const Content = () => {
  return (
    <Box>
      <Header />
      <Router />
    </Box>
  );
};
