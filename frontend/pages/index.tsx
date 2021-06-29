import Head from 'next/head';
import withApollo from '../lib/withApollo';
import styles from '../styles/Home.module.css';
import Navbar from '../components/NavBar';

function Home() {
  // if all good return data
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar/>
      <h1>HOME</h1>
    </div>
  );
}
export default withApollo(Home)