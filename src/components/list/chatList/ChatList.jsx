import React, { useState } from 'react'

const ChatList = () => {

    const [addMode, setAddMode] = useState(false);
  return (
    <div className='flex-1 overflow-scroll'>
        <div className='flex items-center gap-5 p-5'>
            <div className='flex-1 bg-[rgba(17,25,40,0.5)] flex items-center gap-5 rounded-lg p-2'>
                <img className='w-5 h-5' src='./search.png'></img>
                <input className="bg-transparent border-none outline-none text-white flex-1"type='text' placeholder='Search'></input>
            </div>
            <img className='w-9 h-9 bg-[rgba(17,25,40,0.5)] p-2 rounded-lg cursor-pointer'  src={addMode ? "./minus.png" : "./plus.png"} onClick={() => setAddMode((prev) => !prev)}></img>
        </div>
        <div className='flex items-center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]'>
            <img  className="w-12 h-12 rounded-full object-cover" src='./avatar.png'></img>
            <div className='flex flex-col gap-2.5'>
                <span className='font-[500px]'>John Doe</span>
                <p className='text-sm font-light'>Hello</p>
            </div>
        </div>
        <div className='flex items-center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]'>
            <img className="w-12 h-12 rounded-full object-cover" src='./avatar.png'></img>
            <div className='flex flex-col gap-2.5'>
                <span className='font-[500px]'>John Doe</span>
                <p className='text-sm font-light'>Hello</p>
            </div>
        </div>
        <div className='flex items-center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]'>
            <img className="w-12 h-12 rounded-full object-cover" src='./avatar.png'></img>
            <div className='flex flex-col gap-2.5'>
                <span className='font-[500px]'>John Doe</span>
                <p className='text-sm font-light'>Hello</p>
            </div>
        </div>
    </div>
  )
}

export default ChatList