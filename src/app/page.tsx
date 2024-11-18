

import Name from "./components/Name"

import flower from "./../../public/flower.jpg"
import Image from "next/image"

export default function Home() {
  return (
<div className="w-96 flex flex-col justify-center items-center m-auto">
  
<Image src={flower} alt="" width={300} height={300} id="home" ></Image>

<Name />
<div id="name-h">
  <br />
Building Tomorrow's <br />Technology Today!
        
     <br />
       <button className=" border rounded hover:font-semibold hover:transition-all mt-7 p-2">
        <a href="https://milestone1-personal-static-resume.vercel.app/" target="blank"> Resume</a>
        <i className='bx bxs-right-top-arrow-circle'></i></button>

</div>
</div>
  )
}