import './App.css';
import Header from './Header';
import Footer from './Footer';
import Jumbotron from './Components/JumboTron';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ColumnBanner from './Column_image_banners';
import CompanyNumbers from './Components/CompanyNumbers';
import LatestNews from './LatestNews';
import References from './References'
import SubscribeToNews from './SubscribetoNews';
import Main from './Main';

function App() {
  return (
    <Router>

      <Header />
      <Jumbotron />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company" element={<Main />} />
        <Route path="/products" element={<Main />} />
        <Route path="/contact" element={<Main />} />
    
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
