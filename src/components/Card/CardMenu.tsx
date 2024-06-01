import Image from "next/image"

export default function Navbar({src}:any) {
    return (
            <div className="h-[70px] w-full fixed flex items-center">
                <Image src={"/images/62d3fa3bd6340.jpg"} alt={src} width={100} height={100}/>
            </div>
    )
}