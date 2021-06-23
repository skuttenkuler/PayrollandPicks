import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  // if all good return data
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>HOME</h1>
    </div>
  );
}