import schnoz from '../../public/images/schnoz.svg'

export default function Header () {
  return (
    <header className='mt-6 w-full flex text-center items-center justify-start lg:justify-center pl-4 lg:mt-12'>
      <img className='w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]' src={schnoz} alt="cad logo oficial"/>
      <h1 className='font-bold text-3xl lg:font-extrabold lg:text-7xl text-white mx-2'>CAD</h1>
    </header>
  )
}
