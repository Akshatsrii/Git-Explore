import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div
      className="sticky top-0 p-4 flex justify-between items-center"
      style={{
        background: dark
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1500 50%, #0a0a0a 100%)"
          : "linear-gradient(135deg, #1a1200 0%, #2d1f00 50%, #1a1200 100%)",
        borderBottom: "1px solid #c9a227",
        boxShadow: dark
          ? "0 4px 24px rgba(201,162,39,0.15), inset 0 1px 0 rgba(201,162,39,0.1)"
          : "0 4px 24px rgba(201,162,39,0.25), inset 0 1px 0 rgba(201,162,39,0.2)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Subtle gold shimmer line at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #c9a227, #f5d060, #c9a227, transparent)",
        }}
      />

      <h1
        className="text-2xl font-bold tracking-tight"
        style={{
          fontFamily: "'Georgia', serif",
          letterSpacing: "0.05em",
          background: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #c9a227 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textShadow: "none",
          filter: "drop-shadow(0 0 8px rgba(201,162,39,0.4))",
        }}
      >
        GitHub Trending Explorer
      </h1>

      <button
        onClick={() => setDark(!dark)}
        style={{
          padding: "8px 20px",
          borderRadius: "6px",
          border: "1px solid #c9a227",
          background: dark
            ? "linear-gradient(135deg, #c9a227, #f5d060)"
            : "transparent",
          color: dark ? "#0a0a0a" : "#c9a227",
          fontWeight: "600",
          fontSize: "0.875rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: dark
            ? "0 0 16px rgba(201,162,39,0.5)"
            : "inset 0 0 0 0 #c9a227",
          fontFamily: "'Georgia', serif",
        }}
        onMouseEnter={e => {
          if (!dark) {
            e.currentTarget.style.background = "linear-gradient(135deg, #c9a227, #f5d060)";
            e.currentTarget.style.color = "#0a0a0a";
            e.currentTarget.style.boxShadow = "0 0 16px rgba(201,162,39,0.5)";
          }
        }}
        onMouseLeave={e => {
          if (!dark) {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#c9a227";
            e.currentTarget.style.boxShadow = "none";
          }
        }}
      >
        {dark ? "☀ Light" : "◑ Dark"}
      </button>
    </div>
  );
};

export default Navbar;