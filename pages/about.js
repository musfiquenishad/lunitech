import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

function about() {
  return (
    <div>
      <Head>
        <title>About Us - Lunitech</title>
        <meta property="og:title" content="About Us - Lunitech" key="title" />
      </Head>
      <Header />
      <div className="relative isolate bg-white py-10 sm:py-30">
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
        <div className="mx-auto max-w-screen-md px-4 md:px-8 mb-16">
          <div className="text-center mt-12 mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About us
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Know more about our company, team, and our work enviornment.
            </p>
          </div>

          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Luni Tech is an app developing company we publish wide range of
            powerful and intuitive apps tailored to simplify peoples Life and
            boost productivity. now write a small description about this company
          </p>

          <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">
            “A pioneering app development company dedicated to enhancing lives
            and productivity through cutting-edge software solutions.”
          </blockquote>

          <p className="text-gray-500 sm:text-lg">
            Our portfolio spans across various domains, from task management and
            communication to health and wellness, ensuring that there is a Luni
            Labs app to meet every individuals unique requirements. We believe
            that by harnessing the potential of technology, we can create tools
            that not only simplify intricate processes but also foster a more
            balanced and efficient lifestyle.
          </p>
          <br />
          <p className="text-gray-500 sm:text-lg">
            Innovation is the heartbeat of our company. Our dedicated team of
            skilled developers, designers, and visionaries work tirelessly to
            conceptualize, create, and refine our apps, staying ahead of the
            curve in an ever-evolving digital landscape. Each app is
            meticulously crafted with the end user in mind, providing you with
            an experience that seamlessly integrates into your daily routine.
          </p>
          <br />
          <p className="text-gray-500 sm:text-lg">
            Join us in embracing the future of productivity and convenience.
            Experience the transformative power of Luni Labs apps as we continue
            to redefine how technology can be a force for good in simplifying
            lives and amplifying achievements. Discover a world where innovation
            meets intuition, and efficiency becomes second nature. Luni Labs -
            Empowering Simplicity, Enhancing Lives.
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
