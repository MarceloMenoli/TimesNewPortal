import { Box } from "@mui/material";
import { useState } from "react";
// import reactLogo from './assets/react.svg'
import reactLogo from "../../assets/react.svg";
import { Header } from "./layout/Header";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyle";
// import "./styles.css";

function App() {
  return (
    <Box>
      <GlobalStyle />
      <Header />
    </Box>
  );
}

export default App;
