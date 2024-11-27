import React from 'react'
import Image from 'next/image'

const Productcard = () => {
  return (
      
      <main className='flex flex-col justify-around md:flex-row  ml-14'>
     
     <div className='w-full md:w-3/12  border-black border-4  bg-white flex flex-col justify-center items-center '>

<Image src="/whitemercedes.PNG" width={300} height={300} className='mb-20' alt="Mercedes" ></Image>



<p className='text-center font-bold text-xl mt-0'>Mercedes</p>

<p className='text-center py-2 text-black text-base mb-3 font-bold-2'>price 300,0000</p>

<div className='flex justify-center mb-10 my-2'>
    <button className='bg-red-500 font-bold text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>



{/* 2nd */}

<div className='w-full md:w-3/12 border-black border-4  bg-white flex flex-col justify-center items-center'>

<Image src="/ferrari.PNG" width={300} height={300} alt="Ferrari" ></Image>

<br />
<br />
<br />

<p className='text-center font-bold text-xl mb-2'>Ferrari</p>

<p className='text-center py-2 text-black text-base mb-3 font-bold-2'>price 350,0000</p>

<div className='flex justify-center mb-10 my-2'>
    <button className='bg-red-500 font-bold text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>



{/* 3rd */}

<div className='w-full md:w-3/12 border-black border-4  bg-white flex flex-col justify-center items-center'>

<Image src="/blacklamborghini.PNG" width={300} height={400} className='mb-7' alt="Lamborghini" ></Image>

<p className='text-center font-bold text-xl mb-2'>Lamborghini</p>

<p className='text-center py-2 text-black text-base mb-3 font-bold-2'>price 500,0000</p>

<div className='flex justify-center my-2 mb-0'>
    <button className='bg-red-500 font-bold text-white py-2 px-6 rounded-sm hover:bg-red-400'>Buy Now</button>
</div>

</div>

<br />

</main>


  )
}

export default Productcard
