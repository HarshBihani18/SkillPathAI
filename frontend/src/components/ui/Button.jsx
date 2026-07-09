import Spinner from "./Spinner";

function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  isLoading = false,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Spinner size={16} /> : children}
    </button>
  );
}

export default Button;