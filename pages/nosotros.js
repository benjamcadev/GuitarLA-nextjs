import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/future/image'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre Nosotros, GuitarLA'}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>

        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Imagen sobre nosotros'/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend metus at pretium aliquet. Donec in quam sit amet augue pulvinar vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quam odio, scelerisque a ultrices et, pharetra at velit. Nullam gravida ultrices arcu, et laoreet purus. Nunc laoreet mauris nec leo tempus efficitur. Donec elit mauris, ornare pellentesque tristique id, finibus vel diam.</p>
            <p>Nam in rutrum dui. Mauris auctor dolor vel mauris congue consectetur. Curabitur porttitor tempus porttitor. Duis molestie, ante ac tempor maximus, mauris mi maximus justo, non convallis turpis quam et diam. Duis nibh diam, sollicitudin et mattis id, aliquet in dui. Quisque ullamcorper augue non felis blandit mattis. Aenean non quam aliquam, tincidunt ex vitae, mattis diam. Donec pulvinar ex eu lorem tempus, faucibus vulputate eros efficitur. Nullam molestie in elit et sagittis. Pellentesque efficitur lacus sed augue tincidunt, sollicitudin consectetur nunc hendrerit. Fusce consectetur felis nec felis egestas luctus viverra in dui.</p>
          </div>

        </div>
      </main>

    </Layout>

  )
}
