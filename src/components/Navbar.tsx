import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import "./Navbar.scss";
import Logo from "./Logo";

const Navbar = async () => {
  const user = await checkUser();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Logo />
        <div className="auth-actions">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <div className="signed-out-wrapper">
            <SignedOut className="signed-out-wrapper">
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
