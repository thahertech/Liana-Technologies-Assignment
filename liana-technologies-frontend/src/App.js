import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Contact from './Contact';
import Products from './Products';
import Jumbotron from './Components/JumboTronComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ColumnBanner from './Column_image_banners';
import CompanyNumbers from './Components/CompanyNumbers';
import LatestNews from './LatestNews';
import References from './References'
import SubscribeToNews from './SubscribetoNews';

function App() {
  return (
    <Router>

      <Header />
      <Jumbotron />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company" element={<Footer />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
    
      </Routes>
      <ColumnBanner />
      <CompanyNumbers />
      <LatestNews />
      <References />
      <SubscribeToNews />
      <Footer />
    </Router>
  );
}

export default App;
