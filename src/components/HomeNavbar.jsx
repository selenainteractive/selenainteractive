import { Link } from "react-router-dom";

export default function HomeNavbar() {
  return (
    <nav
      className="w-full top-0 sticky z-50 shadow-lg"
      style={{ backgroundColor: "rgba(14, 0, 18, 0.95)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-2 md:py-3 w-full max-w-7xl mx-auto gap-3 md:gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full flex-1 max-w-full md:max-w-sm" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <span className="material-symbols-outlined text-white/50 text-sm md:text-base" style={{ fontSize: "16px" }}>search</span>
          <input
            className="bg-transparent border-none outline-none text-xs md:text-sm text-white w-full placeholder-white/30"
            placeholder="Search Games..."
            type="text"
          />  
        </div>

        {/* Tombol kembali */}
        <Link
          to="/"
          className="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-2 rounded-full text-[10px] md:text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95 flex-shrink-0"
          style={{ backgroundColor: "rgb(82, 43, 91)" }}
        >
          <span className="material-symbols-outlined text-sm md:text-base" style={{ fontSize: "16px" }}>arrow_back</span>
          <span className="hidden sm:inline">Return</span>
          <span className="sm:hidden">Return</span>
        </Link>
      </div>
    </nav>
  );
}