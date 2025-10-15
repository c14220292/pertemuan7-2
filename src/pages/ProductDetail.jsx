import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  const handleBackToProducts = () => {
    navigate('/products');
  };

  if (loading) {
    return <div style={styles.loading}>Loading product details...</div>;
  }

  if (error) {
    return <div style={styles.error}>{error}</div>;
  }

  if (!product) {
    return <div style={styles.error}>Product not found</div>;
  }

  return (
    <div style={styles.container}>
      <button onClick={handleBackToProducts} style={styles.backButton}>
        ← Back to Products
      </button>
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <img
            src={product.thumbnail}
            alt={product.title}
            style={styles.image}
          />
          {product.images && product.images.length > 1 && (
            <div style={styles.thumbnailContainer}>
              {product.images.slice(0, 4).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.title} ${index + 1}`}
                  style={styles.thumbnail}
                />
              ))}
            </div>
          )}
        </div>
        <div style={styles.details}>
          <h1 style={styles.title}>{product.title}</h1>
          <div style={styles.priceContainer}>
            <span style={styles.price}>${product.price}</span>
            {product.discountPercentage > 0 && (
              <span style={styles.discount}>
                -{product.discountPercentage}%
              </span>
            )}
          </div>
          <div style={styles.rating}>
            <span style={styles.stars}>★ {product.rating}</span>
            <span style={styles.stock}>
              Stock: {product.stock} units available
            </span>
          </div>
          <div style={styles.description}>
            <h3 style={styles.sectionTitle}>Description</h3>
            <p style={styles.descriptionText}>{product.description}</p>
          </div>
          {product.brand && (
            <div style={styles.info}>
              <strong>Brand:</strong> {product.brand}
            </div>
          )}
          {product.category && (
            <div style={styles.info}>
              <strong>Category:</strong> {product.category}
            </div>
          )}
          <button onClick={handleAddToCart} style={styles.addButton}>
            Add to Cart
          </button>
        </div>
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
  backButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#95a5a6',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginBottom: '2rem',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  image: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  thumbnailContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '0.5rem',
  },
  thumbnail: {
    width: '100%',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '4px',
    border: '2px solid #ecf0f1',
    cursor: 'pointer',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  title: {
    fontSize: '2rem',
    color: '#2c3e50',
    margin: 0,
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  price: {
    fontSize: '2rem',
    color: '#27ae60',
    fontWeight: 'bold',
  },
  discount: {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#e74c3c',
    color: '#fff',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  stars: {
    fontSize: '1.2rem',
    color: '#f39c12',
  },
  stock: {
    fontSize: '1rem',
    color: '#7f8c8d',
  },
  description: {
    marginTop: '1rem',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    color: '#2c3e50',
    margin: '0 0 1rem 0',
  },
  descriptionText: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#34495e',
    margin: 0,
  },
  info: {
    fontSize: '1rem',
    color: '#34495e',
  },
  addButton: {
    padding: '1rem 2rem',
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '1rem',
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

export default ProductDetail;
