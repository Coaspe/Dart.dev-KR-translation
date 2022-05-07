interface props {
  text: string;
  className?: string;
}
const Ccode: React.FC<props> = ({ text, className }) => {
  return <code className={`text-textGreen ${className}`}>{text}</code>;
};

export default Ccode;
