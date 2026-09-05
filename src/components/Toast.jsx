import React, { useEffect } from "react";
import { CheckCircle, AlertCircle, X, Bell } from "lucide-react";

export function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast">
        <div className="toast-icon">
          <CheckCircle size={22} />
        </div>
        <div className="toast-body">
          <strong>Vriddhi Notification</strong>
          <p>{message}</p>
        </div>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "#aaa",
            cursor: "pointer",
            marginLeft: "auto"
          }}
          aria-label="Dismiss toast"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
