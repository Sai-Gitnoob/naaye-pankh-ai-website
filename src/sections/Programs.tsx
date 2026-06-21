export default function Programs() {
  const programs = [
    {
      title: "Education & Essential Goods",
      icon: "",
      description:
        "Providing educational support, study materials, clothes and daily essentials to underprivileged communities.",
    },
    {
      title: "Healthcare & Women's Hygiene",
      icon: "",
      description:
        "Awareness campaigns, hygiene initiatives and sanitary napkin distribution programs for women.",
    },
    {
      title: "Hunger Relief & Food Distribution",
      icon: "",
      description:
        "Fighting hunger through food distribution drives for vulnerable communities and stray animals.",
    },
    {
      title: "Youth Development & Internships",
      icon: "",
      description:
        "Leadership opportunities, volunteering experiences and internship programs for young changemakers.",
    },
  ];

  return (
    <section
      id="programs"
      className="py-32 bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-24">

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            Our Programs
          </span>

          <h2 className="text-5xl font-bold mt-6 text-slate-900">
            Creating Impact Across Communities
          </h2>

          <p className="text-slate-600 text-lg mt-6 max-w-3xl mx-auto">
            Every initiative at Naaye Pankh is designed
            to create meaningful change and empower
            communities for a better future.
          </p>

        </div>

        {/* Tree Structure */}

        <div className="relative">

          {/* Center Node */}

          <div className="flex justify-center mb-20">

            <div
              className="
                bg-gradient-to-r
                from-blue-600
                to-indigo-600

                text-white

                px-10
                py-6

                rounded-3xl

                shadow-2xl
              "
            >
              <h3 className="text-2xl font-bold">
                Naaye Pankh Foundation
              </h3>

              <p className="text-white/90 mt-2">
                Creating Impact Since 2020
              </p>
            </div>

          </div>

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-1/2
              top-20
              h-24
              w-1
              bg-blue-300
              -translate-x-1/2
            "
          />

          {/* Horizontal Line */}

          <div
            className="
              absolute
              left-1/2
              top-44
              h-1
              w-[80%]
              bg-blue-300
              -translate-x-1/2
            "
          />

          {/* Program Cards */}

          <div className="grid lg:grid-cols-4 gap-8 mt-28">

            {programs.map((program, index) => (
              <div
                key={index}
                className="
                  relative

                  bg-white/70
                  backdrop-blur-xl

                  rounded-3xl

                  p-8

                  shadow-xl

                  hover:-translate-y-2

                  transition
                "
              >
                {/* Connection Line */}

                <div
                  className="
                    absolute
                    -top-10
                    left-1/2
                    h-10
                    w-1
                    bg-blue-300
                    -translate-x-1/2
                  "
                />

                <div className="text-5xl">
                  {program.icon}
                </div>

                <h3 className="text-xl font-bold mt-4 text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {program.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}