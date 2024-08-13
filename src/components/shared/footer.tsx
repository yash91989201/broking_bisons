export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-xl lg:text-3xl font-semibold whitespace-nowrap text-primary">
              Broking Bisons
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-3 md:gap-6">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="https://m.facebook.com/61557250179825">
                <span className="md:hidden">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="size-8 md:inline hidden"
                >
                  <circle cx="24" cy="24" r="24" fill="#3F51B5"></circle>
                  <path
                    fill="#FFF"
                    d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                    transform="translate(-3, -4)"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/brokingbisons">
                <span className="md:hidden">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="size-8 md:inline hidden"
                >
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                    cx="19.38"
                    cy="42.035"
                    r="44.899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#fd5"></stop>
                    <stop offset=".328" stop-color="#ff543f"></stop>
                    <stop offset=".348" stop-color="#fc5245"></stop>
                    <stop offset=".504" stop-color="#e64771"></stop>
                    <stop offset=".643" stop-color="#d53e91"></stop>
                    <stop offset=".761" stop-color="#cc39a4"></stop>
                    <stop offset=".841" stop-color="#c837ab"></stop>
                  </radialGradient>
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                  ></circle>
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                    cx="11.786"
                    cy="5.54"
                    r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#4168c9"></stop>
                    <stop
                      offset=".999"
                      stop-color="#4168c9"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                  ></circle>
                  <path
                    fill="#fff"
                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                  ></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Broking Bisons™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
