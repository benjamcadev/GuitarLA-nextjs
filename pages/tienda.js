
import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'

export default function Tienda({ data: guitarras }) {

  
  return (
    <Layout
    title={'Tienda Virtual'}
    description={'Tienda virtual de guitarras, GuitarLA'}
    >
    
    <main className='contenedor'>
      <h1 className='heading'>Nuestra Colección</h1>

      <div className={styles.grid}>
      {guitarras.map(guitarra => (
        <Guitarra
        key={guitarra.id}
        guitarra={guitarra.attributes}
        />
      ))}
      </div>
      
    </main>
    </Layout>
   
  )
}

// export async function getStaticProps() {

//   // Esto se renderiza o lo visualizas por el terminal del server

//   const respuesta = await fetch(`${process.env.API_URL}`)
//   const { data } = await respuesta.json()

  
// // data retorna y es accesible en el componente
//   return{
//     props: {
//       data
//     }
//   }
// }

export async function getServerSideProps() {

  // Esto se renderiza o lo visualizas por el terminal del server

  const respuesta = await fetch(`${process.env.API_URL}`)
  const { data } = await respuesta.json()

  
// data retorna y es accesible en el componente
  return{
    props: {
      data
    }
  }
}
