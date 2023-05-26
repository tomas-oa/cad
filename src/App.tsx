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
    <div className='w-screen h-screen bg-gradient-to-t from-gray-700 via-gray-900 to-black flex flex-col'>

      <header className='fixed top-6 lg:top-24 w-full flex text-center items-center justify-start lg:justify-center pl-4'>
        <img className='w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]' src="/images/schnoz.svg" alt="cad logo oficial"/>
        <h1 className='font-bold text-3xl lg:font-extrabold lg:text-7xl text-white mx-2'>CAD</h1>
      </header>

      <main className='flex flex-col pt-20 lg:pt-64 h-full'>
        <section className='flex justify-around items-center w-11/12 mx-auto'>
          <h2 className='text-white font-light text-left w-fit'>
            {
              from === PLAIN
                ? 'Plain text message'
                : 'Encrypted message'
            }
          </h2>

          <button className='px-4' onClick={() => { setInterchange() } }>
            <ArrowIcon />
          </button>

          <h2 className='text-white font-light text-left w-fit'>
              {
                to === PLAIN
                  ? 'Decrypted result'
                  : 'Encrypted result'
              }
            </h2>
        </section>

        <section className='flex flex-col items-center pt-2'>
          <textarea
            className='resize-none border-2 border-[#1d283a] bg-[#030711] rounded-xl text-[#f8fafc] p-2 m-2 w-11/12 h-48'
            placeholder='Type your message here...'
            onChange={(e) => { setOriginal(e.target.value) }}
            value={original}
          ></textarea>
          <textarea
            className='resize-none border-2 border-[#1d283a] bg-[#070b14] rounded-xl text-[#f8fafc] p-2 m-2 w-11/12 h-48'
            value={result}
            disabled
            onChange={(e) => { setResult(e.target.value) }}
            ref={textareaRef}
          >
          </textarea>
          <button className='absolute my-[372px] ml-[290px] border-2 rounded-full bg-white' onClick={copyToClipboard}>
              <CopyIcon />
          </button>
        </section>
      </main>

      <footer className='fixed left-0 bottom-6 lg:bottom-12 w-full text-center'>
        <h5 className='text-sm lg:text-base'>
          Made with <span className='text-red-500'>♥</span> by <a href="https://github.com/ivnisc" target='_blank' rel='noreferrer' className='text-blue-500'>ivnisc</a> & <a href='https://github.com/tomas-oa' target='_blank' rel='noreferrer' className='text-blue-500'>tomas-oa</a>
        </h5>
        <small className='text-xs'>© Copyright 2023 <a className='text-white' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank' rel='noreferrer'>Jipi Corp S.A.</a></small>
      </footer>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  )
}
