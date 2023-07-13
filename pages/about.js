import Footer from "../components/Footer";
import Header from "../components/Header";

function about() {
  return (
    <div>
      <Header />
      <div class="relative isolate bg-white py-10 sm:py-30">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div class="mx-auto max-w-screen-md px-4 md:px-8 mb-16">
          <div className="text-center mt-12 mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About us
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Know more about our company, team, and our work enviornment.
            </p>
          </div>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Lunitech is a leading technology startup offering exceptional
            website, web application, and software solutions. We empower
            businesses globally to embrace digital transformation through
            innovative and tailored services.
          </p>

          <blockquote class="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">
            “From desktop applications to mobile apps and enterprise-level
            software, we bring your ideas to life.”
          </blockquote>

          <p class="text-gray-500 sm:text-lg">
            With a focus on quality, we follow rigorous testing methodologies to
            ensure our deliverables exceed expectations. As your partner in
            digital innovation, we provide customized solutions aligned with
            your business objectives.
          </p>
          <p class="text-gray-500 sm:text-lg">
            Contact us to embark on a transformative journey with LuniTech and
            achieve remarkable success in the digital landscape.
          </p>
          <br />
        </div>
      </div>

      {/* hero content end */}

      <Footer />
    </div>
  );
}

export default about;
