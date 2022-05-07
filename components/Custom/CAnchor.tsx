import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

interface props {
  text: string;
  className?: string;
  href: string;
}
const CAnchor: React.FC<props> = ({ text, className, href }) => {
  return (
    <a
      href={href}
      className={`text-selectedText ${className} hover:text-selectedTextHover`}
    >
      {text}
    </a>
  );
};

export default CAnchor;
