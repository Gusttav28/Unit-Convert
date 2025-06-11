import Link from "next/link"

export default function Navbar() {
    return(
        <div className="ml-100 flex gap-0.1 mt-10 mr-100 lg:ml-300 xl:ml-300 md:flex md:gap-15 md:mt-10 lg:flex lg:gap-5 lg:mt-10">
            <Link href="/" className="block px-4 py-2 items-center hover:bg-gray-900 hover:rounded-full hover:scale-105 transition-transform font-bold">About</Link>
            <Link href="/Length" className="block px-4 py-2 items-center hover:bg-gray-900 hover:rounded-full hover:scale-105 transition-transform font-bold">Length</Link>
            <Link href="/Weight" className="block px-4 py-2 items-center hover:bg-gray-900 hover:rounded-full hover:scale-105 transition-transform font-bold">Weight</Link>
            <Link href="/Tempeture" className="block px-4 py-2 items-center hover:bg-gray-900 hover:rounded-full hover:scale-105 transition-transform font-bold">Tempeture</Link>
        </div>
    )
} 