import logo from '../public/img/logo.svg'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import Image from 'next/future/image'

export default function header() {
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <Image src="/img/logo.svg" width={300} height={40} alt='imagen-logotipo' />

            <nav className={styles.navegacion}>
                <Link href='/'>
                    Inicio
                </Link>

                <Link href='/nosotros'>
                    Nosotros
                </Link>

                <Link href='/blog'>
                    Blog
                </Link>

                <Link href='/tienda'>
                    Tienda
                </Link>
            </nav>

        </div>
    </header>
  )
}
