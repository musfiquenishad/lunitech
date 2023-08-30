import product1 from "../public/Apple iPad Pro 13 Inch Screenshot 2.png";
import product2 from "../public/TapeasyPromoImage.webp";
import Image from "next/image";
function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl"
            >
              Some of our apps
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Explore a wide range of powerful and intuitive apps tailored to
              simplify your Life and boost productivity.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                <Image
                  src={product1}
                  alt="Guess the number app"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                We are thrilled to present the official release of Guess the
                Number! Are you up for the challenge of cracking the code and
                mastering the art of number guessing? Get ready to embark on an
                exhilarating journey of logic and deduction.
              </p>
            </div>
            <div>
              <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                <Image
                  src={product2}
                  alt="Tapeasy platform"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                Tapeasy is a leading NFC business card provider, offering
                high-quality, affordable business cards that allow users to
                easily share their contact information and social media profiles
                with just a tap of a phone.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
