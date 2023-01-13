import { 
  GrGamepad
} from 'react-icons/gr'

// custom imports
import CustomButton from './CustomButton'

const Main = () => {
  return (
    <main className="flex-grow sm:text-l md:text-xl bg-primary text-secondary p-4 text-center font-bold">
      <section className="px-4 sm:-mb-16 sm:mt-4 center">
<div className="pt-24 pb-8 px-6 flex flex-col sm:flex-row sm:space-x-16 space-y-16 sm:space-y-0">
          <div className="bg-peakville bg-contain bg-no-repeat sm:w-full sm:h-auto hover:scale-105 hover:rotate-[-.3deg] hover:transition hover:ease-out duration-300">
          </div>
          <div className="w-full px-2">
            <p className="font-bold cursor-pointer text-center text-4xl text-secondary">
              BlackOut
            </p>
            <p className="mt-8 text-xs text-center text-[#B0B0B0]">
              There are more important things in life than winning or losing a game.
            </p>
            <div className="mt-8 flex justify-center space-x-4 mx-auto font-bold whitespace-nowrap">
              <a href="/blackout" className="text-center">
                <CustomButton className="px-4 py-2 hover:bg-secondary hover:bg-secondary hover:scale-105 hover:transition hover:ease-out duration-300">
                  <GrGamepad className="mr-2 -ml-1 w-4 h-4"/>
                  Start playing
                </CustomButton>
              </a>
            </div>
            <div className="mt-8 flex justify-center space-x-4 mx-auto font-bold whitespace-nowrap">
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
