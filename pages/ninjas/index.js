import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link';


export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas : data }
    }
}

const Ninjas = ({ ninjas }) => {
    return ( 
            
        <div>
            <h1>
                ALL Ninjas
                {ninjas.map(ninja => (
                    <Link href={'/ninjas/' + ninja.id}key={ninja.id}>
                        <a className={styles.single}>
                            <h4>{ ninja.name }</h4>
                        </a>
                        
                    </Link>
                ))}
            </h1>
        </div>
     );
}
 
export default Ninjas;