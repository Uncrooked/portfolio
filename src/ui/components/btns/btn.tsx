"use client";

// npm
import Link from "next/link";
import { useRef } from "react";

// styles
import "./btn.css";

interface Props<T> {
  children: React.ReactNode;
  color?: "blue" | "glass" | "grey";
  path?: string;
  onClick?: () => T;
  className?: string;
}

export default function Btn<T>({
  children,
  color = "blue",
  path,
  onClick,
  className,
}: Props<T>) {

  let borderColor = "";
  let backgroundColor = "";
  let backgroundColorHover = "";

  switch (color){
    case "glass":
      borderColor = `var(--white-color)`;
      backgroundColor = `rgba(235,235,235,0.15)`;
      backgroundColorHover = `rgba(235,235,235,0.40)`;
      break;
    case "grey":
      borderColor = `var(--light-grey-color)`;
      backgroundColor = `var(--dark-grey-color)`;
      backgroundColorHover = `var(--grey-color)`;
      break;
    default:
      borderColor = `var(--light-${color}-color)`;
      backgroundColor = `var(--${color}-color)`;
      backgroundColorHover = `var(--light-${color}-color)`;
      break;
  }


  const style = {
    "--color": `var(--dark-${color}-color)`,
    "--background-color": backgroundColor,
    "--background-color-hover": backgroundColorHover,
    "--border-color": borderColor,
  } as React.CSSProperties;

  const content = path ? (
    <Link href={path} onClick={onClick}>
      <div
        style={style}
        className={`btn ${color} ${className}`}
      >
        <div className="content">{children}</div>
      </div>
    </Link>
  ) : (
    <button  
      style={style}
      className={`btn ${color} ${className}`}
      onClick={onClick}
    >
      <div className="content">{children}</div>
  </button>
  );

  return (content);
}