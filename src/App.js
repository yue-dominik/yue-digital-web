import * as React from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import { Home } from './routes/home';
import { Nephtyke } from './routes/nephtyke';
import { NephtykeVideo } from './routes/nephtyke-video';
import { Routes, Route} from "react-router-dom";

function App() {
const [locale, setLocale ] = React.useState('ja');
  return (
    <>
      <Navbar {...{locale, setLocale}} />
      <Routes>
        <Route path="/nephtyke" element={<Nephtyke locale={locale} />} />
        <Route path="/nephtyke-video" element={<NephtykeVideo locale={locale} />} />
        <Route path="/" element={<Home locale={locale} />} />
      </Routes>
    </>
  );
}

export default App;
