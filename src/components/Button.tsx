interface ButtonProps {
  label: string;
  onClick: () => void;
  classes: string;
  disabled?: boolean;
  status?: 'default' | 'correct' | 'incorrect'; // Handle the button state
}

const Button: React.FC<ButtonProps> = ({ label, onClick, classes, disabled = false, status = 'default' }) => {
  let buttonClasses = classes;
  
  if (status === 'correct') {
    buttonClasses += ' bg-green-500';
  } else if (status === 'incorrect') {
    buttonClasses += ' bg-red-500';
  } else if (status === 'default') {
    buttonClasses += ' bg-yellow-500'; 
  }

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;

