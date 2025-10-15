import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
  } = useCart();

  const handleContinueShopping = () => {
    navigate('/products');
  };

  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <h2 style={styles.emptyTitle}>Your Cart is Empty</h2>
        <p style={styles.emptyText}>
          Add some products to your cart to see them here!
        </p>
        <button onClick={handleContinueShopping} style={styles.shopButton}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Shopping Cart</h1>
      <div style={styles.content}>
        <div style={styles.itemsContainer}>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img
                src={item.thumbnail}
                alt={item.title}
                style={styles.itemImage}
              />
              <div style={styles.itemDetails}>
                <h3 style={styles.itemTitle}>{item.title}</h3>
                <p style={styles.itemPrice}>${item.price}</p>
              </div>
              <div style={styles.quantityControls}>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  style={styles.quantityButton}
                >
                  -
                </button>
                <span style={styles.quantity}>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  style={styles.quantityButton}
                >
                  +
                </button>
              </div>
              <div style={styles.itemTotal}>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div style={styles.summary}>
          <h2 style={styles.summaryTitle}>Order Summary</h2>
          <div style={styles.summaryRow}>
            <span>Subtotal:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <div style={styles.summaryRow}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div style={styles.summaryDivider}></div>
          <div style={styles.summaryTotal}>
            <span>Total:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <button style={styles.checkoutButton}>
            Proceed to Checkout
          </button>
          <button
            onClick={handleContinueShopping}
            style={styles.continueButton}
          >
            Continue Shopping
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
  title: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '2rem',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '2rem',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  itemImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: '1.2rem',
    color: '#2c3e50',
    margin: '0 0 0.5rem 0',
  },
  itemPrice: {
    fontSize: '1rem',
    color: '#27ae60',
    margin: 0,
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  quantityButton: {
    width: '30px',
    height: '30px',
    border: '1px solid #bdc3c7',
    backgroundColor: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
  quantity: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    minWidth: '30px',
    textAlign: 'center',
  },
  itemTotal: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    minWidth: '100px',
    textAlign: 'right',
  },
  removeButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  summary: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    height: 'fit-content',
  },
  summaryTitle: {
    fontSize: '1.5rem',
    color: '#2c3e50',
    margin: '0 0 1.5rem 0',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    fontSize: '1rem',
    color: '#34495e',
  },
  summaryDivider: {
    height: '1px',
    backgroundColor: '#ecf0f1',
    margin: '1rem 0',
  },
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '1.5rem',
  },
  checkoutButton: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '1rem',
  },
  continueButton: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  emptyContainer: {
    maxWidth: '600px',
    margin: '4rem auto',
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  emptyTitle: {
    fontSize: '2rem',
    color: '#2c3e50',
    margin: '0 0 1rem 0',
  },
  emptyText: {
    fontSize: '1.1rem',
    color: '#7f8c8d',
    margin: '0 0 2rem 0',
  },
  shopButton: {
    padding: '1rem 2rem',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    cursor: 'pointer',
  },
};

export default Cart;
