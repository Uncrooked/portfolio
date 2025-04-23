//components
import Icon from "../illu/icon";

//styles
import "./selectInput.css";

interface props{
    name:string;
    label:string;
    options:{
        value:string;
        name:string;
    }[];
}

export default function SelectInput({name,label,options}:props){

    const optionsEl = options.map((param,index) => <option defaultChecked={index == 0} key={index} value={param.value}>{param.name}</option>);

    return(
        <div className="row select-input">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name}>
                {optionsEl}
            </select>
            <Icon picked="arrow" size={20}/>
        </div>
    )
}