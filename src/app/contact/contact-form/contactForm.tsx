//npm
import Form from "next/form";
import Image from "next/image";

//components
import TextInput from "@/ui/components/inputs/textInput";
import SelectInput from "@/ui/components/inputs/selectInput";
import TextAreaInput from "@/ui/components/inputs/textAreaInput";
import Btn from "@/ui/components/btns/btn";

//styles
import "./contactForm.css";

export default function ContactForm() {

    const options = [
        {
            name:"Mes servies",
            value:"about-services"
        },
        {
            name:"Ma marque",
            value:"about-brand"
        },
        {
            name:"autre",
            value:"about-other"
        }
    ]
    return (
        <Form action="/contact">
            <div className="flex-row">
                <TextInput label="Prénom*" name="first-name" />
                <TextInput label="Nom*" name="last-name" />
            </div>
            <div className="flex-row">
                <TextInput label="Email*" name="email" />
                <TextInput label="Tél*" name="tel" />
            </div>
            <TextInput label="Entreprise" name="entreprise" />
            <SelectInput label="Demande" name="demand" options={options}/>
            <TextAreaInput label="Message" name="message" />
            <Btn color="glass">Envoyer<Image src="/img/icons/purple/plane.svg" alt="send message icon plante" width={20} height={20}/></Btn>
        </Form>
    );
}