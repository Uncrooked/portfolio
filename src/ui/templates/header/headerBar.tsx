"use client"

//npm
import Link from "next/link";
import Image from "next/image";

//components
import Btn from "../../components/btns/btn";
import RoundBtn from "../../components/btns/roundBtn";

//styles
import "./headerBar.css";

//functions
import { setOverlay, removeHeader } from "./functions";

export default function HeaderBar(){
    return(
        <div id="header-bar">
            <section id="child-header">

                <Link href="/" onClick={removeHeader}>
                    <Image 
                    src="/img/main-logo.svg" 
                    alt="Logo principal du portfolio Léo Murail"
                    width={78}
                    height={44}
                    />
                </Link>

                <div className="right">
                    {/* <Btn path="/contact" color="grey" onClick={removeHeader}>Contact</Btn> */}
                    <div onClick={setOverlay} id="menu-btn">
                        <RoundBtn className="burger-menu" path="#" icon="burger-menu" size="l" display={true}/>
                        <RoundBtn className="cross-menu" path="#" icon="cross-menu" size="l" display={false} />
                    </div>
                </div>

            </section>
        </div>
    )
}