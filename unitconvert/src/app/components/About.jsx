import Images from "./Images";

export default function About() {
    return(
        <div className="mt-30 mb-10 scale-70 lg:scale-100 lg:ml-100 lg:mr-100 text-xl font-bold flex flex-col lg:flex lg:flex-col lg:mt-40 ">
            <label className="-mt-60 lg:-mt-20 -ml-6 lg:ml-10 lg:bg-black text-3xl lg:text-4xl text-neutral-400 mr-10 lg:mr-100 hover:scale-105 transition-transform">Unit Converter Project</label>
            <section className="max-xl:h-10 ">
                <p className="mt-6 lg:mt-10 lg:ml-10">
                    Welcome to my Unit Converter project. This application was developed using React, where I implemented essential tools such as useState, Link, and Tailwind CSS. These resources are fundamental for managing state, navigation, and responsive design in modern React applications. Through this project, I focused on maintaining a clean, scalable design and a well-organized project architecture.               
                </p>
                <p className="mt-6 lg:mt-10 lg:ml-10">
                    Throughout the development of this project, I significantly improved my understanding of integrating external dependencies in React. It also enhanced my skills in managing a web application's styling using Tailwind CSS, allowing me to focus on both functionality and visual presentation. Additionally, this experience strengthened my knowledge of structuring React components and understanding how a web page operates internally.
                </p>
            </section>
                <label htmlFor="Length" className="ml-2 mt-180 lg:block lg:mt-10 lg:mr-50 lg:ml-10 text-sm/6 font-medium text-neutral-400">
                    Made it by: <label htmlFor="" className="ml-2 mt-180 lg:block lg:-mt-6 lg:mr-50 lg:ml-18 text-sm/6 font-medium text-neutral-400"> Gustavo Camacho <Images/>
                    </label>
                </label>
        </div>
    )
}