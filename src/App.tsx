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
    <div className='w-screen h-screen bg-[#030711] flex flex-col'>

      <header className='mt-6 w-full flex text-center items-center justify-start lg:justify-center pl-4'>
        <img className='w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]' src="/images/schnoz.svg" alt="cad logo oficial"/>
        <h1 className='font-bold text-3xl lg:font-extrabold lg:text-7xl text-white mx-2'>CAD</h1>
      </header>

      <main className='flex flex-col pt-10 h-full lg:pt-32'>
        <section className='flex justify-around items-center w-11/12 mx-auto'>
          <h2 className='text-white font-light text-left w-[150px] lg:w-2/5'>
            {
              from === PLAIN
                ? 'Plain text'
                : 'Encrypted text'
            }
          </h2>

          <button className='px-4' onClick={() => { setInterchange() } }>
            <ArrowIcon />
          </button>

          <h2 className='text-white font-light text-left w-[150px] lg:w-2/5'>
              {
                to === PLAIN
                  ? 'Decrypted result'
                  : 'Encrypted result'
              }
            </h2>
        </section>

        <section className='flex flex-col items-center pt-2 lg:flex-row lg:w-11/12 lg:mx-auto lg:justify-around'>
          <textarea
            className='outline-none resize-none border-[1.5px] border-[#1b8f97] bg-[#030711] rounded-xl text-[#f8fafc] p-2 m-2 w-11/12 h-48 focus:border-[#00eeff] lg:w-2/5 lg:h-64'
            placeholder='Type your message here...'
            onChange={(e) => { setOriginal(e.target.value) }}
            value={original}
          ></textarea>

          <div className='relative w-11/12 lg:w-2/5'>
            <textarea
              className='outline-none resize-none border border-[#1b8f97] bg-[#030711] rounded-xl text-[#f8fafc] p-2 m-2 mx-auto w-full h-48 lg:w-full lg:h-64'
              value={result}
              readOnly
              onChange={(e) => { setResult(e.target.value) }}
              ref={textareaRef}
            >
            </textarea>
            <button className='absolute border-2 rounded-full bg-white bottom-5 right-2' onClick={copyToClipboard}>
                <CopyIcon />
            </button>
          </div>
        </section>
      </main>

      <footer className='mb-6 w-full text-center text-white lg:mb-6 text-xs'>
        <h5 className='lg:text-base'>
          Made with <span className='text-red-500'>♥</span> by <a href="https://github.com/ivnisc" target='_blank' rel='noreferrer' className='text-blue-500'>ivnisc</a> & <a href='https://github.com/tomas-oa' target='_blank' rel='noreferrer' className='text-blue-500'>tomas-oa</a>
        </h5>
        <small className='text-xs'>© Copyright 2023 <a className='text-blue-500' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank' rel='noreferrer'>Jipi Corp S.A.</a></small>
        <br className='mb-1'/>
        <small>App still in development, please be patient! :)</small>
      </footer>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  )
}
