import { useEffect } from "react";
import { FiX } from "react-icons/fi";

function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 520,
}) {
  useEffect(function () {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return function () {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        style={{ maxWidth: maxWidth }}
        onClick={function (e) {
          e.stopPropagation();
        }}
      >
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>

          <button
            className="modal-close"
            onClick={onClose}
          >
            <FiX />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Modal;