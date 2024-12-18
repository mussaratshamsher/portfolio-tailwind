import Image from 'next/image';
import React from 'react';

import typescript from "./../../../public/typescript.png";
import html from "../../../public/html.png";
import nextjs from "./../../../public/nextjs.png";



export function Typescript() {
  return (
    <main className="w-[350px] h-[400px] rounded border-2 border-slate-100 shadow shadow-purple-600 p-14 mt-5 m-auto ">
        <div className= "name" > <div  className='flex flex-col justify-center items-center'>
         TypeScript Projects
         <Image src={typescript} alt="" width={ 100} height={100}  className='mt-5'/>
         <button className='w-200px h-50px mt-10 border rounded bg-purple-800 text-white hover:text-purple-950 hover:bg-white' id='icon'>
          <a href="./../projects/script">View</a>
   </button>
        </div>
        <div>
            </div>
        </div>
    </main>
  )
}

export function Html() {
  return (
    <main className="w-[350px] h-[400px] rounded border-2 border-slate-100 shadow shadow-purple-600 p-14 m-auto mt-5">
        <div className= "name" > <div className='flex flex-col justify-center items-center ' >
         HTML Projects
         <Image src={html} alt="" width={ 100} height={100}  className='mt-5'/>
         <button className='w-200px h-50px mt-10 border rounded bg-purple-800 text-white hover:text-purple-950 hover:bg-white' id='icon'>
          <a href="./../projects/hypertext">View</a>
          </button>
        </div>
        <div>
            </div>
        </div>
    </main>
  )
}

export function Nextjs() {
  return (
    
    <main className="w-[350px] h-[400px] rounded border-2 border-slate-100 shadow shadow-purple-600 p-14 m-auto mt-5">
    <div className= "name" > 
      <div className='flex flex-col justify-center items-center ' >
     Nextjs Projects
     <Image src={nextjs} alt="" width={ 100} height={100}  className='mt-5'/>
     <button className='w-200px h-50px mt-10 border rounded bg-purple-800 text-white hover:text-purple-950 hover:bg-white' id='icon'>
      <a href="./../projects/nextjs">View</a>
      </button>
    </div>
    <div>
        </div>
    </div>
</main>
  )
}

