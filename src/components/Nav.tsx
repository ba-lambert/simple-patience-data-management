import React from 'react'

function Nav() {
  return (
    <div className='flex flex-row justify-between px-20 bg-blue-600 h-16 items-center top-0 w-full'>
        <h1 className='text-white font-poppins text-2xl'>Logo</h1>
        <div className='flex flex-row items-center cursor-pointer space-x-2'>
            <img src="https://www.topgear.com/sites/default/files/2023/07/11.TheallnewSANTAFE_11.jpg" alt="" className='h-10 w-10 object-cover rounded-full'/>
            <span className='text-white'>
                user
            </span>
        </div>
    </div>
  )
}

export default Nav