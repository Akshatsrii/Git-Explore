const Pagination = ({ page, setPage }) => {
  const maxPage = 10;

  return (
    <div className="relative flex justify-center items-center gap-6 mt-10 py-4">

      {/* Decorative gold line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-40" />

      {/* Prev Button */}
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className={`relative z-10 px-6 py-2 rounded-md border font-semibold text-sm tracking-widest uppercase transition duration-300 font-serif
          ${
            page === 1
              ? "opacity-40 cursor-not-allowed border-yellow-600 text-yellow-600"
              : "border-yellow-600 text-yellow-600 hover:bg-gradient-to-br hover:from-yellow-600 hover:to-yellow-400 hover:text-black hover:shadow-lg"
          }
        `}
      >
        ← Prev
      </button>

      {/* Page Display */}
      <span className="relative z-10 px-6 py-2 rounded-md border border-yellow-600 text-yellow-400 font-serif font-bold tracking-widest bg-gradient-to-br from-[#1a1200] to-[#2d1f00] shadow-md">
        Page {page}
      </span>

      {/* Next Button */}
      <button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page >= maxPage}
        className={`relative z-10 px-6 py-2 rounded-md border font-semibold text-sm tracking-widest uppercase transition duration-300 font-serif
          ${
            page >= maxPage
              ? "opacity-40 cursor-not-allowed border-yellow-600 text-yellow-600"
              : "border-yellow-600 text-yellow-600 hover:bg-gradient-to-br hover:from-yellow-600 hover:to-yellow-400 hover:text-black hover:shadow-lg"
          }
        `}
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
