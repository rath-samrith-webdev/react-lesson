interface TextProp {
  children: string;
  classText: string;
  onClick: () => void;
}

const Button = ({ children, classText, onClick }: TextProp) => {
  return (
    <button type="button" className={`btn ${classText}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
