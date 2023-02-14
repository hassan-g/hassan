import Html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/javascript.png'
import bs from '../assets/images/bootstrap.png'
import github from '../assets/images/github.png'
import re from '../assets/images/react.png'
import tailwind from '../assets/images/tailwind.png'
import vscode from '../assets/images/vscode.png'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300 my-10'>
        {/* conatianer */}
        <div  className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-700'>Skills</p>
                <p className='py-4'>//These are the technologies I've work with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-6 gap-4'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt="html"/>
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt="html"/>
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={js} alt="html"/>
                    <p className='my-4'>JS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={bs} alt="html"/>
                    <p className='my-4'>Bootsrap</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={re} alt="html"/>
                    <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt="html"/>
                    <p className='my-4'>Tailwind</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={vscode} alt="html"/>
                    <p className='my-4'>VScode</p>
                </div>

                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="html"/>
                    <p className='my-4'>Github</p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Skills