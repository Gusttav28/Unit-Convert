import Image from 'next/image';

export default function Images() {
    return (
        <div className='flex'>
            <Image className="mb-2 bg-neutral-200 rounded-full mt-5 ml-2 hover:scale-100 transition-transform scale-75 lg:mt-4 lg:-ml-19 sm:ml-25 md:ml-25" src="/assets/github.svg" alt='git hub' width={35} height={35}/>
            <Image className="mb-2 mt-5 ml-3 rounded-2xl hover:scale-100 transition-transform scale-75 lg:mt-4 lg:ml-1 sm:ml-30 md:ml-25" src="/assets/linkedin.svg" alt='lenkedln' width={35} height={35}/>
        </div>
    )
}