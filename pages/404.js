import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {

    const router = useRouter();
    useEffect(() =>{
            setTimeout(() => {
                // router.go(-1)
                router.push('/');
            },1000)
    }, [])
    return (
        <div className="not-found">
            <h1>Oooooops.....</h1>
            <h2>The Page Can Not Be Found</h2>
            <p>Go Back To The <Link href="/"><a className={styles.btn}>Home page</a></Link></p>
        </div>
    )
}
