import React from "react";

interface HeaderProps {
  text: string;
  className?: string;
}

function Header({ text, className }: HeaderProps) {
  return (
    <h2 className={`text-4xl font-bold  tracking-wider ${className}`}>
      {text}
    </h2>
  );
}

export default Header;
