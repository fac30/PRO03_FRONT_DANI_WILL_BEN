interface ButtonProps {
  label: string;
  onClick: () => void;
  classes: string;
  disabled?: boolean;
  status?: 'default' | 'correct' | 'incorrect'; // Handle the button state
}

const Button: React.FC<ButtonProps> = ({ label, onClick, classes, disabled = false, status = 'default' }) => {
  // Determine button styles based on the status
  let buttonClasses = classes;
  
  if (status === 'correct') {
    buttonClasses += ' bg-green-500';
  } else if (status === 'incorrect') {
    buttonClasses += ' bg-red-500';
  } else if (status === 'default') {
    // Apply the original yellow button color when status is 'default'
    buttonClasses += ' bg-yellow-500'; // Use the class for yellow styling
  }

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;

