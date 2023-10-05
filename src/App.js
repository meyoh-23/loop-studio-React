import { Stack } from "@mui/material";
import Hero from "./components/Hero";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Stack spacing={0}>
      <Navbar/>
      <Hero/>
    </Stack>
    </>
  );
}

export default App;
