import {
  Calendar,
  Book,
  Bell,
  User,
  Settings,
  LogOut,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Book className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">
                EduManage
              </span>
            </div>
            <nav className="hidden md:flex space-x-4">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Home
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Courses
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Calendar
              </button>
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Messages
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white">
                <Settings className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Welcome to EduManage
              </h1>
              <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
                Manage your college experience with ease. Access courses,
                assignments, and more.
              </p>
              <div className="mt-10 flex justify-center">
                <Link href="/student" passHref>
                  <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Quick Access
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  My Courses
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Quick access to your enrolled courses
                </p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      Introduction to Computer Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      Data Structures and Algorithms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      Web Development Fundamentals
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Upcoming Deadlines
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Don't miss these important dates
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      Project Proposal
                    </span>
                    <span className="text-red-500 dark:text-red-400">
                      Tomorrow
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      Midterm Exam
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      In 5 days
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      Group Presentation
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      Next week
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Recent Announcements
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Stay updated with the latest news
                </p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      Campus-wide Wi-Fi upgrade this weekend
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      New study resources available in the library
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      Reminder: Course registration deadline approaching
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-6">
            <p className="text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
              &copy; 2024 EduManage. All rights reserved.
            </p>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Contact Support
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
