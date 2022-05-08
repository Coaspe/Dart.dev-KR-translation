import Link from "next/link";

interface props {
  text: string;
  className?: string;
  href: string;
}
const CAnchor: React.FC<props> = ({ text, className, href }) => {
  return (
    <Link
      href={href}
      className={`text-selectedText ${className} hover:text-selectedTextHover`}
    >
      {text}
    </Link>
  );
};

export default CAnchor;
