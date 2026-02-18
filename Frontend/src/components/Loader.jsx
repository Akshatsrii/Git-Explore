const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 20px",
        gap: "20px",
      }}
    >
      {/* Outer ring */}
      <div style={{ position: "relative", width: "56px", height: "56px" }}>

        {/* Faint full circle */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "3px solid rgba(201,162,39,0.15)",
          }}
        />

        {/* Spinning gold arc */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "3px solid transparent",
            borderTopColor: "#f5d060",
            borderRightColor: "rgba(201,162,39,0.4)",
            animation: "gold-spin 0.9s cubic-bezier(0.4, 0, 0.2, 1) infinite",
          }}
        />

        {/* Inner glow dot */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #f5d060, #c9a227)",
            boxShadow: "0 0 10px rgba(201,162,39,0.8), 0 0 20px rgba(201,162,39,0.4)",
            animation: "gold-pulse 1.2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Label */}
      <p
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(201,162,39,0.6)",
          animation: "gold-pulse 1.2s ease-in-out infinite",
        }}
      >
        Loading
      </p>

      <style>{`
        @keyframes gold-spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes gold-pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Loader;