//npm
import Image from "next/image";

//styles
import "./skillContent.css";

interface props{
    picked:{
        title:string;
        desc:string;
        apps:{
            name:string;
            path:string;
        }[]
    }
}

export default function SkillContent({picked}:props){
    const appsEl = picked.apps.map((param,index) => <li className="app skill" key={index}>
            <Image src={param.path} alt={`icône de l'application ${param.name} que Léo Murail maitrise`} width={50} height={50}/>
            <p>{param.name}</p>
        </li>
    );

    return(
        <div className="skill-content">
            <h3>Je maîtrise</h3>{/*to capitalize*/}
            <div className="skill-apps">
                <ul>
                    {appsEl}
                </ul>
            </div>
            <p className="desc">{picked.desc}</p>
        </div>
    )
}