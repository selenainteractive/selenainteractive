import LOGO from "../assets/LOGO.png";
import { FaFacebookF, FaTiktok, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";

export default function GamesFooter() {
  return (
    <footer
      className="w-full py-8 md:py-12 px-4 md:px-margin flex-grow"
      style={{ backgroundColor: "rgb(82, 43, 91)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-gutter">
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <img
                alt="Selena Interactive"
                className="h-10 md:h-14 w-auto object-contain"
                src={LOGO}
              />
              <span className="font-serif text-2xl md:text-3xl text-white tracking-tighter">
                SELENA
              </span>
            </div>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-xs">
              Selena Interactive is a game development studio focused on Roblox.
              We have a team of builders, 3D modelers, and scripters.
            </p>
          </div>

          {/* Studio */}
          <div className="md:col-span-2 flex flex-col gap-3 md:gap-4">
            <h4 className="text-white/40 text-[10px] md:text-xs font-bold tracking-widest uppercase">
              STUDIO
            </h4>
            <nav className="flex flex-col gap-1 md:gap-2">
              <a
                className="text-white hover:text-primary transition-colors text-xs md:text-sm"
                href="#about"
              >
                About
              </a>
              <a
                className="text-white hover:text-primary transition-colors text-xs md:text-sm"
                href="#developer"
              >
                Team
              </a>
              <a
                className="text-white hover:text-primary transition-colors text-xs md:text-sm"
                href="/catalog"
              >
                Games
              </a>
            </nav>
          </div>

          {/* Read */}
          <div className="md:col-span-2 flex flex-col gap-3 md:gap-4">
            <h4 className="text-white/40 text-[10px] md:text-xs font-bold tracking-widest uppercase">
              READ
            </h4>
            <nav className="flex flex-col gap-1 md:gap-2">
              <a
                className="text-white hover:text-primary transition-colors text-xs md:text-sm"
                href="#"
              >
                Journal
              </a>
              <a
                className="text-white hover:text-primary transition-colors text-xs md:text-sm"
                href="#"
              >
                Newsletter
              </a>
            </nav>
          </div>

          {/* Hello */}
          <div className="md:col-span-2 flex flex-col gap-3 md:gap-4">
            <h4 className="text-white/40 text-[10px] md:text-xs font-bold tracking-widest uppercase">
              HELLO
            </h4>
            <nav className="flex flex-col gap-1 md:gap-2">
              <a
                className="text-white hover:text-primary transition-colors text-xs md:text-sm"
                href="mailto:selenainteractive@gmail.com"
              >
                selenainteractive@gmail.com
              </a>
              <span className="text-white text-xs md:text-sm">Malang · ID</span>
            </nav>
          </div>
        </div>

        {/* Large Brand */}
        <div className="w-full py-8 md:py-12 text-center">
          <h2
            className="font-bold text-white tracking-tighter leading-none text-5xl md:text-9xl uppercase"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            SELENA
            <br />
            INTERACTIVE
          </h2>
        </div>

        <div className="w-full h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          {/* Social Icons */}
          <div className="flex gap-3 md:gap-4">
            <a
              className="text-white/60 hover:text-white transition-colors text-base md:text-xl"
              href="https://www.facebook.com/profile.php?id=61593834995583"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              className="text-white/60 hover:text-white transition-colors text-base md:text-xl"
              href="https://www.tiktok.com/@selenainteractive"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              className="text-white/60 hover:text-white transition-colors text-base md:text-xl"
              href="https://x.com/selenaint26"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
            <a
              className="text-white/60 hover:text-white transition-colors text-base md:text-xl"
              href="https://www.youtube.com/channel/UCs95izuOXu_ftX8oWVl_XDQ"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              className="text-white/60 hover:text-white transition-colors text-base md:text-xl"
              href="https://www.instagram.com/selenainteractive/"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          <p className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase text-center">
            © 2026 · SELENA INTERACTIVE · GAME STUDIO COMPANY
          </p>
        </div>
      </div>
    </footer>
  );
}