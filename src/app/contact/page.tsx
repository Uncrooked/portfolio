//components
import ContactForm from "./contact-form/contactForm";
import Info from "./info/info";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./contact.css";

export default function Page(){
    return(
        <section id="contact" className="no-max-width">
            <div className="desktop main">
                <h1 className={fonts.imperial.className}>ME CONTACTER</h1>
                <div className="main-content">
                    <ContactForm/>
                    <Info/>
                </div>
            </div>
        </section>
    )
}