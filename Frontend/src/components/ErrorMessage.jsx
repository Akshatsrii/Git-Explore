const ErrorMessage = ({ message }) => {
  return (
    <div
      style={{
        position: "relative",
        padding: "20px 28px",
        borderRadius: "10px",
        background: "linear-gradient(145deg, #1a0000, #0f0a00, #0a0a0a)",
        border: "1px solid rgba(201,62,39,0.45)",
        boxShadow: "0 4px 24px rgba(180,40,20,0.15), inset 0 1px 0 rgba(201,62,39,0.1)",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Top shimmer line — red-gold tint for error */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #c93a27, #ff6b4a, #c93a27, transparent)",
          opacity: 0.8,
        }}
      />

      {/* Icon */}
      <div
        style={{
          fontSize: "1.6rem",
          marginBottom: "10px",
          filter: "drop-shadow(0 0 8px rgba(201,62,39,0.6))",
          animation: "error-pulse 2s ease-in-out infinite",
        }}
      >
        ⚠
      </div>

      {/* Title */}
      <p
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "0.7rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(201,100,60,0.6)",
          marginBottom: "8px",
        }}
      >
        Something went wrong
      </p>

      {/* Message */}
      <p
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "0.95rem",
          color: "#e87050",
          letterSpacing: "0.03em",
          lineHeight: "1.6",
          fontWeight: "600",
        }}
      >
        {message}
      </p>

      {/* Bottom glow line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,62,39,0.4), transparent)",
        }}
      />

      <style>{`
        @keyframes error-pulse {
          0%, 100% { opacity: 0.7; transform: scale(1);   }
          50%       { opacity: 1;   transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default ErrorMessage;