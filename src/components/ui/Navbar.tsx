import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Daily Challenger</h2>
        <div className="">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
