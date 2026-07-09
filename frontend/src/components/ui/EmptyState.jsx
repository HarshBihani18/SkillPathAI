import Button from "./Button";

function EmptyState({
  icon = "📭",
  title,
  text,
  action,
  actionLabel,
}) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">{icon}</div>

      <h3 className="empty-state__title">
        {title}
      </h3>

      {text && (
        <p className="empty-state__text">
          {text}
        </p>
      )}

      {action && (
        <Button
          onClick={action}
          variant="primary"
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export default EmptyState;