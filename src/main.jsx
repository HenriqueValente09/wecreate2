import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './routes/Home.jsx';
import Ballersvision from './routes/Ballersvision.jsx';
import Wemoment from './routes/Wemoment.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      {/* <Route path='/home' element={<Home />} /> */}
      <Route path='/ballersvision' element={<Ballersvision />} />
      <Route path='/wemoment' element={<Wemoment />} />
    </Routes>
  </BrowserRouter>,
)
