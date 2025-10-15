const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <img
            src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Company Building"
            style={styles.image}
          />
        </div>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>Welcome to MyStore</h1>
          <p style={styles.description}>
            MyStore is a leading e-commerce platform dedicated to providing
            high-quality products at competitive prices. Founded in 2020, we
            have been serving customers worldwide with a commitment to
            excellence and customer satisfaction.
          </p>
          <p style={styles.description}>
            Our mission is to make online shopping accessible, convenient, and
            enjoyable for everyone. We carefully curate our product selection
            to ensure that every item meets our rigorous quality standards.
          </p>
          <p style={styles.description}>
            With a diverse range of categories including electronics, fashion,
            home goods, and more, we strive to be your one-stop destination for
            all your shopping needs. Our dedicated team works tirelessly to
            bring you the best products and exceptional service.
          </p>
          <div style={styles.statsContainer}>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>10K+</h3>
              <p style={styles.statLabel}>Happy Customers</p>
            </div>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>5K+</h3>
              <p style={styles.statLabel}>Products</p>
            </div>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>50+</h3>
              <p style={styles.statLabel}>Countries</p>
            </div>
          </div>
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
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  imageContainer: {
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    margin: 0,
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#34495e',
    margin: 0,
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    marginTop: '2rem',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  },
  statItem: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '2rem',
    color: '#2c3e50',
    margin: '0 0 0.5rem 0',
  },
  statLabel: {
    fontSize: '1rem',
    color: '#7f8c8d',
    margin: 0,
  },
};

export default Home;
