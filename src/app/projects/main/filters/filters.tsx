//components
import Btn from "@/ui/components/btns/btn";
import Icon from "@/ui/components/illu/icon";

//styles
import "./filters.css";

//types
import { Category } from "../../type";

interface props{
    categories:Category[];
    setCurrent:(param:string) => void;
}

export default function Filters({categories,setCurrent}:props){

    const filterBtns = categories.map((param,index) => (
        <li className="filter" key={index}>
            <Btn path={`#${param.slug}`} color={param.color} onClick={() => {setCurrent(param.slug)}}> 
                {param.name} <Icon picked="eye" />
            </Btn>
        </li>
    ));

    return(
        <ul className="filters">
            {filterBtns}
        </ul>
    )
}