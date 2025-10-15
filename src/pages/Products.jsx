import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleView = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  if (loading) {
    return <div style={styles.loading}>Loading products...</div>;
  }

  if (error) {
    return <div style={styles.error}>{error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Products</h1>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <div style={styles.imageContainer}>
              <img
                src={product.thumbnail}
                alt={product.title}
                style={styles.image}
              />
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.productTitle}>{product.title}</h3>
              <p style={styles.productPrice}>${product.price}</p>
              <p style={styles.productDescription}>
                {product.description.length > 80
                  ? `${product.description.substring(0, 80)}...`
                  : product.description}
              </p>
              <div style={styles.buttonContainer}>
                <button
                  onClick={() => handleView(product.id)}
                  style={styles.viewButton}
                >
                  View
                </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  style={styles.cartButton}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  title: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '1.5rem',
  },
  productTitle: {
    fontSize: '1.2rem',
    color: '#2c3e50',
    margin: '0 0 0.5rem 0',
  },
  productPrice: {
    fontSize: '1.5rem',
    color: '#27ae60',
    fontWeight: 'bold',
    margin: '0 0 1rem 0',
  },
  productDescription: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    lineHeight: '1.6',
    margin: '0 0 1.5rem 0',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },
  viewButton: {
    flex: 1,
    padding: '0.75rem',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  cartButton: {
    flex: 1,
    padding: '0.75rem',
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  loading: {
    textAlign: 'center',
    padding: '4rem',
    fontSize: '1.2rem',
    color: '#7f8c8d',
  },
  error: {
    textAlign: 'center',
    padding: '4rem',
    fontSize: '1.2rem',
    color: '#e74c3c',
  },
};

export default Products;
