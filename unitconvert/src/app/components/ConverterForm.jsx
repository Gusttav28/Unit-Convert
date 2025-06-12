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
                <h1 className="lg:mr-200 lg:ml-208 flex flex-wrap justify-center mt-20 text-2xl text-neutral-400 lg:flex lg:flex-wrap lg:justify-center lg:mt-20 lg:text-4xl hover:scale-105 transition-transform">{titlePageName}</h1>
                <form className="">
                    <label htmlFor="Length" className="flex flex-wrap justify-center text-sm mr-36 mt-10 text-neutral-400 lg:flex lg:flex-wrap lg:justify-center lg:mr-40 lg:mt-10">
                        {firstLabel}
                    </label>
                    <select
                        className="bg-white text-neutral-400 ml-15 scale-100 p-2 mt-3 lg:ml-175 lg:mt-3 lg:scale-115 lg:p-2 focus:outline-white rounded-2xl"
                        onChange={handleChangeUnitF}
                        value={unitConvert_from}
                        >
                        <option >Options</option>
                        {options.map((opt, index) => (
                            <option key={index} value={opt}>{opt}</option>
                        ))}
                    </select>
                    
            <div className="ml-60 lg:ml-250 lg:mr-120">
                        <label htmlFor="Length" className="flex flex-wrap justify-center -mt-17 -ml-15 text-neutral-400 text-sm lg:flex lg:flex-wrap lg:justify-center lg:-ml-80 lg:-mt-17">
                            {secondLabel}
                        </label>
                        <select
                            className="bg-white text-neutral-400 -ml-2 scale-100 p-2 mt-3 lg:mt-3 lg:scale-115 lg:p-2 lg:-ml-30 focus:outline-white rounded-2xl"
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
                        <label htmlFor="Length" className="flex flex-wrap justify-center mr-38 mt-10 text-neutral-400 text-sm  lg:flex lg:flex-wrap lg:justify-center lg:mr-40 lg:mt-17">
                            {thirdLabel}
                        </label>
                        <input type="number" 
                            name="length"
                            typeof="number"
                            value={unitNumber !== 0 ? unitNumber : ""} 
                            className="bg-white text-black ml-7 text-base lg:scale-90 scale-80 p-2 mt-3 lg:p-2 lg:ml-168 lg:mt-2 focus:outline-white rounded-2xl"
                            onChange={handleUnitNumber}
                        />
            </div>
            <div className="ml-55 lg:ml-220 lg:mr-100">
                        <label htmlFor="Length" className="flex flex-wrap justify-center mr-14 -mt-17.5 text-neutral-400 text-sm  lg:flex lg:flex-wrap lg:justify-center lg:-ml-61 lg:-mt-17 lg:mb-1">
                            {fourLabel}
                        </label>
                        <input type="number" 
                            name="length"
                            typeof="number"
                            value={result}
                            disabled
                            className="bg-white text-black scale-90 -ml-5 mt-3.5 p-1 lg:scale-110 lg:p-1 lg:mt-2 lg:-ml-1 focus:outline-white rounded-2xl"
                        />
            </div>
            <div className="mr-200 lg:mr-400">
                <button className="ml-30 mt-10 bg-slate-200 text-black hover:bg-slate-300 rounded-2xl font-bold hover:scale-105 transition-transform p-3 lg:mt-10 lg:ml-190" onClick={buttonSave}>Convert</button>
            
            </div>                    
            <div className="mr-17 ml-55 -mt-10 lg:-mt-9 lg:mr-200 lg:ml-190">
                <button className="-mt-2 bg-slate-200 text-black hover:bg-slate-300 rounded-2xl font-bold hover:scale-105 transition-transform p-3 lg:-mt-34 lg:ml-25" onClick={buttonReset}>Reset</button>
            </div>                    
                </form>
            </div>
        </div>
        
    )
}