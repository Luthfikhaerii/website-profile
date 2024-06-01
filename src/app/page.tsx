import Image from "next/image";

export default function Home() {
  return (
   <>
      <header className="grid grid-cols-2 justify-items-center  h-[600px] items-center">
        <div>
        <h1 className="fadein text-5xl font-bold">Hello everyone!</h1>
        <p className="fadein text-4xl">I am Luthfi Khaeri Ihsan.</p>  
        </div>
        <div>
          <Image src={"/images/62d3fa3bd6340.jpg"} alt={"foto"} width={400} height={400} className="fadein relative z-10"/>
          <div className="bg-gray-400 rounded-full w-[550px] h-[550px]  blur-3xl absolute top-14 z-0 right-0"></div>
        </div>
      </header>   
      <section>
        <div className="grid grid-cols-2 items-center justify-items-center">
          <Image src={"/images/62d3fa3bd6340.jpg"} alt={"foto"} width={400} height={400} className="fadein relative z-20"/>
          <div>
            <h2 className="text-4xl font-bold mb-8">Who am i?</h2>
            <p className="w-10/12 ">I am is a Software engineer, i study in Universitas Komputer Indonesia and i work for PT Saptaloka Digital Indonesia. I familiar with programming for 4 year and on industries for 1 year</p>
          </div>
        </div>
      </section>
   </>
  );
}
