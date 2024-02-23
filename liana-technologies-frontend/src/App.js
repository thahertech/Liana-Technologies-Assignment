import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Contact from './Contact';
import Products from './Products';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company" element={<Footer />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
