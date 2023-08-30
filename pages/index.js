import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import googleplaystore from "../public/888873.png";
import Head from "next/head";
const Home = () => {
  return (
    <div>
      <Head>
        <title>Lunitech</title>
        <meta property="og:title" content="Lunitech" key="title" />
      </Head>
      <Header />

      <div className="bg-white">
        <div className="mx-auto max-w-7xl sm:px-6 sm:py-10 lg:px-8">
          <div className="relative isolate overflow-hidden bg-amber-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white">
              Welcome to Lunitech, Inc.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              A pioneering app development company dedicated to enhancing lives
              and productivity through cutting-edge software solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://play.google.com/store/apps/dev?id=9094483648640230017"
                className="flex items-center justify-center rounded-md bg-amber-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Image
                  src={googleplaystore}
                  alt="Guess the number app"
                  className="h-5 w-5 object-cover object-center mr-2"
                />
                All Apps
              </a>
              <Link
                href="/about"
                className="text-base font-semibold leading-7 text-white"
              >
                About Us <span aria-hidden="true">→</span>
              </Link>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient
                  id="827591b1-ce8c-4110-b064-7cb85a0b1217"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <Hero />

      <Footer />
    </div>
  );
};

export default Home;
