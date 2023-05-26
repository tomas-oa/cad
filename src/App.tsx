import { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import ArrowIcon from './components/ArrowIcon'
import CopyIcon from './components/CopyIcon'
import { useCypher } from './hooks/useCypher'
import { PLAIN } from './constants'

export default function App () {
  const { from, to, result, original, setInterchange, setOriginal, setResult } = useCypher()
  // TODO: add copy to clipboard functionality
  // TODO: add loading state ? (maybe not) -> use debounce -> call api to encrypt/decrypt w/useEffect

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const copyToClipboard = () => {
    const text = textareaRef.current

    if (text != null) {
      navigator.clipboard.writeText(text.value)
        .then(() => {
          toast.success('Copied to clipboard')
        })
        .catch((e) => {
          toast.error('Ups! Something went wrong')
          console.error(e)
        })
    }
  }

  return (
    <div className='w-screen h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black flex flex-col items-center justify-center'>

      <header className='fixed top-24 w-full flex text-center items-center justify-center'>
        <img src="/public/schnoz.svg" alt="cad logo oficial" width={'48px'} height={'48px'} />
        <h1 className='font-extrabold text-7xl text-white mx-2'>CAD</h1>
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
            className='resize-none border-2 border-[#1d283a] bg-[#030711] rounded-xl text-[#f8fafc] p-2'
            rows={10}
            cols={30}
            placeholder='Type your message here.'
            onChange={(e) => { setOriginal(e.target.value) }}
            value={original}
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
            <button onClick={copyToClipboard}>
              <CopyIcon />
            </button>
          </div>
          <textarea
            className='resize-none border-2 border-[#1d283a] bg-[#070b14] rounded-xl text-[#f8fafc] p-2'
            value={result}
            rows={10}
            cols={30}
            disabled
            onChange={(e) => { setResult(e.target.value) }}
            ref={textareaRef}
          >
          </textarea>
        </section>
      </main>

      <footer className='fixed left-0 bottom-12 w-full text-center'>
        <h5>
          Made with <span className='text-red-500'>♥</span> by <a href="https://github.com/ivnisc" target='_blank' rel='noreferrer' className='text-blue-500'>ivnisc</a> & <a href='https://github.com/tomas-oa' target='_blank' rel='noreferrer' className='text-blue-500'>tomas-oa</a>
        </h5>
        <small>© Copyright 2023 by <a className='text-white' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank' rel='noreferrer'>Jipi Corp S.A.</a></small>
      </footer>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  )
}
