function Badge({ children, variant = "neutral", icon }) {
  return (
    <span className={`badge badge--${variant}`}>
      {icon && <span>{icon}</span>}
      {children}
    </span>
  );
}

export default Badge;