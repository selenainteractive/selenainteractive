import { useState } from "react";
import { Link } from "react-router-dom";
import Ngekos from "../Games/Ngekos/Ngekos.png"
//import MountSemeru from "../Games/Mount_Semeru/MountSemeru.png"

const categories = ["Popular", "RPG", "Action", "Adventure", "Strategy", "Horror", "Indie"];

const featuredGame = {
  title: "Ngekos",
  year: "2026",
  genre: "Open World • Simulation • Survival",
  rating: "9.0",
  platform: "ROBLOX",
  status: "Coming Soon",
  developer: "Selena Interactive",
  description:
    "A boarding-life simulation that will put both your faith and your wallet to the test.",
  cover: Ngekos,
};

const gameGrid = [
  { id: 1, title: "Ngekos", genre: "Simulation", year: "2026", cover: Ngekos, },
  //{ id: 2, title: "Mount Semeru", genre: "Adventure", year: "2026", cover: MountSemeru, }, 
];

function GameCard({ game }) {
  return (
    <div className="group cursor-pointer flex-shrink-0 w-24 md:w-40 lg:w-48">
      <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-purple-900/60 group-hover:shadow-2xl">
        <img src={game.cover} alt={game.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 md:p-3">
          <button className="w-full py-1 md:py-1.5 rounded-lg text-[10px] md:text-xs font-bold text-white" style={{ backgroundColor: "rgba(152, 85, 170, 0.85)" }}>
            ▶ Play Now
          </button>
        </div>
      </div>
      <div className="mt-1 md:mt-2 px-1">
        <p className="text-white text-xs md:text-sm font-semibold leading-tight truncate">{game.title}</p>
        <p className="text-white/50 text-[10px] md:text-xs mt-0.5">{game.year}</p>
      </div>
    </div>
  );
}

function GameGridCard({ game }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-purple-900/60 group-hover:shadow-xl">
        <img src={game.cover} alt={game.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 md:p-3">
          <button className="w-full py-1 md:py-1.5 rounded-lg text-[10px] md:text-xs font-bold text-white" style={{ backgroundColor: "rgba(152, 85, 170, 0.85)" }}>
            ▶ Play
          </button>
        </div>
      </div>
      <div className="mt-1 md:mt-2">
        <p className="text-white text-xs md:text-sm font-semibold truncate">{game.title}</p>
        <p className="text-white/40 text-[10px] md:text-xs">{game.year}</p>
      </div>
    </div>
  );
}

import HomeNavbar from "../components/HomeNavbar";
import GamesFooter from "../components/GamesFooter";
import Triler from "../Games/Ngekos/Triler_Ngekos.mp4"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Popular");

  return (
    <div className="antialiased min-h-screen flex flex-col relative overflow-x-hidden" style={{ backgroundColor: "rgb(14, 0, 18)" }}>
      <HomeNavbar />

      <main className="flex-grow w-full flex flex-col">
        {/* HERO FEATURED GAME */}
        <section className="relative w-full h-[400px] md:h-[520px]">
          <video
              src={Triler}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover brightness-60"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(14,0,18,0.95) 35%, rgba(14,0,18,0.3) 70%, transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,0,18,1) 0%, transparent 40%)" }} />

          <div className="relative z-10 h-full flex items-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
            <div className="flex gap-4 md:gap-8 items-center w-full">
              {/* Thumbnail kecil - sembunyikan di mobile */}
              <div className="hidden md:block flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ width: "140px", height: "200px" }}>
                <img src={featuredGame.cover} alt={featuredGame.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2 md:gap-4 max-w-xl">
                <h1 className="text-white font-bold leading-none tracking-tight" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(2rem, 7vw, 4rem)" }}>
                  {featuredGame.title}
                </h1>
                <p className="text-white/60 text-xs md:text-sm">{featuredGame.year} &nbsp;|&nbsp; {featuredGame.genre}</p>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-base md:text-lg">★</span>
                  <span className="text-white font-bold text-base md:text-lg">{featuredGame.rating}</span>
                  <span className="ml-1 md:ml-2 px-2 py-0.5 rounded text-[10px] md:text-xs font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">TOP RATED</span>
                  <span className="ml-1 md:ml-2 px-2 py-0.5 rounded text-[10px] md:text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">{featuredGame.platform}</span>
                </div>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xs md:max-w-sm">Status : {featuredGame.status}</p>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xs md:max-w-sm">By : {featuredGame.developer}</p>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xs md:max-w-sm">{featuredGame.description}</p>
                <div className="flex gap-3 mt-1 md:mt-2">
                  <button className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-bold text-white transition-all hover:brightness-110 active:scale-95" style={{ backgroundColor: "rgb(152, 85, 170)" }}>
                    <span>▶</span> Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GRID KATALOG */}
        <section className="px-4 md:px-8 lg:px-16 mt-8 md:mt-12 pb-12 md:pb-16 max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between mb-4 md:mb-5">
            <h2 className="text-white font-bold text-lg md:text-xl" style={{ fontFamily: "Poppins, sans-serif" }}>
              {activeCategory === "Popular" ? "Semua Game" : `Genre: ${activeCategory}`}
            </h2>
            <span className="text-white/40 text-xs md:text-sm">{gameGrid.length} game</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {gameGrid
              .filter((g) => activeCategory === "Popular" || g.genre === activeCategory)
              .map((game) => (
                <GameGridCard key={game.id} game={game} />
              ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1 md:gap-2 mt-8 md:mt-12">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={`w-8 h-8 md:w-9 md:h-9 rounded-full text-xs md:text-sm font-bold transition-all ${
                  n === 1
                    ? "text-white"
                    : "text-white/40 border border-white/20 hover:text-white hover:border-white/50"
                }`}
                style={n === 1 ? { backgroundColor: "rgb(152, 85, 170)" } : {}}
              >
                {n}
              </button>
            ))}
            <span className="text-white/30 text-xs md:text-sm mx-1">...</span>
            <button className="px-3 md:px-4 h-8 md:h-9 rounded-full text-xs md:text-sm font-bold text-white/40 border border-white/20 hover:text-white hover:border-white/50 transition-all">
              Next 
            </button>
          </div>
        </section>
      </main>

      <GamesFooter />
    </div>
  );
}