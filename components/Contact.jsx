export default function Contact() {
  return (
    <div className="bg-white relative isolate mb-16">
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

      <div className="mx-auto max-w-7xl py-16 px-6 lg:py-24 lg:px-8">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-center sm:text-start text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Get in touch
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 text-center sm:text-start sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Collaborate
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>admin@lunitech.co</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+61 450 378 423</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Press
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>info@lunitech.co</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+61 450 378 423</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Join our team
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>admin@lunitech.co</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+61 450 378 423</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Say hello
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>nishad@lunitech.co</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+880 1779886957</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className=" text-center sm:text-start  mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Locations
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Sydney Australia
                </h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>52 Mona Street</p>
                  <p className="mt-1">Auburn Sydney, NSW 2144</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Dhaka Bangladesh
                </h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>Titas gas road</p>
                  <p className="mt-1">Dania, Kadamtali, Dhaka-1236</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
