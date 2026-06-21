import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">

      {/* Background Image */}
      <Image
        src="/images/hero/hero-main.jpg"
        alt="Naaye Pankh"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/70
          via-black/40
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          min-h-screen
          max-w-7xl
          mx-auto
          px-6

          flex
          items-center
        "
      >
        <div className="max-w-3xl">

          {/* Badge */}
          <span
            className="
              bg-white/15
              backdrop-blur-xl
              text-white
              px-5
              py-2
              rounded-full
              border
              border-white/20
            "
          >
            Youth-Led NGO Since 2020
          </span>

          {/* Heading */}
          <h1
            className="
              mt-8
              text-6xl
              lg:text-6xl
              font-bold
              text-white
              leading-tight
            "
          >
            Empowering India's Youth
            <br />

            Through{" "}
            <span className="text-blue-400">
              Education
            </span>
            {" "} &
            <span className="text-orange-400">
              Opportunity
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              text-xl
              text-white/90
              max-w-2xl
            "
          >
            Naaye Pankh Foundation works with students,
            volunteers and communities to create lasting
            social impact through education, healthcare,
            awareness and opportunity.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-8
                py-4
                rounded-2xl
                shadow-xl
                transition
              "
            >
              Become a Volunteer
            </button>

            <button
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                text-white
                px-8
                py-4
                rounded-2xl
                hover:bg-white/20
                transition
              "
            >
              Explore Programs
            </button>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-10">

            <div
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-2xl
                px-6
                py-4
              "
            >
              <p className="text-3xl font-bold text-white">
                200K+
              </p>
              <p className="text-white/80 text-sm">
                Lives Impacted
              </p>
            </div>

            <div
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-2xl
                px-6
                py-4
              "
            >
              <p className="text-3xl font-bold text-white">
                50+
              </p>
              <p className="text-white/80 text-sm">
                Cities Reached
              </p>
            </div>

            <div
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-2xl
                px-6
                py-4
              "
            >
              <p className="text-3xl font-bold text-white">
                500+
              </p>
              <p className="text-white/80 text-sm">
                Volunteers
              </p>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div
            className="
              mt-12
              text-white/80
              animate-bounce
            "
          >
            ↓ Scroll to Explore
          </div>

        </div>
      </div>

    </section>
  );
}