import dash from '../assets/images/dash.png'
import port from '../assets/images/port.png'
import country from '../assets/images/country.png'
import scroll from '../assets/images/scroll.png'
import bondi from '../assets/images/bondi.png'
import gamming from '../assets/images/gamming.png'
const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen bg-[#0a192f] text-gray-300 my-[140px]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-700'>Work</p>
                <p className='py-4'>//check out some of my recent work</p> 
            </div>

    {/* Container  */}
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
    {/* grid item  */}
                <div style={{backgroundImage:`url(${dash})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Dashboard
                        </span>
                        <div className='pt-8 text-center'>
                            <a href=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                 {/* grid item  */}
                 <div style={{backgroundImage:`url(${port})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Portfolio
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://hassan-g.github.io/portfolio/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/hassan-g/portfolio'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
   

              {/* grid item  */}
                 <div style={{backgroundImage:`url(${gamming})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Gamming App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://hassan-g.github.io/gaming/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/hassan-g/gaming'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
   
             {/* grid item  */}
                 <div style={{backgroundImage:`url(${scroll})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Scroll App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://hassan-g.github.io/Scrolling/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/hassan-g/Scrolling'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
   
                 {/* grid item  */}
                 <div style={{backgroundImage:`url(${bondi})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            bondi temp
                        </span>
                        <div className='pt-8 text-center'>
                            <a href=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            
             {/* grid item  */}
             <div style={{backgroundImage:`url(${country})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Country Info
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://hassan-g.github.io/country-info/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/hassan-g/country-info/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
   
    


            </div>
        </div>
    </div>

    )
}

export default Work