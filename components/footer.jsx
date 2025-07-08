import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <p className="text-base font-semibold text-foreground">ElevateAI</p>
          <p>
            &copy; {new Date().getFullYear()} ElevateAI. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:text-primary transition-colors"
          >
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
