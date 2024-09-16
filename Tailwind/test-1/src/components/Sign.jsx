import React from 'react'

const Sign = () => {
  return (
    <>
    <>
      <div className='h-screen w-screen bg-slate-300 flex flex-col justify-center items-center Manual-bg'>
        <div className='w-[400px] h-[550px] bg-slate-500 rounded-xl'>
          <h1 className='font-serif text-center font-bold text-white text-2xl mt-8 '>Sign Up With Me</h1>
          <br /><br />
          <form action="" className='flex flex-col items-center'>
           
           <div className="w-full ml-1 p-5 max-w-sm min-w-[200px]">
              <input className="w-full bg-white placeholder:text-white-400 text-white-700 text-sm border border-slate-200 rounded-md px-3 p-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Name" />
            </div>

            <div className="w-full ml-1 p-5 max-w-sm min-w-[200px]">
              <input className="w-full bg-white placeholder:text-white-400 text-white-700 text-sm border border-slate-200 rounded-md px-3 p-3 transition duration-300 ease focus:outline-none focus:border-b-black-4 border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email" />
            </div>

            <div className="w-full ml-1 p-5 max-w-sm min-w-[200px]">
              <input className="w-full bg-white placeholder:text-white-400 text-white-700 text-sm border border-slate-200 rounded-md px-3 p-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Phone" />
            </div>

            <div className="w-full ml-1 p-5 max-w-sm min-w-[200px]">
              <input className="w-full bg-white placeholder:text-white-400 text-white-700 text-sm border border-slate-200 rounded-md px-3 p-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Password" />
            </div>  
            

           <button className='bg-slate-950 w-[300px] h-10 rounded-xl text-white font-mono mt-2'>Submit</button>


          </form>

        </div>
      </div>



    </>
      
    </>
  )
}

export default Sign
