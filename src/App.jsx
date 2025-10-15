import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div style={styles.app}>
          <Navbar />
          <main style={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </CartProvider>
    </Router>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
  },
  main: {
    minHeight: 'calc(100vh - 72px)',
  },
};

export default App;
