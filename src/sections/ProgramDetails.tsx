import Image from "next/image";

export default function ProgramDetails() {
  const programs = [
    {
      title: "Education & Essential Goods Support",
      image: "/images/program-details/education.jpeg",
      timeline: "Year-Round",
      description:
        "Providing educational support, books, clothes and essential resources to underprivileged children and families.",
    },

    {
      title: "Healthcare & Women's Hygiene",
      image: "/images/program-details/Menstrualhygiene.jpg",
      timeline: "Monthly Drives",
      description:
        "Conducting awareness campaigns and hygiene initiatives while distributing sanitary products and promoting women's health.",
    },

    {
      title: "Hunger Relief & Food Distribution",
      image: "/images/program-details/food.jpeg",
      timeline: "Weekly Drives",
      description:
        "Distributing food and essentials to communities in need while supporting animal welfare initiatives.",
    },

    {
      title: "Youth Development & Internship Programs",
      image: "/images/program-details/intern.jpeg",
      timeline: "Ongoing",
      description:
        "Empowering students through leadership opportunities, volunteering experiences and internship programs.",
    },
  ];

  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            Our Programs
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Programs That Create Change
          </h2>

          <p className="text-slate-600 text-lg mt-6 max-w-3xl mx-auto">
            Real initiatives creating real impact in communities
            across India.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {programs.map((program, index) => (
            <div
              key={index}
              className="
                bg-white/60
                backdrop-blur-xl
                border
                border-white/40
                rounded-3xl
                overflow-hidden
                shadow-xl
                hover:-translate-y-2
                transition
              "
            >

              {/* Photo */}

              <div className="relative h-72">

                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {program.title}
                  </h3>

                  <span
                    className="
                      bg-blue-50
                      text-blue-700
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                  >
                    {program.timeline}
                  </span>

                </div>

                <p
                  className="
                    mt-4
                    text-slate-600
                    leading-relaxed
                  "
                >
                  {program.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}