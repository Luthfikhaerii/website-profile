import Image from "next/image";

export default function Home() {
  return (
   <>
      <header className="grid grid-cols-2 justify-items-center  h-[600px] items-center">
        <div>
        <h1 className="fadein text-4xl font-bold">Hello everyone!</h1>
        <p className="fadein text-3xl">I am Luthfi Khaeri Ihsan.</p>  
        </div>
        <div>
          <Image src={"/images/62d3fa3bd6340.jpg"} alt={"foto"} width={400} height={400} className="fadein relative z-20"/>
         
        </div>
        
      </header>   
      <div className="bg-gray-400 rounded-full w-[550px] h-[550px]  blur-3xl absolute top-14 z-0 right-0"></div>
   </>
  );
}
