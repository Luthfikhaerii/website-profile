export default function Navbar() {
    return (
            <div className="h-[70px] w-full fixed flex items-center z-20">
                <p className="ml-20 text-3xl font-bold">LUTH</p>
                <div className="flex justify-end w-full">
                <div className="flex justify-evenly w-5/12 text-center items-center mr-20">
                    <p className=" text-xl font-semibold">Home</p>
                    <p className=" text-xl font-semibold">About</p>
                    <p className=" text-xl font-semibold">Portofolio</p>
                    <p className=" text-xl font-semibold">Contact</p>
                </div>
                </div>
            </div>
    )
}