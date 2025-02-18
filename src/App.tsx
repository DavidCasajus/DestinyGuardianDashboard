import { useEffect } from "react";
import "./App.css";
import Page from "./app/dashboard/page";
import { ThemeProvider } from "./components/theme-provider";
import { DestinyService } from "./services/DestinyService";

function App() {
  const getManifestr = async () => {
    const res = await DestinyService.getManifest();
    console.log(res);
  };
  useEffect(() => {
    getManifestr();
  }, []);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Page />
    </ThemeProvider>
  );
}

export default App;
