import { useState, useEffect } from "react";
import { fetchTrending } from "../services/api";
import RepoCard from "../components/RepoCard";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [filters, setFilters] = useState({
    duration: "week",
    limit: 9,
    search: "",
    sort: "stars",
  });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getRepos = async () => {
      try {
        setLoading(true);
        const res = await fetchTrending({ ...filters, page });
        setRepos(res.data.items);
        setError("");
      } catch {
        setError("Failed to fetch repositories.");
      }
      setLoading(false);
    };
    getRepos();
  }, [filters, page]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0a0a0a 0%, #100d00 40%, #0a0800 70%, #0a0a0a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glow blobs */}
      <div
        style={{
          position: "fixed",
          top: "-120px",
          right: "-120px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,162,39,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-100px",
          left: "-100px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,162,39,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 24px 60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Page heading */}
        <div style={{ marginBottom: "32px", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(201,162,39,0.5)",
              marginBottom: "10px",
            }}
          >
            Discover · Explore · Contribute
          </p>

          <div
            style={{
              width: "60px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #c9a227, transparent)",
              margin: "0 auto 10px",
            }}
          />
        </div>

        {/* Filters */}
        <Filters filters={filters} setFilters={setFilters} setPage={setPage} />

        {/* States */}
        {loading && <Loader />}
        {error && !loading && <ErrorMessage message={error} />}

        {/* Empty state */}
        {!loading && !error && repos.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              fontFamily: "'Georgia', serif",
              color: "rgba(201,162,39,0.4)",
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "12px", opacity: 0.4 }}>◈</div>
            No repositories found.
          </div>
        )}

        {/* Repo grid */}
        {!loading && !error && repos.length > 0 && (
          <>
            {/* Results count */}
            <p
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(201,162,39,0.4)",
                marginBottom: "20px",
              }}
            >
              Showing {repos.length} repositories
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "24px",
              }}
            >
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          </>
        )}

        {/* Pagination */}
        {!loading && repos.length > 0 && (
          <Pagination page={page} setPage={setPage} />
        )}
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          background: #0a0a0a;
          margin: 0;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(201,162,39,0.3);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(201,162,39,0.6);
        }
      `}</style>
    </div>
  );
};

export default Home;