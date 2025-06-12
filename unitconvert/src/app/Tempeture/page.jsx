import Navbar from "../components/Navbar";
import ConverterForm from "../components/ConverterForm";
import TempetureData from "../data/TempetureParams";


export default function Tempeture() {
    return(
        <div>
            <Navbar />
            <ConverterForm 
                titlePageName={TempetureData.title}
                firstLabel={TempetureData.firstLabel}
                secondLabel={TempetureData.secondLabel}
                thirdLabel={TempetureData.thirdlabel}
                fourLabel={TempetureData.fourlabel}
                options={TempetureData.options}
            />
        </div>
    )
}