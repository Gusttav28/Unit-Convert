import Navbar from "../components/Navbar";
import ConverterForm from "../components/ConverterForm";
import LengthData from "../data/LengthParams";

export default function Length() {
    return(
        <div>
            <Navbar />
            <ConverterForm 
                titlePageName={LengthData.title}
                firstLabel={LengthData.firstLabel}
                secondLabel={LengthData.secondLabel}
                thirdLabel={LengthData.thirdlabel}
                fourLabel={LengthData.fourlabel}
                options={LengthData.options}
            />
        </div>
    )
}