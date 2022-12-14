import RecuadroCentrado from "../components/RecuadroCentrado";
import LabelsContext, { AppLabels } from "../context/LabelsContext";

export default function RecuadroCentradoContainer(props:any)
{
    return <LabelsContext.Consumer>
        {
            (context:AppLabels) =>(
                <RecuadroCentrado titulo={context.titulo} />
            )
        }
    </LabelsContext.Consumer>
}
