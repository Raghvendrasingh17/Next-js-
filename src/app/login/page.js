'use client'
import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === '1234')
     {
      router.push('/about'); 
    }
     else 
    {
      alert('Invalid User Name $ Password');
    }
    
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login Page</h2>
      <form onSubmit={handleSubmit} style={styles.form} method='get'>
        <div style={styles.inputContainer}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>
          Login 
        </button>
        <Link href="/signpage">Signup</Link>

        <br/>
        <Link href="/">Home</Link>
        <br/>
        <Link href="/contact">Contact</Link>
        <br/>
        <Link href="/about">About</Link>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    padding: '50px',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    border: 'none',
    backgroundColor: '#0070f3',
    color: 'white',
  },
};
