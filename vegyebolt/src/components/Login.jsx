import { useRef } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const username = useRef();
  const handleSubmit = (e) => {   
    e.preventDefault(); 
  };
  return (
    <div className={styles.container}>
      <h2>Bejelentkezés</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="Felhasználónév" ref={username} className={styles.input}/>
        <input type="password" placeholder="Jelszó" className={styles.input}/>
        <button type="submit" className={styles.button}>Belépés</button>
      </form>
    </div>
  );
};
export default Login;