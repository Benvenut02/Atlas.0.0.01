import React from 'react'
import Sidebar, { SidebarWidth } from './Sidebar'
import { IoIosSearch } from 'react-icons/io';
import ToggleButton from './ToggleButton';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import PixelFace from './PixelFace';

export const TopbarHeight = 80;
const Topbar = (props) => {

  const [inp, setInp] = React.useState("");
  const [search, setSearch] = React.useState("");

  const handleSearchClicked = () => {
    setSearch(inp);
    setInp("");
  }

  /* Handle Search Funtion
     function handleSearch(){
        console.log({search});}
  */
  
  const handleInpChange = (e) => {
    setInp(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearchClicked();
  }

  return (
    <>
    <div className='
    topbar
        '
        style={{
            marginLeft: SidebarWidth,
            height: TopbarHeight
        }}
        > 
  
        <form action="" onSubmit={handleSubmit} className='flex items-center ml-4'>
                <label htmlFor="search" className='p-2 hover:bg-gray-700 border-2 hover:border-lime-400 rounded-full m-1' onClick={handleSearchClicked}><TopbarIcon icon={<IoIosSearch />}/></label>
                <input type="text" id='search' className='w-auto bg-gray-900 rounded-full p-3 m-1' 
                placeholder='Search' onChange={handleInpChange} value={inp} 
                />
        </form>
        
               <div className='flex
                ml-4
                items-center
               '>
                {search ? <h1 className='text-4xl underline underline-offset-8 mb-3'>Title 1: {search}</h1> : null}
                </div> 
               
               
          <div className='bg-gray-900 rounded-full px-6 p-2 flex gap-10  mr-6
                ml-auto'>

                  <ToggleButton 
                  hide={<TopbarIcon icon={<MdDarkMode />} />} 
                  show={<TopbarIcon icon={<MdLightMode />} />} />
           
           <div className='w-5 '>
             <PixelFace size={60} />
           </div>
            <div>
              
              <h1 className='text-3xl font-bold'>{props.userName}</h1>
              <h2 className='text-sm'>{props.userEmail}</h2>
            </div>
                <button onClick={props.handleLogout} className='text-3xl text-lime-400 hover:text-lime-500 hover:font-semibold hover:text-4xl hover:bg-gray-700 hover:cursor-pointer transition-all duration-200 ease-in-out rounded-full'
                
                ><BiLogOut /></button>
            </div>    
    </div>
    </>
    
  )
}

const TopbarIcon = ({icon}) => {
    return (
            <div className=' 
                text-2xl
                hover:text-lime-500
                hover:font-semibold
                hover:text-xl
                hover:bg-gray-700
                hover:cursor-pointer
                transition-all
                duration-200
                ease-out
                rounded-full
                '>
                  <div>
                    {icon}
                  </div>
            </div>
    )}


export default Topbar