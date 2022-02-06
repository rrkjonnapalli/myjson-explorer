import Container from "@mui/material/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Explore from './pages/explore';
import Notfound from './pages/notfound';

function App() {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:path" element={<Explore />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
