import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "next/head";

function contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Lunitech</title>
        <meta property="og:title" content="Contact Us - Lunitech" key="title" />
      </Head>
      <Header />
      <div className="mx-auto max-w-7xl px-10 text-center mt-40">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact us
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          Here are some of our contact lists and our office location
        </p>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default contact;
