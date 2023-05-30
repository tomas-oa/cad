import { useRef } from 'react'
import ArrowIcon from './icons/ArrowIcon'
import CopyIcon from './icons/CopyIcon'
import { PLAIN } from '../constants'
import useCypher from '../hooks/useCypher'

import toast, { Toaster } from 'react-hot-toast'

export default function Cypher () {
  const { from, to, result, original, setInterchange, setOriginal, setResult } = useCypher()
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const copyToClipboard = () => {
    const text = textareaRef.current

    if (text != null) {
      navigator.clipboard.writeText(text.value)
        .then(() => {
          toast.success('Copied to clipboard')
        })
        .catch((e) => {
          toast.error('Oops! Something went wrong')
          console.error(e)
        })
    }
  }
  return (
    <main className='flex flex-col pt-10 h-full lg:pt-28'>
        <section className='flex justify-around items-center w-11/12 mx-auto'>
          <h2 className='text-white font-light lg:font-normal text-left w-[150px] lg:mx-auto lg:w-2/5'>
            {
              from === PLAIN
                ? 'Plain text'
                : 'Encrypted text'
            }
          </h2>

          <button className='mx-auto lg:mx-0' onClick={() => { setInterchange() } }>
            <ArrowIcon />
          </button>

          <h2 className='text-white font-light lg:font-normal text-right lg:text-left w-[150px] lg:mr-auto lg:w-2/5 lg:ml-10'>
              {
                to === PLAIN
                  ? 'Decrypted result'
                  : 'Encrypted result'
              }
            </h2>
        </section>

        <section className='flex flex-col items-center pt-2 lg:flex-row lg:w-11/12 lg:mx-auto lg:justify-around'>
          <textarea
            className='outline-none resize-none border-[1.5px] border-[#1b8f97] bg-[#030711] rounded-xl text-[#f8fafc] p-2 m-2 w-11/12 h-48 hover:border-[#00eeff] hover:transition hover:duration-200   focus:border-[#00eeff] lg:w-2/5 lg:h-80 lg:mx-auto'
            placeholder='Type your message here...'
            onChange={(e) => { setOriginal(e.target.value) }}
            value={original}
          ></textarea>

          <div className='relative w-11/12 lg:w-2/5 lg:mx-auto'>
            <textarea
              className='outline-none resize-none border border-[#1b8f97] bg-[#030711] rounded-xl text-[#f8fafc] p-2 m-2 mx-auto w-full h-48 lg:w-full lg:h-80'
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

        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </main>
  )
}
