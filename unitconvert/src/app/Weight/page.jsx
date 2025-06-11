"use client"

import Navbar from "../components/Navbar";
import { useState } from "react";


export default function Weight() {
    const [unitNumber, setunitNumber] = useState(0)
    const [result, setResult] = useState(0)
    const [centimetreValue, setCentimetreValue] = useState(0)
    const [unitConvert_from, setNewUnitConvert_from] = useState("")
    const [unitConvert_to, setNewUnitConvert_to] = useState("")


    var valueSelectedUnitF = ""
    var valueSelectedUnitT = "" 
    var metre_value = 0
    var centimetre_value = 0


    function handleSave() {
        
    }

    const handleMetreValue = () =>{
        metre_value = 100
        console.log(metre_value)
    }
    const handleCentimetreValue = () =>{
        centimetre_value = 100
        console.log(centimetre_value)
    }
    const handleResult = () =>{
        
    }

    const handleChangeUnitF =  (e) =>{
        valueSelectedUnitF = e.target.value
        setNewUnitConvert_from(valueSelectedUnitF)
    //     handleMetreValue()

    //    if(valueSelectedUnitF === "Metre"){
    //         console.log("is putting Metre")
    //         console.log(metre_value)
       
    //    }
    //    if (valueSelectedUnitF === "Centimetre") {
    //         console.log("is putting centimetre")
    //         console.log(centimetre_value)

    //     }
    }

    const handleChangeUnitTo = (e) => {
        valueSelectedUnitT = e.target.value
        setNewUnitConvert_to(valueSelectedUnitT)
        // handleCentimetreValue()
        
        // if(valueSelectedUnitT === "Metre"){
        //     console.log("is putting Metre")
        // }
        // if (valueSelectedUnitT === "Centimetre") {
        //     console.log("is putting Centimetre")
        // }
    }

    const handleUnitNumber = (e) =>{
        const value = parseFloat(e.target.value)
        setunitNumber(value)
       
    }


    const buttonSave = (e) =>{
        e.preventDefault()
        console.log("save")

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
    
    // kilogram
    // milligram
    // gram

    return(
        <div className="overflow-x-hidden overflow-y-hidden">
            <main className="mb-40 flex flex-col gap-[62px] row-start-2 items-center sm:items-start">
                <Navbar />
                <h1 className="-mt-1 mr-5 text-2xl font-bold hover:scale-105 transition-transform text-neutral-400 lg:mt-6 lg:ml-175 lg:text-4xl">WEIGHT</h1>
                <div className="ml-85 -mt-5 lg:ml-205 lg:mt-5 flex flex-col">
                    <form>          

                            {/*------------- INPUT UNIT TO CONVERT FROM ---------------------------------------------------- */}

                        <label htmlFor="Length" className="-ml-48 lg:block lg:mt-1 lg:mr-50 lg:-ml-50 text-sm/6 font-medium text-neutral-400">
                         Unit to convert from:
                        </label>
                        <label htmlFor="Length" className="ml-15 -mb-50 lg:block lg:-mt-6 lg:-ml-3 lg:-mb-45 text-sm/6 font-medium text-neutral-400">
                          Unit to convert to:
                        </label>
                        <div className="mt-4 ml-2 lg:mt-50">
                            <div className="">
                                <select
                                    className="bg-white text-neutral-500 text-sm py-2 px-2 pl-4 focus:outline-white scale-130 -ml-50 l:-ml-8 rounded-2xl"
                                    onChange={handleChangeUnitF}
                                    value={unitConvert_from}
                                    >
                                    <option >Options</option>
                                    <option value="Kilogram">Kilogram</option>
                                    <option value="Gram">Gram</option>
                                    <option value="Milligram">Milligram</option>
                                </select>
                            </div>
                        </div>

                            {/*------------- INPUT UNIT TO CONVERT TO ---------------------------------------------------- */}

                        {/* <label htmlFor="Length" className="-ml-5 -mb-50 lg:block lg:mt-10 lg:mr-50 lg:-ml-20 text-sm/6 font-medium text-neutral-400">
                          Unit to convert to
                        </label> */}
                        <div className="-mt-8 ml-48 lg:-mt-8">
                            <div className="">
                                <select
                                    className="bg-white text-neutral-500 text-sm py-2 px-2 pl-4 focus:outline-white scale-130 -ml-50 l:-ml-8 rounded-2xl"
                                    onChange={handleChangeUnitTo}
                                    value={unitConvert_to}
                                    >
                                    <option >Options</option>
                                    <option value="Kilogram">Kilogram</option>
                                    <option value="Gram">Gram</option>
                                    <option value="Milligram">Milligram</option>
                                </select>
                            </div>
                        </div>


                           {/*------------- INPUT UNIT LENGTH TO CONVERT (NUMBERS)---------------------------------------------------- */}



                        <label htmlFor="Length" className="block mt-10 -ml-50 lg:-ml-50 text-sm/6 font-medium text-neutral-400">
                            Unit length to convert:
                        </label>
                        <label htmlFor="Length" className="block -mt-6 -ml-4 text-sm/6 font-medium text-neutral-400">
                                Convert Result:
                        </label>
                        <div className="mt-4 -ml-53 lg:-ml-52">
                            <div className="">
                                <input type="number" 
                                    name="length"
                                    typeof="number"
                                    value={unitNumber !== 0 ? unitNumber : ""} 
                                    className="bg-white text-neutral-500 text-base rounded-2xl pl-2 -px-60 p-1 scale-110 lg:scale-125 lg:-ml-2 focus:outline-white"
                                    onChange={handleUnitNumber}
                                />
                            </div>
                           
                        </div>

                           {/*------------- BUTTONS AND RESULT ---------------------------------------------------- */}


                        <div className="mt-4 mb-2 mr-2">
                            <div>
                                <button className="mt-10 -ml-31 bg-slate-200 text-black p-3 hover:bg-slate-300 rounded-2xl font-bold hover:scale-105 transition-transform" onClick={buttonSave}>Convert</button>
                                <button className="mt-10 ml-5 bg-slate-200 text-black p-3 hover:bg-slate-300 rounded-2xl font-bold hover:scale-105 transition-transform" onClick={buttonReset}>Reset</button>
                            </div>
                            
                            <div className="flex items-center -mt-33 mr-30 -ml-4 scale-150 rounded-md">
                                <input type="number" 
                                    name="length"
                                    typeof="number"
                                    value={result}
                                    disabled
                                    className="bg-white text-neutral-500 rounded-2xl pl-2 -px-60 p-1 scale-69 lg:scale-85 lg:ml-2 focus:outline-white"
                                />
                            </div>
                            
                        </div>
                    </form>
                </div>            
            </main>
        </div>
    )
}