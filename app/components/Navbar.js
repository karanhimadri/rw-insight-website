import Link from "next/link";
import React from "react";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  return (
    <>
      <header className="py-4 shadow-md bg-slate-50">
        <nav 
          className="flex justify-between items-center px-6 lg:px-12" 
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <div>
            <Link href="/" aria-label="RW Insight - Home">
              <h1 className="font-bold text-2xl text-orange-600 font-sans">
                RW Insight.
              </h1>
            </Link>
          </div>

          {/* Login & Register Buttons */}
          <div className="hidden md:flex gap-4">
            <button 
              className="px-4 py-2 border-2 rounded bg-orange-100 border-orange-700 text-sm font-medium hover:bg-orange-200"
            >
              LogIn
            </button>
            <button 
              className="px-4 py-2 border-2 rounded border-orange-700 text-sm font-medium hover:bg-orange-50"
            >
              Register
            </button>
          </div>

          {/* Hamburger Icon for Small Screens */}
          <div className="flex md:hidden">
            <VscThreeBars 
              className="text-3xl cursor-pointer text-orange-600" 
              aria-label="Open Navigation Menu"
            />
          </div>
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Navbar;



// {/* <header className="bg-white h-16 md:bg-white shadow-md">
// <nav className="text-left flex-col mb-4 md:flex items-center justify-between px-8 py-4 ">
//   {/* Brand */
//   <div>
//     <Link
//       href="/"
//       className="flex items-center gap-2 text-xl font-bold text-black"
//       aria-label="Go to RW Insight Home Page"
//     >
//       <img
//         src="/images/logo.png" // Replace with the actual path to your logo
//         alt="RW Insight Logo - Your Source for Educational and Healthcare News"
//         className="w-30 h-12" // Adjust size for logo
//       />
//     </Link>
//   </div>

//   {/* Navigation Links */}
//   <ul
//     className="hidden md:flex gap-16 text-lg font-medium text-gray-800"
//     role="navigation"
//   >
//     <li role="none">
//       <Link
//         href="/"
//         className=" font-bold hover:text-blue-600"
//         aria-label="Navigate to Home"
//       >
//         Home
//       </Link>
//     </li>
//     <li role="none">
//       <Link
//         href="/news"
//         className=" font-bold hover:text-blue-600"
//         aria-label="Navigate to News"
//       >
//         News
//       </Link>
//     </li>
//     <li role="none">
//       <Link
//         href="/education"
//         className=" font-bold hover:text-blue-600"
//         aria-label="Navigate to Education"
//       >
//         Education
//       </Link>
//     </li>
//     <li role="none">
//       <Link
//         href="/healthcare"
//         className=" font-bold hover:text-blue-600"
//         aria-label="Navigate to Healthcare"
//       >
//         HealthCare
//       </Link>
//     </li>
//   </ul>

//   {/* Auth Buttons */}
//   <div className="hidden md:flex gap-4">
//     <Link
//       href="/login"
//       className="px-4 py-2 text-white bg-black rounded hover:bg-black"
//       aria-label="Login to your account"
//       rel="noopener noreferrer" // For external link security
//     >
//       Login
//     </Link>
//     <Link
//       href="/register"
//       className="px-4 py-2 text-black border border-black rounded hover:bg-gray-100"
//       aria-label="Register Link new account"
//       rel="noopener noreferrer" // For external link security
//     >
//       Register
//     </Link>
//   </div>
// //</nav>
// //</header > */
