import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
const Home =  ()=>{
    return(
        <div name="home" className="w-full h-screen bg-[#0a192f]">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className='text-pink-600 '>Hi, my name is</p>
                <h1 className='text-4xl sm:7xl font-bold text-[#ccd6f6]'>Hassan</h1>
                <p className='text-4xl sm:7xl font-bold text-[#8892b0]'>I'm Freelancer</p>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a FrontEnd Developer specializing in Building Awsome responsive Website</p>
                <div>
                    <button className='text-white group py-3 px-6 my-2 flex items-center border-2 hover:bg-pink-700'>
                    <Link to='work' duration={400} smooth={true}>View Work</Link>

                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/>
                        </span>
                     </button>
                </div>
            </div>
        </div>
    )
}

export default Home