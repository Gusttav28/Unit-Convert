import Navbar from "../components/Navbar";
import ConverterForm from "../components/ConverterForm";
import WeightData from "../data/WeightParams";


export default function Wight() {
    return(
        <div>
            <Navbar />
            <ConverterForm 
                titlePageName={WeightData.title}
                firstLabel={WeightData.firstLabel}
                secondLabel={WeightData.secondLabel}
                thirdLabel={WeightData.thirdlabel}
                fourLabel={WeightData.fourlabel}
                options={WeightData.options}
            />
        </div>
    )
}