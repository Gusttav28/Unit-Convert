export default function test() {
    return(
        <div className=" overflow-y-hidden flex flex-col justify-center gap-1 lg:flex lg:flex-col lg:gap-4">
            <div className="flex flex-col gap-1 row-start-2 lg:mb-40 lg:flex-col lg:gap-0.5">
                <h1 className="text-xl font-bold text-neutral-400 ml-5 mt-5 mb-4 hover:scale-105 transition-transform lg:ml-183 lg:mt-30 lg:mr-190 lg:mb-1 lg:text-4xl">{titlePageName}</h1>
                <form className="">
                    <label htmlFor="Length" className="ml-10 mt-50 bg-slate-500 lg:block lg:mr-50 lg:mt-10 lg:ml-165 text-sm/6 font-medium text-neutral-400">
                        {firstLabel}
                    </label>
                    <select
                        className="bg-white mt-1 ml-7 flex flex-col lg:mt-3 lg:ml-170 text-neutral-500 text-sm py-2 lg:scale-110 px-4 focus:outline-white rounded-2xl"
                        onChange={handleChangeUnitF}
                        value={unitConvert_from}
                        >
                        <option >Options</option>
                        {options.map((opt, index) => (
                            <option key={index} value={opt}>{opt}</option>
                        ))}
                    </select>
                    
            <div className="-mt-15 lg:mt-0 lg:mb-40 lg:flex lg:flex-col lg:gap-0.2 row-start-2 items-center sm:items-start">
                        <label htmlFor="Length" className="ml-56 bg-amber-600 mt-40 lg:block lg:mr-50 lg:-mt-17 lg:ml-210 text-sm/6 font-medium text-neutral-400">
                            {secondLabel}
                        </label>
                        <select
                            className="ml-55 bg-white lg:mt-3 lg:ml-210 text-neutral-500 lg:scale-110 text-sm py-2 px-4 focus:outline-white rounded-2xl"
                            onChange={handleChangeUnitTo}
                            value={unitConvert_to}
                            >
                            <option >Options</option>
                            {options.map((opt, index) => (
                                <option key={index} value={opt}>{opt}</option>
                            ))}
                        </select>
            </div>
            <div className="mt-20 lg:mb-20 lg:flex lg:flex-col gap-0.2 lg:-ml-4 row-start-2 items-center sm:items-start"> 
                        <label htmlFor="Length" className="ml-4 lg:block lg:mr-50 lg:-mt-30 lg:ml-165 text-sm/6 font-medium text-neutral-400">
                            {thirdLabel}
                        </label>
                        <input type="number" 
                            name="length"
                            typeof="number"
                            value={unitNumber !== 0 ? unitNumber : ""} 
                            className="bg-white text-neutral-500 text-base rounded-2xl pl-2 -px-60 p-1 scale-100 lg:scale-110 lg:mt-3 lg:ml-160 focus:outline-white"
                            onChange={handleUnitNumber}
                        />
            </div>
            <div className="ml-3 mr-10 mt-10 lg:ml-7 gap-2 lg:gap-0.5 lg:mt-12 flex lg:flex lg:flex-col bg-slate-500">
                        <label htmlFor="Length" className="ml-4 lg:block lg:mr-50 lg:-mt-50 lg:ml-202 text-sm/6 font-medium text-neutral-400">
                            {fourLabel}
                        </label>
                        <input type="number" 
                            name="length"
                            typeof="number"
                            value={result}
                            disabled
                            className="bg-white text-neutral-500 text-sm rounded-2xl pl-2 -px-60 p-1 scale-79 lg:scale-115 lg:ml-205 lg:mr-150 lg:mt-3 focus:outline-white"
                        />
            </div>
            <div className="ml-5 mr-90 mt-20 lg:ml-165 gap-2 lg:gap-0.5 lg:mt-10 flex lg:flex lg:flex-col bg-slate-500">
                <button className="-mt-30 mr-120 bg-slate-200 text-black p-3 hover:bg-slate-300 rounded-2xl font-bold hover:scale-105 transition-transform" onClick={buttonSave}>Convertt</button>
            
            </div>                    
            <div className="ml-35 mr-180 mt-10 lg:ml-190 gap-2 lg:gap-0.5 lg:mt-12 flex lg:flex lg:flex-col">
                <button className="-mt-42 ml-20 -mr-8 bg-slate-200 text-black p-3 hover:bg-slate-300 rounded-2xl font-bold hover:scale-105 transition-transform" onClick={buttonReset}>Reset</button>
            </div>                    
                </form>
            </div>
        </div>
        
    )
}