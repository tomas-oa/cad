import ArrowIcon from './components/ArrowIcon'
import { useCypher } from './hooks/useCypher'
import { PLAIN } from './constants'

export default function App () {
  const { from, to, setInterchange } = useCypher()

  return (
    <div className='w-screen h-screen bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center'>
      <header className='flex text-center items-center justify-center pt-24'>
        <h1 className='font-extrabold text-7xl text-white'>CAD</h1>
      </header>

      <main className='flex justify-center w-3/4 mx-auto mt-12'>
        <section className='flex flex-col'>
          <h2 className='text-white font-light text-left max-w-lg'>
            {
              from === PLAIN
                ? 'Introduce tu mensaje'
                : 'Introduce el mensaje encriptado'
            }
          </h2>
        </section>

        <button className='mx-24' onClick={() => { setInterchange() } }>
          <ArrowIcon />
        </button>

        <section className='flex flex-col'>
          <h2 className='text-white font-light text-left max-w-lg'>
            {
              to === PLAIN
                ? 'Resultado desencriptado'
                : 'Resultado encriptado'
            }
          </h2>
        </section>
      </main>

        <footer className='pt-96'>
          <h5>
            Hecho con <span className='text-red-500'>♥</span> por <a href='https://github.com/tomas-oa' target='_blank' rel='noreferrer' className='text-blue-500'>tomas-oa</a> y <a href="https://github.com/ivnisc" target='_blank' rel='noreferrer' className='text-blue-500'>ivnisc</a>
          </h5>
        </footer>
    </div>
  )
}
