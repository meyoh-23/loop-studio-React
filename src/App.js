import { Stack } from "@mui/material";
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import About from "./components/About";

function App() {
  return (
    <>
    <Stack spacing={0} maxWidth="1440px">
      <Navbar/>
      <Hero/>
    </Stack>
    <About/>
    </>
  );
}

export default App;
