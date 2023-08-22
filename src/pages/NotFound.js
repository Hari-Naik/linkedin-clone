import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="h-screen w-screen bg-[#f2f2f2]">
      <header className="bg-white p-3">
        <Link to="/">
          <img
            className="ml-[12%] h-6"
            src="/images/login-logo.svg"
            alt="logo"
          />
        </Link>
      </header>
      <section className="flex items-center justify-center h-[calc(100vh-48px)]">
        <div className="flex flex-col items-center gap-2">
          <img
            src="https://static.licdn.com/sc/h/3p7p6a7q99wymlzghijta8d3p"
            alt=""
          />

          <h1 className="text-xl">This page doesn't exist</h1>
          <p className="text-sm text-[#000000E6] text-center">
            Please check your URL or return to LinkedIn <br /> home.
          </p>
          <Link to="/" className="mt-4">
            <button
              className="h-[32px] w-[146px] bg-transparent border border-[#0A66C2] rounded-full text-sm font-semibold text-[#0A66C2] cursor-point box-border hover:border-[2px] hover:bg-[#0A66C2]/25
			  transition duration-200">
              Go to your feed
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
