import toast, { Toaster } from 'react-hot-toast'
import ArrowIcon from './components/ArrowIcon'
import CopyIcon from './components/CopyIcon'
import { useCypher } from './hooks/useCypher'
import { PLAIN } from './constants'

export default function App () {
  const { from, to, result, setInterchange } = useCypher()

  return (
    <div className='w-screen h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black flex flex-col items-center justify-center'>

      <header className='fixed top-24 w-full flex text-center items-center justify-center'>
        <img src="../public/schnoz.svg" alt="cad logo oficial" width={'48px'} height={'48px'} />
        <h1 className='font-extrabold text-7xl text-white'>CAD</h1>
      </header>

      <main className='flex justify-center'>
        <section className='flex flex-col'>
          <h2 className='text-white font-light text-left max-w-lg pb-2'>
            {
              from === PLAIN
                ? 'Enter your plain message'
                : 'Enter your encrypted message'
            }
          </h2>
          <textarea
            className='resize-none'
            rows={10}
            cols={30}
            onChange={(e) => { console.log(e.target.value) }}
          ></textarea>
        </section>

        <section>
          <button className='mx-12' onClick={() => { setInterchange() } }>
            <ArrowIcon />
          </button>
        </section>

        <section className='flex flex-col'>
          <div className='flex pb-2'>
            <h2 className='text-white font-light text-left max-w-lg pr-2'>
              {
                to === PLAIN
                  ? 'Decrypted result'
                  : 'Encrypted result'
              }
            </h2>
            <button onClick={() => toast.success('Copied to clipboard')}>
              <CopyIcon />
            </button>
          </div>
          <textarea className='resize-none bg-color-white' value={result} rows={10} cols={30} readOnly></textarea>
        </section>
      </main>

      <footer className='fixed left-0 bottom-12 w-full text-center'>
        <h5>
          Made with <span className='text-red-500'>♥</span> by <a href="https://github.com/ivnisc" target='_blank' rel='noreferrer' className='text-blue-500'>ivnisc</a> & <a href='https://github.com/tomas-oa' target='_blank' rel='noreferrer' className='text-blue-500'>tomas-oa</a>
        </h5>
      </footer>

        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </div>
  )
}
