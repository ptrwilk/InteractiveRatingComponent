import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import InteraciveRatingComponent from "./Components/InteraciveRatingComponent/InteraciveRatingComponent";
import "./styles.css";

const theme = createTheme({
  typography: {
    fontFamily: "Overpass",
    body1: {
      fontSize: 15,
    },
    h1: {
      fontSize: 28,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <InteraciveRatingComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
