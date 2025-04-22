//npm
import Link from "next/link";

//styles
import "./btn.css";

interface props<T>{
  children : React.ReactNode;
  color?: string;
  path? : string;
  onClick?:() => T;
  className?:string;
}

export default function Btn<T>({children, color = "blue", path, onClick, className} : props<T>){
  let content:React.ReactNode;
  const style = { "--color": `var(--${color}-color)`, "--dark-color": color.split("-")[0] == "light" ? `var(--${color.split("-")[1]}-color)` : `var(--dark-${color}-color)` } as React.CSSProperties;

  content = path ? 
  <Link href={path} style={style} className={`btn ${color} ${className}`} onClick={onClick}><div className="content">{children}</div></Link> :
  <button style={style} className={`btn ${color} ${className}`} onClick={onClick}><div className="content">{children}</div></button>

  return (content);
}