import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Home } from './routes/home';
import { Nephtyke } from './routes/nephtyke';
import { NephtykeVideo } from './routes/nephtyke-video';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/nephtyke" element={<Nephtyke />} />
        <Route path="/nephtyke-video" element={<NephtykeVideo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
