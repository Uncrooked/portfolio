//components
import HeaderOverlay from "./overlay";
import HeaderBar from "./headerBar";

//styles
import "./header.css";

export default function Header(){

    return(
        <section id="header" className="no-max-width">
            <HeaderBar/>
            <div id="back-header"></div>
            <HeaderOverlay/>
        </section>
    )
}