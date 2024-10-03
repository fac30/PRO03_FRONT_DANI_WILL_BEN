interface ButtonProps {
  label: string;
  onClick: () => void;
  classes: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, classes, disabled = false }) => {
  return (
    // cool feature - disabled prop stops multiple submissions whilst loading
    <button className={classes} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;

