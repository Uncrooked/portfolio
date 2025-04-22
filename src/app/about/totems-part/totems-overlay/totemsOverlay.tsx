//components
import Btn from '@/ui/components/btns/btn';
import Icon from '@/ui/components/illu/icon';

//const
import { softSkills, classNames } from '../constants';

interface props{
    allStates: {
        hover: boolean;
        click: boolean;
    }[];
    setAllStates:React.Dispatch<React.SetStateAction<{
        hover: boolean;
        click: boolean;
    }[]>>;
    selected:React.RefObject<number | null>;
    oneIsShown:React.RefObject<boolean>;
}

export default function TotemsOverlay({allStates,setAllStates,selected,oneIsShown}:props){

    const btnsEl = allStates.map((param,index) => {

        const btnOpac = param.hover ? "" : "no-opac";

        return (
            <li 
                className={classNames[index]} 
                onMouseOver={() => {setAllStates(prev => prev.map((item,i) => i == index ? {...item, hover: true} : item))}} 
                onMouseOut={() => {setAllStates(prev => prev.map((item,i) => i == index ? {...item, hover: false} : item))}}
                onClick={() => {
                    selected.current = index;
                    oneIsShown.current = true;
                    setAllStates(prev => prev.map((item,i) => i == index ? {...item, click: true} : item));
                }}
                key={index}
            >
                <Btn className={btnOpac}>
                    <Icon picked="eye"/>
                </Btn>
            </li>
        )
    });

    const isSelected = (selected.current || selected.current == 0);

    return(
        <div className="overlay">
            <ul className={`btns ${isSelected && allStates[selected.current as number].click ? "display-none" : ""}`}> 
                {btnsEl}
            </ul>
            <div className={`data-overlay desktop ${isSelected && allStates[selected.current as number].click ? "" : "display-none"}`}> 
                {
                    isSelected &&
                    <>
                        <Icon picked="cross-menu" size={25} onClick={() => {
                            setAllStates(prev => {
                                const value = [...prev]
                                value[selected.current as number].click = false;
                                return value;
                            })
                            oneIsShown.current = false;
                        }}/>
                        <div className="content">
                            <h2>{softSkills[selected.current as number].title}</h2>
                            <p>{softSkills[selected.current as number].desc}</p>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}