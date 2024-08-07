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
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" className="hover:underline mr-4 md:mr-6">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:underline mr-4 md:me-6">
                About Us
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:underline mr-4 md:mr-6">
                Courses
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:underline mr-4 md:mr-6">
                Contact Us
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
