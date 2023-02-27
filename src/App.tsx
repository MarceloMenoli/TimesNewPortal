import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Content } from "./layout/Content";
import { GlobalStyle } from "./styles/GlobalStyle";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Content />
    </QueryClientProvider>
  );
}

export default App;
