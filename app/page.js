import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center w-full border-b border-gray-300 pb-4">
        <div className="text-2xl font-bold">Lamar</div>
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/jobs">Jobs</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/employers">Employers</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/signin">
              <button className="border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-200 transition">
                Sign In
              </button>
            </Link>
          </li>
          <li>
            <Link href="/get-started">
              <button className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition">
                Get Started
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-center flex-1 text-center md:text-left mt-16">
        {/* Left Column */}
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-6xl font-bold text-pink-600">
            Unlock Your Career Potential
          </h1>
          <h1 className="text-6xl font-bold text-black-500">
            Career Potential
          </h1>
          <h2 className="text-6xl mt-4 font-bold text-pink-600">with Lamar</h2>
          <p className="mt-2 text-lg font-bold">
            Discover Opportunities, Connect with Employers, and Elevate Your
            Professional Journey
          </p>
          {/* Buttons for Job Seeker and Employer */}
          <div className="mt-6 flex justify-left space-x-4">
            <Link href="/job-seeker">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                Job Seeker
              </button>
            </Link>
            <Link href="/employer">
              <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">
                Employer
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          {/* Company Logos Section */}
          <div className="flex flex-wrap justify-center gap-4">
            <Image
              src="/logos/notion.svg"
              alt="Notion"
              width={50}
              height={50}
            />
            <Image src="/logos/slack.svg" alt="Slack" width={50} height={50} />
            <Image
              src="/logos/google.svg"
              alt="Google"
              width={50}
              height={50}
            />
            <Image
              src="/logos/other-logo.svg"
              alt="Other Logo"
              width={50}
              height={50}
            />
            {/* Add more logos as needed */}
          </div>

          {/* Open to Work Section */}
          <div className="flex flex-col items-center mt-16">
            <div className="rounded-full border-4 border-pink-500 p-6">
              <h3 className="font-bold">Open to Work</h3>
            </div>
            <p className="mt-4 text-lg">Join Lamar Today and Experience</p>
            <h4 className="text-pink-500 text-2xl">The Power of Numbers</h4>
          </div>

          {/* Stats Section */}
          <div className="mt-8 flex flex-col items-center">
            <p className="font-bold text-lg">95%</p>
            <p>
              of Lamar users find job matches tailored to their skills and
              aspirations
            </p>
            <p className="font-bold text-lg mt-4">98%</p>
            <p>
              report a smoother application process compared to other job
              portals
            </p>
            <p className="font-bold text-lg mt-4">96%</p>
            <p>
              connect with top employers and advance their careers through Lamar
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 mb-8">
        <p>© 2024 Lamar. All rights reserved.</p>
      </footer>
    </div>
  );
}
