const RepoCard = ({ repo }) => {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        padding: "24px",
        borderRadius: "10px",
        border: "1px solid rgba(201,162,39,0.3)",
        background: "linear-gradient(145deg, #0f0d00, #1a1500, #0a0a0a)",
        boxShadow:
          "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201,162,39,0.08)",
        textDecoration: "none",
        transition: "all 0.35s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border =
          "1px solid rgba(201,162,39,0.8)";
        e.currentTarget.style.boxShadow =
          "0 8px 32px rgba(201,162,39,0.2), 0 0 0 1px rgba(201,162,39,0.15), inset 0 1px 0 rgba(201,162,39,0.15)";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.background =
          "linear-gradient(145deg, #1a1500, #2d1f00, #111100)";
        e.currentTarget.querySelector(".repo-title").style.color =
          "#f5d060";
        e.currentTarget.querySelector(".shimmer-line").style.opacity =
          "1";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border =
          "1px solid rgba(201,162,39,0.3)";
        e.currentTarget.style.boxShadow =
          "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201,162,39,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background =
          "linear-gradient(145deg, #0f0d00, #1a1500, #0a0a0a)";
        e.currentTarget.querySelector(".repo-title").style.color =
          "#d4af37";
        e.currentTarget.querySelector(".shimmer-line").style.opacity =
          "0";
      }}
    >
      {/* Shimmer Line */}
      <div
        className="shimmer-line"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #c9a227, #f5d060, #c9a227, transparent)",
          opacity: 0,
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Avatar + Name */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <img
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "2px solid rgba(201,162,39,0.5)",
            boxShadow: "0 0 10px rgba(201,162,39,0.2)",
          }}
        />

        <div>
          <h2
            className="repo-title"
            style={{
              fontSize: "1rem",
              fontWeight: "700",
              fontFamily: "'Georgia', serif",
              color: "#d4af37",
              letterSpacing: "0.02em",
              margin: 0,
              transition: "color 0.3s ease",
            }}
          >
            {repo.full_name}
          </h2>

          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(201,162,39,0.5)",
              fontFamily: "'Georgia', serif",
              margin: "2px 0 0 0",
              letterSpacing: "0.05em",
            }}
          >
            by {repo.owner.login}
          </p>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "0.85rem",
          color: "rgba(201,162,39,0.55)",
          marginTop: "14px",
          lineHeight: "1.6",
          fontFamily: "'Georgia', serif",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {repo.description || "No description available."}
      </p>

      {/* Divider */}
      <div
        style={{
          margin: "14px 0",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(201,162,39,0.25), transparent)",
        }}
      />

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "0.8rem",
          fontFamily: "'Georgia', serif",
          fontWeight: "600",
          letterSpacing: "0.06em",
          color: "rgba(201,162,39,0.7)",
        }}
      >
        <span>
          ⭐ <span style={{ color: "#f5d060" }}>
            {repo.stargazers_count.toLocaleString()}
          </span>
        </span>

        <span>
          🍴 <span style={{ color: "#f5d060" }}>
            {repo.forks_count.toLocaleString()}
          </span>
        </span>

        {repo.language && (
          <span
            style={{
              marginLeft: "auto",
              padding: "2px 10px",
              borderRadius: "20px",
              border: "1px solid rgba(201,162,39,0.4)",
              color: "#c9a227",
              fontSize: "0.75rem",
              background: "rgba(201,162,39,0.08)",
            }}
          >
            {repo.language}
          </span>
        )}
      </div>
    </a>
  );
};

export default RepoCard;
