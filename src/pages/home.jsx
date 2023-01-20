import logo from '../data/logo.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="bg-[#2779A7]">
      <div className="grid h-screen relative">
        <img
          src={logo}
          alt=""
          width={400}
          height={400}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]"
        />
        <div className="relative bg-gray-600 row-start-1 col-start-1 row-end-2 col-end-3 overflow-hidden">
          <Link to="/characters">
            <div className='absolute w-full h-full bg-imgCharacters bg-cover grayscale brightness-50 cursor-pointer hover:grayscale-0 hover:scale-[1.25] transition-[.6s] duration-[.6s]'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[1] text-[24px] font-bold hover:text-orange-500'>
              Characters
            </div>
          </Link>
        </div>
        <div className="relative bg-gray-600 row-start-2 col-start-1 row-end-3 col-end-2 overflow-hidden">
          <Link to="/episodes">
            <div className="absolute w-full h-full bg-imgEpisodes bg-cover grayscale brightness-50 cursor-pointer hover:grayscale-0 hover:scale-[1.25] transition-[.6s] duration-[.6s]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[1] text-[24px] font-bold hover:text-orange-500">
              Episodes
            </div>
          </Link>
        </div>
        <div className="relative bg-gray-600 row-start-2 col-start-2 row-end-3 col-end-3 overflow-hidden ">
          <Link to="/locations">
            <div className="absolute w-full h-full bg-imgPlanets bg-cover grayscale brightness-50 cursor-pointer hover:grayscale-0 hover:scale-[1.25] transition-[.6s] duration-[.6s] "></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[1] text-[24px] font-bold hover:text-orange-500">
              Locations
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}