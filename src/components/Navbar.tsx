import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import "./Navbar.scss";

const Navbar = async () => {
  const user = await checkUser();

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
