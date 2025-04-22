//npm
import Image from "next/image";
import Link from "next/link";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./footer.css";

export default function Footer(){
    return(
        <section id="footer" className="no-max-width">
            <div className="top desktop">
                <Image src="/img/main-logo.svg" alt="Logo du portfolio de Léo Murail" width={148} height={85} />
                <div className="item">
                    <h2 className={fonts.orbitron.className}>Professionnel</h2>
                    <Link href="/projects">Mes projets</Link>
                    <Link href="/brand">Ma marque</Link>
                </div>
                <div className="item">
                    <h2 className={fonts.orbitron.className}>En savoir plus</h2>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">À propos</Link>
                </div>
            </div>
            <p className="bottom">
                <strong>© Made by Léo Murail</strong>- Politique de confidentialité - Mentions légales - 2025
            </p>
        </section>
    )
}