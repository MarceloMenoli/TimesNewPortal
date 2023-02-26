import { Box } from "@mui/material";
import { Content } from "./layout/Content";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <Box>
      <GlobalStyle />
      <Content />
    </Box>
  );
}

export default App;
