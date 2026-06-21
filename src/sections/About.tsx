import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white"
    >
      {/* INTRO */}

      <div className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              shadow-2xl
            "
          >
            <Image
              src="/images/community/comm-1.jpeg"
              alt="About Naaye Pankh"
              width={800}
              height={600}
              className="object-cover"
            />
          </div>

          {/* CONTENT */}

          <div>

            <span
              className="
                bg-blue-100
                text-blue-700
                px-4
                py-2
                rounded-full
              "
            >
              About Us
            </span>

            <h2
              className="
                text-5xl
                font-bold
                mt-6
                text-slate-900
              "
            >
              Think Global,
              <br />
              Act Local.
            </h2>

            <p
              className="
                mt-6
                text-lg
                text-slate-600
                leading-relaxed
              "
            >
              NayePankh Foundation is a
              non-governmental organisation
              driven by a strong desire to
              help society and make it a
              better place for everyone.
            </p>

            <p
              className="
                mt-4
                text-lg
                text-slate-600
                leading-relaxed
              "
            >
              Service to mankind is service
              to God. Together, we can
              revolutionise society and
              create meaningful change.
            </p>

          </div>

        </div>
      </div>

      {/* STORY SECTION 1 */}

      <div className="max-w-6xl mx-auto px-6 py-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-blue-600 font-bold text-lg">
              2020
            </p>

            <h3 className="text-4xl font-bold mt-3">
              The Pandemic Changed Everything
            </h3>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              As the world struggled to survive
              the COVID-19 pandemic, we felt an
              urge to make an impact with whatever
              resources we had.
            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We started helping the
              underprivileged, supporting families
              and communities during one of the
              toughest periods in modern history.
            </p>

          </div>

          <div>
            {/* IMAGE:
                Volunteers distributing food
                during covid period
            */}
            <Image
              src="/images/volunteers/vol-3.jpeg"
              alt="Covid Relief"
              width={800}
              height={600}
              className="rounded-3xl shadow-xl"
            />
          </div>

        </div>

      </div>

      {/* STORY SECTION 2 */}

      <div className="bg-slate-50 py-32">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              {/* IMAGE:
                  First volunteer team
                  group photo
              */}
              <Image
                src="/images/community/comm-2.jpg"
                alt="How It Started"
                width={800}
                height={600}
                className="rounded-3xl shadow-xl"
              />
            </div>

            <div>

              <p className="text-orange-500 font-bold text-lg">
                March 28, 2021
              </p>

              <h3 className="text-4xl font-bold mt-3">
                How It Started
              </h3>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                We began as a small group of
                passionate high school students.
              </p>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                What started as a simple effort
                to help people has grown into a
                movement involving volunteers
                from different cities and states.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* STORY SECTION 3 */}

      <div className="max-w-6xl mx-auto px-6 py-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-green-600 font-bold text-lg">
              What Is Naaye Pankh?
            </p>

            <h3 className="text-4xl font-bold mt-3">
              Giving Wings To Those
              Who Need Them Most
            </h3>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Naaye Pankh was created to uplift
              underprivileged communities through
              education, healthcare, hygiene
              awareness and social support.
            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              From distributing food and clothes
              to educating children and empowering
              women, we strive to solve real-world
              problems every day.
            </p>

          </div>

          <div>
            {/* IMAGE:
                Volunteers teaching children
                or education drive
            */}
            <Image
              src="/images/education/edu-2.jpg"
              alt="Education Program"
              width={800}
              height={600}
              className="rounded-3xl shadow-xl"
            />
          </div>

        </div>

      </div>

      {/* IMPACT HIGHLIGHT */}

      <div
        className="
          py-32
          bg-gradient-to-r
          from-blue-600
          to-indigo-700
          text-white
        "
      >

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            200,000+
          </h2>

          <p className="text-xl mt-4">
            Lives Impacted So Far
          </p>

          <p className="mt-8 max-w-3xl mx-auto text-white/90">
            Although this is a significant
            achievement, our mission is far
            from complete. We continue to
            work every day towards a more
            equitable and compassionate India.
          </p>

        </div>

      </div>

    </section>
  );
}