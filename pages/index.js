import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
    <div className={styles.container}>
       <h1 className={styles.title}>Home page</h1>
       <p className={styles.text}> hiii my name is keyur patel and i am from commerce background right now i am doing my BCA degree in st.xavier college and it is my small intro thank you</p>
       <p className={styles.text}> hiii my name is keyur patel and i am from commerce background right now i am doing my BCA degree in st.xavier college and it is my small intro thank you</p>
          <Link href="/ninjas">
         <a className={styles.btn}>see ninja listing</a>
         </Link>
    </div>
    </>
  )
}
