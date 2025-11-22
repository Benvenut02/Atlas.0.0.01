import React from 'react'
import { SidebarWidth } from './Sidebar'
import { BiHistory } from 'react-icons/bi'
import PixelFace from './PixelFace'

const MainHistory = () => {

    
  return (
    <>
        <div style={{marginLeft: SidebarWidth}}>
        
            <div className=' bg-amber-500 h-screen p-5 '>
              <div className=' flex items-center'>
                     <PixelFace size={200} />
                     <h1 className=' pixelsDiv
                        text-black     
                     text-9xl font-bold
                     leading-[80px] mt-1 ml-5
                     ' >
                            
                            We Are the People of Truth ______________
                            </h1>
                            
             
              </div>
              <div>
                    <h1 className='text-4xl font-bold flex gap-2'>Recently Searched <BiHistory/> </h1>
                </div>
                <div className='mt-5 bg-gray-900 rounded-lg p-6 pb-2 border border-gray-700'>
                    <h1 className='bg-yellow-400 text-black text-center text-2xl w-40 rounded font-semibold '>12-12-2025</h1>
                    <ol 
                    className='ml-15 m-2 text-gray-300 mb-4 leading-relaxed'
                    style={{listStyleType: 'disc'}}>
                        <li>Are we all really niggas</li>
                        <li>Does burning candles affect your health?</li>
                        <li>How many chocolates can we eat in a day</li>
                    </ol>
                </div>

                <div className='mt-5 bg-gray-900 rounded-lg p-6 pb-2 border border-gray-700'>
                    <h1 className='bg-yellow-400 text-black text-center text-2xl w-40 rounded font-semibold '>
                        11-12-2025</h1>
                    <ol 
                    className='ml-15 m-2 text-gray-300 mb-4 leading-relaxed'
                    style={{listStyleType: 'disc'}}>
                        <li>Fuck you Ansh</li>
                        <li>Fuck you Gladwin</li>
                        <li>Fuck you Aryan</li>
                    </ol>
                </div>
                <div className='mt-5 bg-gray-900 rounded-lg p-6 pb-2 border border-gray-700'>
                    <h1 className='bg-yellow-400 text-black text-center text-2xl w-40 rounded font-semibold '>
                        10-12-2025</h1>
                    <ol 
                    className='ml-15 m-2 text-gray-300 mb-4 leading-relaxed'
                    style={{listStyleType: 'disc'}}>
                        <li>Are we all really niggas</li>
                        <li>Does burning candles affect your health?</li>
                        <li>How many chocolates can we eat in a day</li>
                    </ol>
                </div>
                
                </div>
                
               
            </div>
    </>
    
  )
}

// Reusable Service Card Component
const ServiceCard = ({ title, description, mode }) => {
  return (
    <div className=" bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold inline-block">
        {mode}
      </div>
    </div>
  );
};

export default MainHistory