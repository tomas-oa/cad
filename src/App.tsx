import Header from './components/Header'
import Footer from './components/Footer'
import Cypher from './components/Cypher'

export default function App () {
  // TODO: add copy to clipboard functionality
  // TODO: add loading state ? (maybe not) -> use debounce -> call api to encrypt/decrypt w/useEffect

  return (
    <div className='mix-w-screen min-h-screen bg-[#030711] flex flex-col justify-between'>
      <Header />
      <Cypher />
      <Footer />
    </div>
  )
}
