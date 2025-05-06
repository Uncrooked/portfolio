"use client";

// npm
import Link from "next/link";
import { useRef } from "react";

// styles
import "./btn.css";

interface Props<T> {
  children: React.ReactNode;
  color?: string;
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
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>(0);
  const btnRef = useRef<HTMLElement | null>(null);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const hoverLayer = event.currentTarget;
    const btn = hoverLayer
      .closest(".hover-effect")
      ?.getElementsByClassName("btn")[0] as HTMLElement;

    if (!btn) return;

    // Stocke la référence au bouton pour éviter de la rechercher à chaque frame
    if (!btnRef.current) btnRef.current = btn;

    const pos = hoverLayer.getBoundingClientRect();
    const x = event.clientX - pos.left - hoverLayer.clientWidth / 2;
    const y = event.clientY - pos.top - hoverLayer.clientHeight / 2;

    // Position cible lissée
    targetPos.current = { x: x / 4, y: y / 4 };

    // Démarre l'animation une seule fois
    if (!animationFrame.current) {
      animationFrame.current = requestAnimationFrame(animateBtn);
    }
  }

  function animateBtn() {
    const speed = 0.5; // plus c'est bas, plus le mouvement est fluide

    currentPos.current.x +=
      (targetPos.current.x - currentPos.current.x) * speed;
    currentPos.current.y +=
      (targetPos.current.y - currentPos.current.y) * speed;

    if (btnRef.current) {
      btnRef.current.style.left = `${currentPos.current.x}px`;
      btnRef.current.style.top = `${currentPos.current.y}px`;
    }

    animationFrame.current = requestAnimationFrame(animateBtn);
  }

  function handleMouseLeave() {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
      animationFrame.current = 0;
    }
  }

  const style = {
    "--color": `var(--${color}-color)`,
    "--dark-color":
      color.split("-")[0] === "light"
        ? `var(--${color.split("-")[1]}-color)`
        : `var(--dark-${color}-color)`,
  } as React.CSSProperties;

  const content = path ? (
    <Link href={path} className="hover-effect">
      <div
        className="hover-layer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <div
        style={style}
        className={`btn ${color} ${className}`}
        onClick={onClick}
      >
        <div className="content">{children}</div>
      </div>
    </Link>
  ) : (
    <button className="hover-effect">
    <div
      className="hover-layer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
    <div
      style={style}
      className={`btn ${color} ${className}`}
      onClick={onClick}
    >
      <div className="content">{children}</div>
    </div>
  </button>
  );

  return (
    <div className="hover-effect">
      <div
        className="hover-layer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      {content}
    </div>
  );
}