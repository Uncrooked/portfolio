//styles
import "./textInput.css";

interface props{
    name:string;
    label:string;
}

export default function TextInput({name,label}:props){
    return(
        <div className="row text-input">
            <input type="text" id={name} name={name}/>
            <label htmlFor={name}>{label}</label>
        </div>
    )
}