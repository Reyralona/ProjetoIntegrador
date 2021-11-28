import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Navegador(props){

    return (
        <Link href = {props.destino}>
            <div className={styles.buttonTurmas} style={{
            }}>
               {props.texto}
            </div>
        </Link>
    )
}