import GamesNavbar from "../components/GamesNavbar";
import GamesFooter from "../components/GamesFooter";
import HomeBg from "../assets/Home2.png";
import AboutBg from "../assets/About.png";
import ProfileTeam from "../assets/Profile_Team.jpg"; // perbaiki ekstensi menjadi .jpg

export default function Games() {
  // Data 6 anggota tim
  const teamMembers = [
    { name: "Eteye", role: "3D Modeller & Scripter" },
    { name: "Ceya", role: "Builder" },
    { name: "Djagad", role: "UI/UX Designer" },
    { name: "Chandra", role: "Builder" },
    { name: "Yuuki", role: "Scripter" },
    { name: "Mimir", role: "BackSound & Voice Character" },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md flex flex-col relative antialiased mx-auto w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col overflow-hidden">
        <img
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={HomeBg}
        />
        <GamesNavbar />
        <main className="flex-grow flex flex-col justify-center pt-32 pb-xl px-margin max-w-7xl w-full z-10 relative h-full mx-auto">
          <section className="w-full max-w-4xl mb-xl absolute bottom-margin left-margin mb-0">
            <h1
              className="font-bold text-white leading-none tracking-tighter mb-0"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(3rem, 15vw, 6rem)" }}
            >
              SELENA<br />INTERACTIVE.
            </h1>
          </section>
        </main>
      </section>

      {/* About Section */}
      <section
        className="relative w-full min-h-screen py-16 md:py-32 px-4 md:px-margin flex items-center overflow-hidden"
        id="about"
      >
        <img
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-50"
          src={AboutBg}
        />
        <div className="max-w-7xl mx-auto w-full z-10 relative flex flex-col gap-8 md:gap-12">
          <h2 className="text-6xl md:text-9xl font-serif text-white tracking-tighter mix-blend-overlay opacity-90">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
            <div className="bg-surface/30 backdrop-blur-[16px] border border-white/10 rounded-2xl p-6 md:p-12 shadow-2xl max-w-2xl">
              <p className="font-serif text-2xl md:text-4xl text-white leading-snug mb-6 md:mb-8">
                Founded in <span className="italic text-primary-fixed-dim">2026</span> by{" "}
                <span className="italic text-primary-fixed-dim">Eteye</span>, Selena Interactive 
                began as a web developer's transition into Roblox game development.
              </p>
              <p className="font-body-md text-on-surface-variant text-base md:text-lg max-w-md">
                Driven by a passion for gaming and a desire to create original work, we build 
                projects using Roblox Studio while aiming to expand our small team beyond 
                the Roblox platform.
              </p>
            </div>
            <div className="bg-surface/30 backdrop-blur-[16px] border border-white/10 rounded-2xl p-6 md:p-12 shadow-2xl max-w-2xl lg:mt-32">
              <p className="font-serif text-3xl md:text-5xl text-white leading-tight mb-6 md:mb-8">
                My journey began at <span className="italic text-primary-fixed-dim">Athena Studio</span>, 
                shaping our roots alongside team members who continue to create for{" "}
                <span className="italic text-primary-fixed-dim">both studios</span>.
              </p>
              <p className="font-body-md text-on-surface-variant text-base md:text-lg max-w-md">
                Athena Studio provided invaluable feedback and learning that drive Selena Interactive 
                today as we push to grow even further and maybe, just maybe, rival Rockstar one day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section - 6 profil dengan gambar Profile_Team.jpg */}
      <section
        className="relative w-full py-16 md:py-32 px-4 md:px-margin flex flex-col items-center overflow-hidden"
        id="developer"
        style={{ backgroundColor: "#190019" }}
      >
        <div className="max-w-7xl mx-auto w-full z-10 relative flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-2 mb-6 md:mb-8">
            <h2
              className="text-5xl md:text-9xl font-bold text-white tracking-tighter leading-none"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Meet the<br />Developer team
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl aspect-[4/5]"
              >
                <img
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={ProfileTeam} // semua pakai gambar yang sama, full color
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 p-3 md:bottom-4 md:left-4 md:right-4 md:p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
                  <h4 className="text-white font-bold text-base md:text-xl">{member.name}</h4>
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GamesFooter />
    </div>
  );
}