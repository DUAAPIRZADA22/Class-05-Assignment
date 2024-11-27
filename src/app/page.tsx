

import React from 'react'
function Home() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
      <div className="grid grid-cols-10 grid-rows-10 gap-4 p-8 min-h-[80vh] mx-auto bg-[#f5e2b4]">
      
        <div className="bg-[#80d8f5] text-xl font-bold text-black flex items-center justify-center col-span-2 row-span-10">
          AG1 <br /> 2 of 10
        </div>
        
        <div className="bg-[#ddc07b] text-xl font-bold text-black flex items-center justify-center col-span-6 row-span-2">
          AG2 <br /> 6 of 10
        </div>
  
        <div className="bg-[#80d8f5] text-xl font-bold text-black flex items-center justify-center col-span-2 row-span-10">
          AG3 <br /> 2 of 10 (omega)
        </div>
        
        <div className="bg-[#f5998a] text-xl font-bold text-black flex items-center justify-center col-span-3 row-span-2">
          AG4 <br /> 3 of 6
        </div>
      
        <div className="bg-[#f5998a] text-xl font-bold text-black flex items-center justify-center col-span-3 row-span-2">
          AG5 <br /> 3 of 6 (omega)
        </div>
        
        <div className="bg-[#e08c66] text-xl font-bold text-black flex items-center justify-center col-span-2 row-span-6">
          AG6 <br /> 2 of 6
        </div>
        
        <div className="bg-[#dfac36] text-xl font-bold text-black flex items-center justify-center col-span-4 row-span-2">
          AG7 <br /> 4 of 6 (omega)
        </div>
        
        <div className="bg-[#f3a0b5] text-xl font-bold text-black flex items-center justify-center col-span-2 row-span-3">
          AG8 <br /> 2 of 4
        </div> 
        
        <div className="bg-[#f3a0b5] text-xl font-bold text-black flex items-center justify-center col-span-2 row-span-3">
          AG9 <br /> 2 of 4 (omega)
        </div>
        
        <div className="bg-[#c87dcf] text-xl font-bold text-black flex items-center justify-center col-span-4 row-span-1">
          AG10 <br /> auto
        </div>
      </div>
    </div>
  );
}

export default Home;