import "../styles/Button.css";

const Button = ({ children, onClick, disabled, primary, submit, secondary }) => {
  let className = "btn";

  if (submit) className += " btn-submit";
  else if (primary) className += " btn-primary";
  else if (secondary) className += " btn-secondary";
  else className += " btn-default";

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
