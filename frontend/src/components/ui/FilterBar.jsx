function FilterBar({ options, active, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
      }}
    >
      {options.map(function (opt) {
        return (
          <button
            key={opt.value}
            onClick={function () {
              onChange(opt.value);
            }}
            style={{
              padding: "6px 16px",
              borderRadius: "var(--radius-full)",
              border: "1px solid",
              borderColor:
                active === opt.value
                  ? "var(--color-primary)"
                  : "var(--color-border)",
              background:
                active === opt.value
                  ? "var(--color-primary-glow)"
                  : "transparent",
              color:
                active === opt.value
                  ? "var(--color-primary-light)"
                  : "var(--color-text-secondary)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              cursor: "pointer",
              transition: "var(--transition)",
              fontFamily: "inherit",
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export default FilterBar;