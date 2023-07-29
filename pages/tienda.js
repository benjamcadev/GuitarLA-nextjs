
import Layout from '../components/layout'
import ListadoGuitarras from '../components/listado-guitarras'
import second from '../components/listado-guitarras'
export default function Tienda() {
  return (
    <Layout
    title={'Tienda Virtual'}
    description={'Tienda virtual de guitarras, GuitarLA'}
    >
    
    <main className='contenedor'>
      <h1 className='heading'>Nuestra Colección</h1>
      <ListadoGuitarras 
      
      
      />
    </main>
    </Layout>
   
  )
}
