//npm
import Image from "next/image";

//components
import AssetLoading from "../asset-loading/assetLoading";

//styles
import "./pageLoading.css";

export default function PageLoading(){
    return(
        <section id="page-loading">
            <Image src="/img/main-logo.svg" alt="logo de Léo Murail" width={76} height={46}/>
            <AssetLoading/>
        </section>
    )
}