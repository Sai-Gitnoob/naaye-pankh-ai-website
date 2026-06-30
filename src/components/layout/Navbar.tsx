import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        w-[95%]
        max-w-7xl
        z-50

        bg-white/60
        backdrop-blur-xl

        border
        border-white/40

        shadow-xl

        rounded-3xl
      "
    >
      <div className="px-6 py-4 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="Naaye Pankh Logo"
            width={55}
            height={55}
            className="rounded-xl"
          />

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Naaye Pankh
            </h1>

            <p className="text-xs text-slate-500">
              Foundation
            </p>
          </div>

        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-slate-700 font-medium">

          <a
            href="#about"
            className="hover:text-blue-600 transition"
          >
            About Us
          </a>

          <a
            href="#programs"
            className="hover:text-blue-600 transition"
          >
            Programs
          </a>

          <a
            href="#impact"
            className="hover:text-blue-600 transition"
          >
            Impact
          </a>

          <a
            href="#volunteer"
            className="hover:text-blue-600 transition"
          >
            Volunteer
          </a>

          <a
            href="#contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </a>

        </div>

        {/* CTA Button */}
        <button
          className="
            bg-gradient-to-r
            from-blue-600
            to-blue-500

            text-white

            px-6
            py-3

            rounded-2xl

            shadow-lg

            hover:scale-105
            transition
          "
        >
          Join Us
        </button>

      </div>
    </nav>
  );
}