//components
import Btn from "@/ui/components/btns/btn";
import Icon from "@/ui/components/illu/icon";

//styles
import "./partnerVideo.css";

export default function PartnerVideo(){
    return(
        <div className="partner-video">
            <div className="left">
                <h3 className="title">Vidéo en partenariat avec @RIZZOTO</h3>
                <p className="sub-title">©made by @etienne.mck</p>
                <Btn path="https://instagram.com/cliverproject">Voir le compte<Icon picked="instagram"/></Btn>
            </div>
                <iframe src="https://www.instagram.com/reel/C79e3oXM0--/embed" height={600}></iframe>
        </div>
    )
}