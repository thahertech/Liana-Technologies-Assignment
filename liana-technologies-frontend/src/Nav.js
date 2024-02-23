import { Link } from 'react-router-dom';
import Logo from './Assets/Liana_Logo.png';


function Navigation() {
  return (
    <nav>
      <Link to="/"><img src={Logo} alt='' /></Link>
      <Link to="/company">Company</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
}

export default Navigation;
