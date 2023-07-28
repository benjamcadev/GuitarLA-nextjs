import Link from 'next/link'
import Layout from '../components/layout'

export default function Nosotros() {
  return (
    <Layout
    title={'Nosotros'}
    description={'Sobre Nosotros, GuitarLA'}
    >
      <h1>Nosotros.js</h1>
      <Link href="/">Ir al index</Link>
    </Layout>
   
  )
}
