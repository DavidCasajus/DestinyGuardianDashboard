import "./App.css";
import Page from "./app/dashboard/page";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Page></Page>
    </ThemeProvider>
  );
}

export default App;
