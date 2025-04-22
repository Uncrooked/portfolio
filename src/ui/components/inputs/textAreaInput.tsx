interface props{
    name:string;
    label:string;
}

export default function TextAreaInput({name,label}:props){
    return(
        <div className="row">
            <label htmlFor={name}>{label}</label>
            <textarea name={name} id={name}></textarea>
        </div>
    )
}