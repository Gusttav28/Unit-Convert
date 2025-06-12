import Image from 'next/image';

export default function Images() {
    return (
        <div className='flex'>
            <a href="https://github.com/Gusttav28">
                <Image className="mb-2 bg-neutral-200 rounded-full mt-5 ml-2 hover:scale-100 transition-transform scale-75  lg:-ml-16 lg:mr-30 sm:ml-25 md:ml-25" src="/assets/github.svg" alt='git hub' width={35} height={35}/>
            </a>
            <a href="https://www.linkedin.com/in/gustavo-camacho-b9a64b243/" className='lg:mt-1 lg:-ml-24'>
                <Image className="mb-2 mt-5 ml-3 rounded-2xl hover:scale-100 transition-transform scale-75 lg:scale-105 lg:-ml-2" src="/assets/linkedin.svg" alt='lenkedln' width={35} height={35}/>
            </a>
        </div>
    )
}