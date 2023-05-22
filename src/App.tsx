import ArrowIcon from './components/ArrowIcon'
import { useCypher } from './hooks/useCypher'

export default function App () {
  const { from, to } = useCypher()

  const handleClick = () => {}

  return (
    <div className='w-screen h-screen bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900'>
      <header className='flex text-center items-center justify-center pt-24'>
        <h1 className='font-extrabold text-7xl text-white'>CAD</h1>
      </header>
      <main className='flex justify-around w-3/4 mx-auto mt-12'>
        <div className='flex flex-col'>
          <h2 className='text-white font-bold'>{from}</h2>
        </div>

        <button onClick={handleClick}>
          <ArrowIcon />
        </button>

        <div className='flex flex-col'>
          <h2 className='text-white font-bold'>{to}</h2>
        </div>
      </main>
    </div>
  )
}
