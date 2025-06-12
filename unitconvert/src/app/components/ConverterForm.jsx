"use client"

import Navbar from "../components/Navbar";
import { useState } from "react";


export default function ConverterForm({
    titlePageName,
    firstLabel,
    secondLabel,
    thirdLabel,
    fourLabel,
    options
}) 

{
    const [unitNumber, setunitNumber] = useState(0)
    const [result, setResult] = useState(0)
    const [unitConvert_from, setNewUnitConvert_from] = useState("")
    const [unitConvert_to, setNewUnitConvert_to] = useState("")


    var valueSelectedUnitF = ""
    var valueSelectedUnitT = "" 

    // console.log(optionsList)

    const handleChangeUnitF =  (e) =>{
        valueSelectedUnitF = e.target.value
        setNewUnitConvert_from(valueSelectedUnitF)

       if(valueSelectedUnitF === "Metre"){
            console.log("is putting metre")
       
       }
       if (valueSelectedUnitF === "Centimetre") {
            console.log("is putting centimetre")

        }
    }

    const handleChangeUnitTo = (e) => {
        valueSelectedUnitT = e.target.value
        setNewUnitConvert_to(valueSelectedUnitT)
        
        if(valueSelectedUnitT === "Metre"){
            console.log("is putting Metre")
        }
        if (valueSelectedUnitT === "Centimetre") {
            console.log("is putting Centimetre")
        }
    }

    const handleUnitNumber = (e) =>{
        const value = parseFloat(e.target.value)
        setunitNumber(value)
       
    }

// --------------------------------------------------------------------------------------------------------------------


    const buttonSave = (e) =>{
        e.preventDefault()
        console.log("save")





        // -----LENGTH--------------------------------------------- 
        
        


        // Metre and Centimetre
        if(unitConvert_from === "Metre" && unitConvert_to === "Centimetre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber * 100
            setResult(resultt)
            console.log("this is the result " + resultt)
        } 
        if(unitConvert_from === "Centimetre" && unitConvert_to === "Metre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber * 100
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        
        // Metre and Milimetre
        if(unitConvert_from === "Metre" && unitConvert_to === "Millimetre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber / 1000
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        if(unitConvert_from === "Millimetre" && unitConvert_to === "Metre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber / 1000
            setResult(resultt)
            console.log("this is the result " + resultt)
        }

        // Metre and mile
        if(unitConvert_from === "Metre" && unitConvert_to === "Mile"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber / 1609
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        if(unitConvert_from === "Mile" && unitConvert_to === "Metre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber * 1609
            setResult(resultt)
            console.log("this is the result " + resultt)
        }

        // Kilometre and metre
        if(unitConvert_from === "Kilometre" && unitConvert_to === "Metre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber / 1000
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        if(unitConvert_from === "Metre" && unitConvert_to === "Kilometre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber / 1000
            setResult(resultt)
            console.log("this is the result " + resultt)
        }

        // Kilometre and centimetre
        if(unitConvert_from === "Kilometre" && unitConvert_to === "Centimetre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber * 100000
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        if(unitConvert_from === "Centimetre" && unitConvert_to === "Kilometre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber * 100000
            setResult(resultt)
            console.log("this is the result " + resultt)
        }

        // Kilometre and millimetre
        if(unitConvert_from === "Kilometre" && unitConvert_to === "Millimetre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber * 100000 * (1000 * 1000)
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        if(unitConvert_from === "Millimetre" && unitConvert_to === "Kilometre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber * 100000 / (1000 * 1000)
            setResult(resultt)
            console.log("this is the result " + resultt)
        }

        // Kilometre and Mile
        if(unitConvert_from === "Kilometre" && unitConvert_to === "Mile"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber / 1.609
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        if(unitConvert_from === "Mile" && unitConvert_to === "Kilometre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber * 1.609
            setResult(resultt)
            console.log("this is the result " + resultt)
        }

        // Centimetre and Millimetre
        if(unitConvert_from === "Centimetre" && unitConvert_to === "Millimetre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber * 10
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        if(unitConvert_from === "Millimetre" && unitConvert_to === "Centimetre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber * 10
            setResult(resultt)
            console.log("this is the result " + resultt)
        }

        // Centimetre and Mile
        if(unitConvert_from === "Centimetre" && unitConvert_to === "Mile"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber / 1.609
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        if(unitConvert_from === "Mile" && unitConvert_to === "Centimetre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber * 160900 * 100000
            setResult(resultt)
            console.log("this is the result " + resultt)
        }

        // Millimetre and Mile
        if(unitConvert_from === "Millimetre" && unitConvert_to === "Mile"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber / 1.609
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        if(unitConvert_from === "Mile" && unitConvert_to === "Millimetre"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber * 1.609
            setResult(resultt)
            console.log("this is the result " + resultt)
        }









        // -----WEIGHT---------------------------------------------       







        // Kilogram and Gram
        if(unitConvert_from === "Kilogram" && unitConvert_to === "Gram"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber / 1000
            setResult(resultt)
            console.log("this is the result " + resultt)
        } 
        if(unitConvert_from === "Gram" && unitConvert_to === "Kilogram"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber / 1000
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        
        // Kilogram and Milligram
        if(unitConvert_from === "Kilogram" && unitConvert_to === "Milligram"){
            console.log("this the number that you're putting " + unitNumber)
            const formula = 1000 * 1000
            const resultt = unitNumber / formula
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        if(unitConvert_from === "Milligram" && unitConvert_to === "Kilogram"){
            console.log("this the number that you're putting " + unitNumber)
            const formula = 1000 * 1000
            const resultt = unitNumber / formula
            setResult(resultt)
            console.log("this is the result " + resultt)
        }

        
        // Gram and Milligram
        if(unitConvert_from === "Gram" && unitConvert_to === "Milligram"){
            console.log("this the number that you're putting " + unitNumber)
            // const formula = 1000 * 1000
            const resultt = unitNumber * 1000
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        if(unitConvert_from === "Milligram" && unitConvert_to === "Gram"){
            console.log("this the number that you're putting " + unitNumber)
            // const formula = 1000 * 1000
            const resultt = unitNumber * 1000
            setResult(resultt)
            console.log("this is the result " + resultt)
        }










        // -----TEMPETURE---------------------------------------------       
        





        
        // Fahrenheit and Degree Celsius
        if(unitConvert_from === "Fahrenheit" && unitConvert_to === "Degree Celsius"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = (unitNumber - 32) * 5/9 
            setResult(resultt)
            console.log("this is the result " + resultt)
        } 
        if(unitConvert_from === "Degree Celsius" && unitConvert_to === "Fahrenheit"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = (unitNumber - 32) * 5/9
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        
        // Fahrenheit and Kelvin
        if(unitConvert_from === "Fahrenheit" && unitConvert_to === "Kelvin"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = (unitNumber - 32) * 5/9 + 273.15
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        if(unitConvert_from === "Kelvin" && unitConvert_to === "Fahrenheit"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = (unitNumber - 32) * 5/9 + 273.15
            setResult(resultt)
            console.log("this is the result " + resultt)
        }

        // Degrees Celsius and Kelvin
        if(unitConvert_from === "Degree Celsius" && unitConvert_to === "Kelvin"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber + 273.15
            setResult(resultt)
            console.log("this is the result " + resultt)
        }
        if(unitConvert_from === "Kelvin" && unitConvert_to === "Degree Celsius"){
            console.log("this the number that you're putting " + unitNumber)
            const resultt = unitNumber + 273.15
            setResult(resultt)
            console.log("this is the result " + resultt)
        }


// ------------------------------------------------------------------------------------------------

        
        if(unitConvert_from === unitConvert_to){
            windowConfirm()
        }

    }
    const buttonReset = () => {
        // e.preventDefault()
        setNewUnitConvert_from("Options")
        setNewUnitConvert_to("Options")
        setunitNumber(0)
        setResult(0)
        
    }
    const windowConfirm = (e) => {
        window.confirm("There's some error, try again")
        buttonReset()
    }
    

    return(
        <div className="overflow-y-hidden overflow-x-hidden flex flex-col justify-center gap-1 lg:flex lg:flex-col lg:gap-4">
            <div className="">
                <h1 className="lg:mr-200 lg:ml-200 flex flex-wrap justify-center mt-20 text-xl text-neutral-400 lg:flex lg:flex-wrap lg:justify-center lg:mt-20 lg:text-4xl hover:scale-105 transition-transform">{titlePageName}</h1>
                <form className="">
                    <label htmlFor="Length" className="flex flex-wrap justify-center mr-36 mt-10 text-neutral-400 lg:flex lg:flex-wrap lg:justify-center lg:mr-36 lg:mt-10">
                        {firstLabel}
                    </label>
                    <select
                        className="bg-white text-black ml-20 lg:ml-175 focus:outline-white rounded-2xl"
                        onChange={handleChangeUnitF}
                        value={unitConvert_from}
                        >
                        <option >Options</option>
                        {options.map((opt, index) => (
                            <option key={index} value={opt}>{opt}</option>
                        ))}
                    </select>
                    
            <div className="ml-60 lg:ml-250 lg:mr-120">
                        <label htmlFor="Length" className="flex flex-wrap justify-center -mt-12 -ml-2 text-neutral-400 lg:flex lg:flex-wrap lg:justify-center lg:-ml-80 lg:-mt-12">
                            {secondLabel}
                        </label>
                        <select
                            className="bg-white text-black ml-10 lg:-ml-30 focus:outline-white rounded-2xl"
                            onChange={handleChangeUnitTo}
                            value={unitConvert_to}
                            >
                            <option >Options</option>
                            {options.map((opt, index) => (
                                <option key={index} value={opt}>{opt}</option>
                            ))}
                        </select>
            </div>
            <div className=""> 
                        <label htmlFor="Length" className="flex flex-wrap justify-center mr-45 mt-10 text-neutral-400 lg:flex lg:flex-wrap lg:justify-center lg:mr-36 lg:mt-17">
                            {thirdLabel}
                        </label>
                        <input type="number" 
                            name="length"
                            typeof="number"
                            value={unitNumber !== 0 ? unitNumber : ""} 
                            className="bg-white text-black ml-7 text-base lg:ml-170 lg:mt-1 focus:outline-white rounded-2xl"
                            onChange={handleUnitNumber}
                        />
            </div>
            <div className="ml-60 lg:ml-220 lg:mr-100">
                        <label htmlFor="Length" className="flex flex-wrap justify-center mr-11 -mt-12 text-neutral-400 lg:flex lg:flex-wrap lg:justify-center lg:-ml-61 lg:-mt-13 lg:mb-1">
                            {fourLabel}
                        </label>
                        <input type="number" 
                            name="length"
                            typeof="number"
                            value={result}
                            disabled
                            className="bg-white text-black -ml-2 lg:-ml-1 focus:outline-white rounded-2xl"
                        />
            </div>
            <div className="mr-200 lg:mr-400">
                <button className="ml-30 mt-10 bg-slate-200 text-black hover:bg-slate-300 rounded-2xl font-bold hover:scale-105 transition-transform p-3 lg:mt-10 lg:ml-180" onClick={buttonSave}>Convert</button>
            
            </div>                    
            <div className="mr-10 ml-60 -mt-10 lg:-mt-6 lg:mr-200 lg:ml-200">
                <button className="-mt-2 bg-slate-200 text-black hover:bg-slate-300 rounded-2xl font-bold hover:scale-105 transition-transform p-3 lg:-mt-30 lg:ml-25" onClick={buttonReset}>Reset</button>
            </div>                    
                </form>
            </div>
        </div>
        
    )
}





















        // <div className="overflow-x-hidden overflow-y-hidden">
        //     <main className="mb-40 flex flex-col gap-[62px] row-start-2 items-center sm:items-start">
        //         <h1 className="-mt-1 mr-5 text-2xl font-bold hover:scale-105 transition-transform text-neutral-400 lg:mt-6 lg:ml-175 lg:text-4xl">{titlePageName}</h1>
        //         <div className="ml-85 -mt-5 lg:ml-205 lg:mt-5 flex flex-col">
        //             <form>          

        //                     {/*------------- INPUT UNIT TO CONVERT FROM ---------------------------------------------------- */}

        //                 <label htmlFor="Length" className="-ml-50 lg:block lg:mt-1 lg:mr-50 lg:-ml-50 text-sm/6 font-medium text-neutral-400">
        //                  {firstLabel}
        //                 </label>
        //                 <label htmlFor="Length" className="ml-15 -mb-50 lg:block lg:-mt-6 lg:-ml-3 lg:-mb-45 text-sm/6 font-medium text-neutral-400">
        //                   {secondLabel}
        //                 </label>
        //                 <div className="mt-4 ml-3 lg:mt-50">
        //                     <div className="">
        //                         <select
                        //             className="bg-white text-neutral-500 text-sm py-2 px-2 pl-4 focus:outline-white scale-130 -ml-50 lg:-ml-50 rounded-2xl"
                        //             onChange={handleChangeUnitF}
                        //             value={unitConvert_from}
                        //             >
                        //             <option>Options</option>
                        //             {options.map((opt, index) => (
                        //                 <option key={index} value={opt}>{opt}</option>
                        //             ))}
                        //         </select>
                        //     </div>
                        // </div>

                         

         //                 <label htmlFor="Length" className="-ml-5 -mb-50 lg:block lg:mt-10 lg:mr-50 lg:-ml-20 text-sm/6 font-medium text-neutral-400">
        //                   Unit to convert to
        //                 </label> 
        //                 <div className="-mt-6 ml-48 lg:-mt-8">
        //                     <div className="">
        //                         <select
                        //             className="bg-white text-neutral-500 text-sm py-2 px-2 pl-4 focus:outline-white scale-130 -ml-50 l:-ml-8 rounded-2xl"
                        //             onChange={handleChangeUnitTo}
                        //             value={unitConvert_to}
                        //             >
                        //             <option >Options</option>
                        //             {options.map((opt, index) => (
                        //                 <option key={index} value={opt}>{opt}</option>
                        //             ))}
                        //         </select>
                        //     </div>
                        // </div>


                           {/*------------- INPUT UNIT LENGTH TO CONVERT (NUMBERS)---------------------------------------------------- */}



                        // <label htmlFor="Length" className="block mt-10 -ml-50 lg:-ml-50 text-sm/6 font-medium text-neutral-400">
                        //     {thirdLabel}
                        // </label>
                        // <label htmlFor="Length" className="block -mt-6 lg:-mt-6 -ml-4 text-sm/6 font-medium text-neutral-400">
                        //     {fourLabel}
                        // </label>
                        // <div className="mt-4 -ml-56 lg:-ml-56">
                        //     <div className="">
                        //         <input type="number" 
                        //             name="length"
                        //             typeof="number"
                        //             value={unitNumber !== 0 ? unitNumber : ""} 
                        //             className="bg-white text-neutral-500 text-base rounded-2xl pl-2 -px-60 p-1 scale-100 lg:scale-110 lg:-ml-2 focus:outline-white"
                        //             onChange={handleUnitNumber}
                        //         />
                        //     </div>
                           
                        // </div>

                           {/*------------- BUTTONS AND RESULT ---------------------------------------------------- */}


        //                 <div className="mt-4 mb-2 mr-4 lg:mr-2">
        //                     <div>
        //                         <button className="mt-10 -ml-31 bg-slate-200 text-black p-3 hover:bg-slate-300 rounded-2xl font-bold hover:scale-105 transition-transform" onClick={buttonSave}>Convertt</button>
        //                         <button className="mt-10 ml-5 bg-slate-200 text-black p-3 hover:bg-slate-300 rounded-2xl font-bold hover:scale-105 transition-transform" onClick={buttonReset}>Reset</button>
        //                     </div>
                            
        //                     <div className="flex items-center -mt-33.5 lg:-mt-33.5 mr-30 -ml-4 scale-150 rounded-md">
        //                         <input type="number" 
        //                             name="length"
        //                             typeof="number"
        //                             value={result}
        //                             disabled
        //                             className="bg-white text-neutral-500 text-sm rounded-2xl pl-2 -px-60 p-1 scale-79 lg:scale-85 lg:ml-2 focus:outline-white"
        //                         />
        //                     </div>
                            
        //                 </div>
        //             </form>
        //         </div>            
        //     </main>
        // </div> 