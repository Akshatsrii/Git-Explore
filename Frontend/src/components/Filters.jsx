import { useState } from "react";

const inputStyle = {
  padding: "9px 16px",
  borderRadius: "6px",
  border: "1px solid rgba(201,162,39,0.35)",
  background: "linear-gradient(145deg, #0f0d00, #1a1500)",
  color: "#f5d060",
  fontFamily: "'Georgia', serif",
  fontSize: "0.875rem",
  letterSpacing: "0.04em",
  outline: "none",
  transition: "all 0.3s ease",
  appearance: "none",
  WebkitAppearance: "none",
};

const focusStyle = {
  border: "1px solid #c9a227",
  boxShadow: "0 0 12px rgba(201,162,39,0.25)",
};

const GoldInput = ({ style, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      style={{
        ...inputStyle,
        ...(focused ? focusStyle : {}),
        ...style,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

const GoldSelect = ({ style, children, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <select
        {...props}
        style={{
          ...inputStyle,
          paddingRight: "36px",
          cursor: "pointer",
          ...(focused ? focusStyle : {}),
          ...style,
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {children}
      </select>
      {/* Custom dropdown arrow */}
      <span
        style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#c9a227",
          fontSize: "0.65rem",
          pointerEvents: "none",
        }}
      >
        ▼
      </span>
    </div>
  );
};

const Filters = ({ filters, setFilters, setPage }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.startsWith("@")) {
      const username = input.substring(1);
      window.open(`https://github.com/${username}`, "_blank");
      return;
    }
    setPage(1);
    setFilters({ ...filters, search: input });
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        marginBottom: "32px",
        alignItems: "center",
        padding: "20px 24px",
        borderRadius: "10px",
        background: "linear-gradient(145deg, #0a0a0a, #150f00, #0a0a0a)",
        border: "1px solid rgba(201,162,39,0.2)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201,162,39,0.07)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top shimmer line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #c9a227, #f5d060, #c9a227, transparent)",
          opacity: 0.6,
        }}
      />

      {/* Duration */}
      <GoldSelect
        value={filters.duration}
        onChange={(e) => {
          setPage(1);
          setFilters({ ...filters, duration: e.target.value });
        }}
      >
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </GoldSelect>

      {/* Language */}
      <GoldInput
        type="text"
        placeholder="Language (e.g. JavaScript)"
        value={filters.language || ""}
        onChange={(e) => {
          setPage(1);
          setFilters({ ...filters, language: e.target.value });
        }}
      />

      {/* Sort */}
      <GoldSelect
        value={filters.sort}
        onChange={(e) => {
          setPage(1);
          setFilters({ ...filters, sort: e.target.value });
        }}
      >
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="updated">Recently Updated</option>
      </GoldSelect>

      {/* Search — flex-1 */}
      <GoldInput
        type="text"
        placeholder="Search repo or @username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }}
        style={{ flex: 1, minWidth: "160px" }}
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        style={{
          padding: "9px 22px",
          borderRadius: "6px",
          border: "1px solid #c9a227",
          background: "linear-gradient(135deg, #c9a227, #f5d060)",
          color: "#0a0a0a",
          fontFamily: "'Georgia', serif",
          fontWeight: "700",
          fontSize: "0.875rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 0 14px rgba(201,162,39,0.35)",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = "0 0 22px rgba(201,162,39,0.6)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = "0 0 14px rgba(201,162,39,0.35)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Search
      </button>

      {/* Limit */}
      <GoldInput
        type="number"
        value={filters.limit}
        min={1}
        max={100}
        onChange={(e) => {
          setPage(1);
          setFilters({ ...filters, limit: e.target.value });
        }}
        style={{ width: "80px" }}
      />

      {/* Option styles for dark selects */}
      <style>{`
        select option {
          background: #1a1500;
          color: #f5d060;
        }
        input::placeholder {
          color: rgba(201,162,39,0.35);
          font-style: italic;
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          filter: invert(70%) sepia(80%) saturate(400%) hue-rotate(5deg);
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default Filters;