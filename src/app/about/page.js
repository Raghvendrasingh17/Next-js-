import Link from "next/link";

export default function About() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.text}>
          Welcome to our website! We are dedicated to providing the best service to our customers.
          Our team is passionate about what we do, and we strive to create a platform that meets your needs.
        </p>
        <p style={styles.text}>
          Our mission is to deliver high-quality products and exceptional customer service. We believe in innovation,
          creativity, and the power of technology to solve everyday challenges. Thank you for choosing us!
        </p>
        <Link href="/">Home Page</Link>
        <br/>
        <Link href="/contact">Contact</Link>
      </div>
    );
  }
  
  const styles = {
    container: {
      maxWidth: '800px',
      padding: '50px',
      textAlign: 'center',
      lineHeight: '1.6',
      backgroundColor: 'red',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: 'black',
    },
    text: {
      fontSize: '1.2rem',
      marginBottom: '15px',
      color: '#555',
      color: 'White',

    },
  };
  