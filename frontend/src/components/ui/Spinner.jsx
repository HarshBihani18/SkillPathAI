function Spinner({
  size = 24,
  color,
}) {
  return (
    <div
      className="spinner"
      style={{
        width: size,
        height: size,
        borderTopColor: color || "var(--color-primary)",
      }}
    />
  );
}

export default Spinner;