
import Image from 'next/image';

import hijab from "./../../../public/hijab.jpg"

export default function About() {
  return (
<div className=' flex flex-col-reverse m-auto justify-center md:flex-row sm:flex-row lg:flex-row '>
    
  <div className="border-gray-600 border-2 mt-5 hyphens-none m-auto
   w-[82] h-600 p-5 rounded-xl text-gray-200 md:w-[400px] md:h-[450px]">
      
         <h1 className="font-semibold text-2xl text-center content-center  mb-4"> 🌟Mussarat Shasmsher🌟</h1> 

<p className='justify-center '>
As a passionate Master's in Economics graduate, I thrive  
at the intersection of data and innovation. Currently, I'm 
diving deep into the world of technology as I pursue 
Certified Cloud Applied Generative AI Engineer and Developer
course, where I am honing my skills to transform complex 
economic models into scalable, cloud-based solutions.With a 
strong analytical mindset and a flair for creative problem-solving, I
  leverage my economic expertise to drive impactful AI-driven strategies. My journey is 
  fueled by commitment to continuous learning and  desire to harness the power of
   generative AI to tackle real-world challenges.       </p>
 </div > 
<div >
     <Image  className='w-52 h-52 border shadow-slate-200 inset-5 mt-5 m-auto rounded-full md:mt-20 lg:w-64' src={hijab} 
     alt="" width={250} height={250}/>
</div>
</div>
  )
  
}
