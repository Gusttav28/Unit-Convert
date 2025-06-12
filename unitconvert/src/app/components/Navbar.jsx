import Link from "next/link"

export default function Navbar() {
    return(
        <nav className="flex flex-wrap justify-center gap-0.5 lg:gap-2 mt-8 lg:ml-300 overflow-y-hidden">
            <Link href="/" className="block px-4 py-2 items-center hover:bg-gray-900 hover:rounded-full hover:scale-105 transition-transform font-bold">About</Link>
            <Link href="/Length" className="block px-4 py-2 items-center hover:bg-gray-900 hover:rounded-full hover:scale-105 transition-transform font-bold">Length</Link>
            <Link href="/Weight" className="block px-4 py-2 items-center hover:bg-gray-900 hover:rounded-full hover:scale-105 transition-transform font-bold">Weight</Link>
            <Link href="/Tempeture" className="block px-4 py-2 items-center hover:bg-gray-900 hover:rounded-full hover:scale-105 transition-transform font-bold">Tempeture</Link>
            {/* <Link href="/Test" className="block px-4 py-2 items-center hover:bg-gray-900 hover:rounded-full hover:scale-105 transition-transform font-bold">Test</Link> */}
        </nav>
    )
} 